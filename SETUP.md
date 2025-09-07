# Bus Transport App Setup Guide

## Overview
This is a comprehensive real-time bus transport web application built with Next.js, Neon PostgreSQL database, Leaflet.js maps, and multi-account cookie-based authentication.

## Features
- **Multi-Role Authentication**: Passengers, Conductors, and Drivers with role-specific dashboards
- **Real-time GPS Tracking**: Live bus location updates with WebSocket connections
- **Interactive Maps**: Leaflet.js integration with OpenStreetMap for live bus tracking
- **Comprehensive Ticketing**: Booking, validation, QR codes, and payment processing
- **Multi-Account Support**: Users can have multiple accounts (different roles) in the same browser
- **Advanced Search**: Bus search with filters, sorting, and seat selection
- **Database Integration**: Neon PostgreSQL with comprehensive schema for Indian locations

## Prerequisites
- Node.js 18+ and npm/yarn
- Neon PostgreSQL database account
- Modern web browser with JavaScript enabled

## Setup Instructions

### 1. Database Setup (Neon PostgreSQL)

#### Connect Neon Integration
1. In your v0 project, click the gear icon (⚙️) in the top right
2. Go to "Integrations" and connect your Neon database
3. This will automatically provide the required environment variables

#### Run Database Scripts
Execute the following scripts in order:
1. `scripts/01-create-neon-schema.sql` - Creates all database tables
2. `scripts/02-seed-neon-data.sql` - Populates with sample Indian data

### 2. Environment Variables
The following environment variables are automatically provided by the Neon integration:
- `DATABASE_URL` - Neon database connection string
- `POSTGRES_URL` - Alternative connection format
- Additional Neon-specific variables for connection pooling

### 3. Application Features

#### Authentication System
- **Multi-Account Support**: Users can maintain separate accounts for different roles
- **Cookie-Based Storage**: Secure role-based namespaces in browser cookies
- **Role Switching**: Easy switching between passenger, conductor, and driver accounts
- **Persistent Sessions**: Accounts remain logged in across browser sessions

#### Real-time Tracking
- **WebSocket Integration**: Live updates for bus locations and status
- **GPS Simulation**: Mock GPS data for development and testing
- **Interactive Maps**: Leaflet.js with OpenStreetMap tiles
- **Route Visualization**: Bus routes with stops and real-time markers

#### Ticketing System
- **Advanced Search**: Filter by bus type, price, amenities, departure time
- **Seat Selection**: Interactive seat map with availability
- **QR Code Generation**: Digital tickets with validation codes
- **Payment Integration**: Mock payment processing with multiple methods

### 4. User Roles and Permissions

#### Passengers
- Search and book bus tickets
- Track live bus locations
- Manage booking history
- View QR tickets and receipts

#### Conductors
- Validate passenger tickets
- Manage passenger lists
- Process payments and refunds
- Track bus occupancy

#### Drivers
- Share live GPS location
- Update bus status and delays
- View route information
- Manage vehicle details

### 5. Development Features

#### Mock Data
- **Indian Locations**: 20+ major cities with realistic bus routes
- **Sample Buses**: Different types (AC, Non-AC, Sleeper, Semi-Sleeper)
- **Realistic Schedules**: Multiple daily departures with varying prices
- **Live Simulation**: Mock GPS tracking with realistic movement patterns

#### API Structure
- **RESTful Endpoints**: Standard CRUD operations for all entities
- **WebSocket Events**: Real-time updates for tracking and notifications
- **Database Queries**: Optimized PostgreSQL queries with proper indexing

### 6. Browser Compatibility
- **Modern Browsers**: Chrome 90+, Firefox 88+, Safari 14+, Edge 90+
- **Mobile Support**: Responsive design for iOS and Android browsers
- **Offline Capability**: Service worker for basic offline functionality

### 7. Security Features
- **Input Validation**: Server-side validation for all user inputs
- **SQL Injection Protection**: Parameterized queries and prepared statements
- **XSS Prevention**: Content Security Policy and input sanitization
- **Cookie Security**: HttpOnly, Secure, and SameSite cookie attributes

### 8. Performance Optimizations
- **Database Indexing**: Optimized indexes for common queries
- **Connection Pooling**: Efficient database connection management
- **Lazy Loading**: Components and maps loaded on demand
- **Caching**: Browser and server-side caching strategies

## Usage Examples

### For Passengers
1. Register/login as a passenger
2. Search for buses between cities
3. Apply filters and select preferred bus
4. Choose seats and complete booking
5. Track bus location in real-time
6. Show QR ticket to conductor

### For Conductors
1. Login as conductor
2. Scan passenger QR tickets for validation
3. Manage passenger boarding/alighting
4. Process payments and issue receipts
5. Update passenger counts and occupancy

### For Drivers
1. Login as driver
2. Start GPS location sharing
3. Update bus status (on-route, at-stop, delayed)
4. View route information and stops
5. Communicate delays or issues

## Troubleshooting

### Common Issues
1. **Database Connection**: Ensure Neon integration is properly connected
2. **Map Loading**: Check internet connection for Leaflet.js and OpenStreetMap
3. **WebSocket Issues**: Verify browser supports WebSocket connections
4. **Cookie Problems**: Ensure browser allows cookies and local storage

### Support
- Check browser console for error messages
- Verify all database scripts have been executed
- Ensure environment variables are properly set
- Test with different browsers if issues persist

## Technology Stack
- **Frontend**: Next.js 14, React 18, TypeScript
- **Database**: Neon PostgreSQL with connection pooling
- **Maps**: Leaflet.js with OpenStreetMap tiles
- **Styling**: Tailwind CSS with shadcn/ui components
- **Authentication**: Cookie-based with role namespaces
- **Real-time**: WebSocket connections for live updates
\`\`\`

```tsx file="" isHidden
