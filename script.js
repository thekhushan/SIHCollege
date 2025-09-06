// --- SUPABASE SETUP ---
const SUPABASE_URL = 'https://nljannzcgczyljrgjmaq.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5samFubnpjZ2N6eWxqcmdqbWFxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTcxMzcxODksImV4cCI6MjA3MjcxMzE4OX0.Sm0DLTvuo7BlPqfFdZXjOPQoMCHBa6AlXul1r4HDEXs'; // replace with your key
const { createClient } = supabase;
const client = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// --- ELEMENTS ---
const authContainer = document.getElementById('auth-container');
const appContainer = document.getElementById('app-container');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const confirmPasswordInput = document.getElementById('confirm-password');
const signupBtn = document.getElementById('signup-btn');
const loginBtn = document.getElementById('login-btn');
const authMessage = document.getElementById('auth-message');
const logoutBtn = document.getElementById('logout-btn');

const authTitle = document.getElementById('auth-title');
const toggleText = document.getElementById('toggle-text');
let toggleLink = document.getElementById('toggle-link');

let isLogin = true;
logoutBtn.style.display = 'none';

// --- SHOW / HIDE ---
function showApp() { authContainer.classList.add('hidden'); appContainer.classList.remove('hidden'); }
function showAuth() { authContainer.classList.remove('hidden'); appContainer.classList.add('hidden'); }

// --- TOGGLE LOGIN / SIGNUP ---
function attachToggle() {
  toggleLink.onclick = () => {
    isLogin = !isLogin;
    if(isLogin){
      authTitle.textContent = "Log In";
      loginBtn.classList.remove('hidden');
      signupBtn.classList.add('hidden');
      confirmPasswordInput.classList.add('hidden');
      toggleText.innerHTML = `Don't have an account? <span id="toggle-link" style="color:#007bff; cursor:pointer;">Sign Up</span>`;
    } else {
      authTitle.textContent = "Sign Up";
      loginBtn.classList.add('hidden');
      signupBtn.classList.remove('hidden');
      confirmPasswordInput.classList.remove('hidden');
      toggleText.innerHTML = `Already have an account? <span id="toggle-link" style="color:#007bff; cursor:pointer;">Log In</span>`;
    }
    toggleLink = document.getElementById('toggle-link');
    attachToggle();
  }
}
attachToggle();

// --- SIGNUP ---
signupBtn.onclick = async () => {
  const email = emailInput.value.trim();
  const password = passwordInput.value.trim();
  const confirmPassword = confirmPasswordInput.value.trim();

  if(!email || !password || !confirmPassword){
    authMessage.textContent = "Please fill all fields.";
    return;
  }
  if(password !== confirmPassword){
    authMessage.textContent = "Passwords do not match.";
    return;
  }

  const { error } = await client.auth.signUp({ email, password, options:{ emailRedirectTo: "https://sihcollege.vercel.app" }});
  authMessage.textContent = error ? error.message : "Signup successful! Check email to verify.";
};

// --- LOGIN ---
loginBtn.onclick = async () => {
  const email = emailInput.value.trim();
  const password = passwordInput.value.trim();

  if(!email || !password){
    authMessage.textContent = "Please enter email and password.";
    return;
  }

  const { data, error } = await client.auth.signInWithPassword({ email, password });
  if(error){
    authMessage.textContent = error.message;
  } else if(!data.user.email_confirmed_at){
    authMessage.textContent = "Please verify your email before logging in!";
  } else {
    logoutBtn.style.display = 'block';
    initApp(data.user);
  }
};

// --- LOGOUT ---
logoutBtn.onclick = async () => {
  await client.auth.signOut();
  showAuth();
  logoutBtn.style.display = 'none';
  document.getElementById('map').innerHTML = '';
  document.getElementById('seats').innerHTML = '';
  document.getElementById('seat-sidebar').classList.add('hidden');
};

// --- AUTO LOGIN SESSION ---
(async () => {
  const { data:{session} } = await client.auth.getSession();
  if(session?.user && session.user.email_confirmed_at){
    logoutBtn.style.display = 'block';
    initApp(session.user);
  }
})();

// --- AUTH STATE CHANGE ---
client.auth.onAuthStateChange((event, session) => {
  if(event==="SIGNED_IN" && session?.user && session.user.email_confirmed_at){
    logoutBtn.style.display = 'block';
    initApp(session.user);
  }
  if(event==="SIGNED_OUT"){
    showAuth();
    logoutBtn.style.display = 'none';
  }
});

// --- MAIN APP ---
async function initApp(user){
  showApp();

  const map = L.map('map').setView([23.0225,72.5714],12);
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{
    attribution:'&copy; OpenStreetMap contributors'
  }).addTo(map);

  let currentRouteControl = null;
  let currentMarkers = [];
  const seatSidebar = document.getElementById('seat-sidebar');

  const checkRouteBtn = document.getElementById('check-route-btn');
  const startInput = document.getElementById('start-location');
  const endInput = document.getElementById('end-location');
  const routeMessage = document.getElementById('route-message');

  checkRouteBtn.addEventListener('click', ()=>{
    const start = startInput.value.trim().toLowerCase();
    const end = endInput.value.trim().toLowerCase();

    if(!start||!end){
      routeMessage.textContent = "Please enter both start and end stops.";
      seatSidebar.classList.add('hidden');
      return;
    }

    // Find route containing both stops
    const matchedRoute = routesData.find(r=>{
      const stopNames = r.stops.map(s=>s.name.toLowerCase());
      return stopNames.includes(start) && stopNames.includes(end);
    });

    if(!matchedRoute){
      routeMessage.textContent = "No route found!";
      seatSidebar.classList.add('hidden');
      if(currentRouteControl) map.removeControl(currentRouteControl);
      currentMarkers.forEach(m=>map.removeLayer(m));
      currentMarkers=[];
      return;
    }

    const startIndex = matchedRoute.stops.findIndex(s=>s.name.toLowerCase()===start);
    const endIndex = matchedRoute.stops.findIndex(s=>s.name.toLowerCase()===end);
    if(startIndex > endIndex){
      routeMessage.textContent = "Invalid stop order!";
      return;
    }

    // Segment from start to end inclusive
    const segmentStops = matchedRoute.stops.slice(startIndex,endIndex+1);

    routeMessage.textContent = "Route segment found! Select your seats below.";
    seatSidebar.classList.remove('hidden');

    if(currentRouteControl) map.removeControl(currentRouteControl);
    currentMarkers.forEach(m=>map.removeLayer(m));
    currentMarkers=[];

    currentRouteControl = L.Routing.control({
      waypoints: segmentStops.map(s=>L.latLng(s.lat,s.lng)),
      routeWhileDragging:false,
      addWaypoints:false,
      draggableWaypoints:false,
      createMarker:()=>null,
      lineOptions:{styles:[{color:'blue',opacity:0.8,weight:5}]}
    }).addTo(map);

    segmentStops.forEach(s=>{
      const marker = L.circleMarker([s.lat,s.lng],{radius:5,color:'red',fillColor:'red',fillOpacity:0.8})
        .addTo(map).bindPopup(s.name);
      currentMarkers.push(marker);
    });

    map.fitBounds(segmentStops.map(s=>[s.lat,s.lng]));
    generateSeats();
  });

  // --- Seat Booking ---
  const seatsPerBus = 40;
  function generateSeats(){
    const seatsContainer = document.getElementById('seats');
    seatsContainer.innerHTML='';
    for(let i=1;i<=seatsPerBus;i++){
      const seat = document.createElement('div');
      seat.className='seat';
      seat.innerText=i;
      seat.addEventListener('click',()=>{ if(!seat.classList.contains('booked')) seat.classList.toggle('selected'); });
      seatsContainer.appendChild(seat);
    }
  }

  document.getElementById('confirm-booking').addEventListener('click',()=>{
    const selectedSeats = document.querySelectorAll('.seat.selected');
    selectedSeats.forEach(seat=>{seat.classList.add('booked'); seat.classList.remove('selected');});
    alert(`${selectedSeats.length} seats booked successfully!`);
  });

  // --- User Location ---
  async function updateLocation(lat,lng){
    const { error } = await client.from('locations').upsert({user_id:user.id,latitude:lat,longitude:lng,updated_at:new Date()});
    if(error) console.error(error);
  }

  if("geolocation" in navigator){
    navigator.geolocation.getCurrentPosition(pos=>{
      const lat=pos.coords.latitude,lng=pos.coords.longitude;
      L.marker([lat,lng]).addTo(map).bindPopup("You are here").openPopup();
      updateLocation(lat,lng);
    });
    setInterval(()=>navigator.geolocation.getCurrentPosition(pos=>updateLocation(pos.coords.latitude,pos.coords.longitude)),10000);
  }
}
