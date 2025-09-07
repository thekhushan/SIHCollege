# Bus Transport App - Complete Real-time Transportation System

## 🚌 Overview
A comprehensive real-time bus transport web application built with Next.js, featuring multi-role authentication, live GPS tracking, interactive maps, and complete ticketing system.

## ✨ Key Features

### 🔐 Multi-Account Authentication
- **Role-based Access**: Passengers, Conductors, and Drivers with dedicated dashboards
- **Multi-Account Support**: Users can maintain multiple accounts with different roles in the same browser
- **Cookie-based Sessions**: Secure role-based namespaces with persistent login
- **Account Switching**: Seamless switching between different user roles

### 🗺️ Real-time GPS Tracking
- **Live Location Updates**: WebSocket-powered real-time bus tracking
- **Interactive Maps**: Leaflet.js integration with OpenStreetMap
- **Route Visualization**: Bus routes with stops and real-time markers
- **Status Indicators**: On-route, at-stop, delayed, and breakdown status

### 🎫 Comprehensive Ticketing System
- **Advanced Search**: Filter by bus type, price, amenities, departure time
- **Seat Selection**: Interactive seat map with real-time availability
- **QR Code Tickets**: Digital tickets with validation codes
- **Payment Processing**: Mock payment system with multiple methods
- **Booking Management**: Complete booking history and receipt generation

### 🗄️ Database Integration
- **Neon PostgreSQL**: Production-ready database with connection pooling
- **Indian Locations**: 20+ major cities with realistic bus routes and schedules
- **Comprehensive Schema**: Users, routes, buses, bookings, GPS tracking, and more
- **Sample Data**: Pre-populated with realistic Indian transportation data

## 🛠️ Technology Stack

- **Frontend**: Next.js 14, React 18, TypeScript
- **Database**: Neon PostgreSQL with serverless driver
- **Maps**: Leaflet.js with OpenStreetMap tiles
- **Styling**: Tailwind CSS v4 with shadcn/ui components
- **Authentication**: Cookie-based with role namespaces
- **Real-time**: WebSocket connections for live updates
- **State Management**: React Context with useReducer

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ and npm/yarn
- Neon PostgreSQL database account

### Setup Steps

1. **Connect Neon Database**
   - In v0, click the gear icon (⚙️) → Integrations → Connect Neon
   - This automatically provides all required environment variables

2. **Initialize Database**
   - Run `scripts/01-create-neon-schema.sql` to create tables
   - Run `scripts/02-seed-neon-data.sql` to populate sample data

3. **Start Development**
   - The app is ready to use with mock data and real database integration

## 👥 User Roles & Features

### 🧳 Passengers
- Search and book bus tickets with advanced filters
- Track live bus locations on interactive maps
- Manage booking history and view digital tickets
- Receive real-time notifications about bus status

### 🎫 Conductors
- Validate passenger tickets via QR code scanning
- Manage passenger boarding and alighting
- Process payments and issue receipts
- Track bus occupancy and passenger counts

### 🚌 Drivers
- Share live GPS location for real-time tracking
- Update bus status (on-route, at-stop, delayed, breakdown)
- View route information and scheduled stops
- Communicate delays or issues to passengers

## 🔧 Configuration

### Environment Variables
Automatically provided by Neon integration:
- `DATABASE_URL` - Primary database connection
- `POSTGRES_URL` - Alternative connection format
- Additional Neon-specific variables for pooling

### Cookie Configuration
- **Secure**: HTTPS-only in production
- **SameSite**: Lax for cross-site compatibility
- **HttpOnly**: Client-side access for multi-account switching
- **Expiry**: 7 days with automatic renewal

## 📱 Browser Support
- **Desktop**: Chrome 90+, Firefox 88+, Safari 14+, Edge 90+
- **Mobile**: iOS Safari 14+, Chrome Mobile 90+, Samsung Internet 13+
- **Features**: WebSocket, Geolocation API, Local Storage, Cookies

## 🔒 Security Features
- **Input Validation**: Server-side validation for all user inputs
- **SQL Injection Protection**: Parameterized queries with Neon driver
- **XSS Prevention**: Content Security Policy and input sanitization
- **Cookie Security**: Secure, SameSite, and proper expiration settings

## 🎯 Demo Data
- **Cities**: Mumbai, Delhi, Bangalore, Chennai, Kolkata, Hyderabad, Pune, Ahmedabad, Jaipur, Surat, and more
- **Routes**: 15+ realistic intercity bus routes with varying distances and durations
- **Buses**: Different types (AC, Non-AC, Sleeper, Semi-Sleeper) with amenities
- **Schedules**: Multiple daily departures with dynamic pricing

## 🔄 Real-time Features
- **Live GPS Tracking**: Simulated bus movement with realistic coordinates
- **WebSocket Updates**: Real-time location and status updates
- **Dynamic ETAs**: Calculated arrival times based on traffic and distance
- **Status Notifications**: Instant updates for delays, breakdowns, or route changes

## 📊 Performance Optimizations
- **Database Indexing**: Optimized queries for routes, schedules, and bookings
- **Connection Pooling**: Efficient database connection management with Neon
- **Lazy Loading**: Components and maps loaded on demand
- **Caching**: Browser and application-level caching strategies

## 🐛 Troubleshooting

### Common Issues
1. **Database Connection**: Ensure Neon integration is properly connected
2. **Map Loading**: Check internet connection for Leaflet.js and OpenStreetMap
3. **WebSocket Issues**: Verify browser supports WebSocket connections
4. **Cookie Problems**: Ensure browser allows cookies and local storage

### Debug Steps
1. Check browser console for error messages
2. Verify all database scripts have been executed successfully
3. Ensure environment variables are properly set in v0
4. Test with different browsers if issues persist

## 📈 Scalability Considerations
- **Database**: Neon PostgreSQL with automatic scaling and connection pooling
- **Real-time**: WebSocket connections with connection management
- **Caching**: Redis-ready architecture for session and data caching
- **CDN**: Static assets optimized for global delivery

## 🤝 Contributing
This is a demonstration project showcasing modern web development practices for transportation systems. The architecture supports easy extension for additional features like:
- Payment gateway integration
- SMS/Email notifications
- Advanced analytics and reporting
- Mobile app API endpoints
- Third-party service integrations

## 📄 License
This project is for demonstration purposes and showcases best practices in building real-time transportation management systems.
