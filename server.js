// server.js
import express from "express";
import cors from "cors";
import { createClient } from "@supabase/supabase-js";
import { createServer } from "http";
import { Server as SocketIOServer } from "socket.io";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const httpServer = createServer(app);
const io = new SocketIOServer(httpServer, {
  cors: {
    origin: "*", // change to your frontend origin in production
  },
});

app.use(cors());
app.use(express.json());

// --- Supabase Setup (server uses service role key) ---
const SUPABASE_URL = process.env.SUPABASE_URL;
const SUPABASE_SERVICE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;
if(!SUPABASE_URL || !SUPABASE_SERVICE_KEY) {
  console.error("Missing SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY in .env");
  process.exit(1);
}
const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_KEY);

// Root
app.get("/", (req, res) => {
  res.send("✅ AMTS Realtime Server is running");
});

// --- LOCATIONS: insert/upsert and broadcast ---
app.post("/api/locations", async (req, res) => {
  try {
    const { user_id, latitude, longitude } = req.body;
    if(!user_id || !latitude || !longitude) return res.status(400).json({ error: "Missing fields" });

    const payload = {
      user_id,
      latitude,
      longitude,
      updated_at: new Date().toISOString()
    };

    const { data, error } = await supabase.from("locations").upsert(payload, { onConflict: "user_id" });
    if(error) return res.status(500).json({ error: error.message });

    // Broadcast via socket.io
    io.emit("location-update", payload);

    res.json({ success: true, data });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
});

// --- BOOKINGS: create multiple bookings ---
app.post("/api/bookings", async (req, res) => {
  try {
    const { bookings } = req.body;
    if(!Array.isArray(bookings) || bookings.length === 0) return res.status(400).json({ error: "No bookings provided" });

    // Insert rows
    const { data, error } = await supabase.from("bookings").insert(bookings).select();
    if(error) return res.status(500).json({ error: error.message });

    // Broadcast to clients interested in that route(s)
    const route_ids = Array.from(new Set(bookings.map(b => b.route_id).filter(Boolean)));
    route_ids.forEach(route_id => {
      io.emit("booking-update", { route_id, action: "created", rows: data.filter(d => d.route_id === route_id) });
    });

    res.json({ success: true, inserted: data });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
});

// GET bookings for a route
app.get("/api/bookings", async (req, res) => {
  try {
    const { route_id } = req.query;
    if(!route_id) return res.status(400).json({ error: "route_id is required" });

    const { data, error } = await supabase.from("bookings").select("*").eq("route_id", route_id).eq("status", true);
    if(error) return res.status(500).json({ error: error.message });
    res.json(data);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
});

// Mark booking complete or remove
app.post("/api/bookings/:id/complete", async (req, res) => {
  try {
    const id = req.params.id;
    // either delete or update status=false; we'll update status=false
    const { data, error } = await supabase.from("bookings").update({ status: false }).eq("id", id).select();
    if(error) return res.status(500).json({ error: error.message });

    // Broadcast
    io.emit("booking-update", { action: "completed", id, rows: data });
    res.json({ success: true, data });
  } catch (err) {
    console.error(err);
    res.sta
