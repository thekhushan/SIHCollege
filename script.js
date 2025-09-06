// Initialize map
const map = L.map('map').setView([23.0225, 72.5714], 12);

// Add OpenStreetMap tiles
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

let currentRouteControl = null;
let currentMarkers = [];

// Build sidebar
const routesContainer = document.getElementById('routes');

routesData.forEach(route => {
  const routeDiv = document.createElement('div');
  routeDiv.className = 'route';
  routeDiv.innerHTML = `
    <div class="route-title">${route.start} → ${route.end}</div>
    <div class="stops">
      ${route.stops.map(s => `<div class="stop">• ${s.name}</div>`).join('')}
    </div>
  `;
  routesContainer.appendChild(routeDiv);

  routeDiv.addEventListener('click', () => {
    // Toggle stops smoothly
    const stopsDiv = routeDiv.querySelector('.stops');
    const isOpen = stopsDiv.classList.contains('open');
    document.querySelectorAll('.stops').forEach(s => s.classList.remove('open'));
    if (!isOpen) stopsDiv.classList.add('open');

    // Highlight active route
    document.querySelectorAll('.route').forEach(r => r.classList.remove('active'));
    routeDiv.classList.add('active');

    // Clear previous route and markers
    if (currentRouteControl) map.removeControl(currentRouteControl);
    currentMarkers.forEach(m => map.removeLayer(m));
    currentMarkers = [];

    // Draw route along real roads
    currentRouteControl = L.Routing.control({
      waypoints: route.stops.map(s => L.latLng(s.lat, s.lng)),
      routeWhileDragging: false,
      addWaypoints: false,
      draggableWaypoints: false,
      createMarker: () => null, // don’t create default markers
      lineOptions: {
        styles: [{ color: 'blue', opacity: 0.8, weight: 5 }]
      }
    }).addTo(map);

    // Add stop markers
    route.stops.forEach(s => {
      const marker = L.circleMarker([s.lat, s.lng], {
        radius: 5,
        color: 'red',
        fillColor: 'red',
        fillOpacity: 0.8
      }).addTo(map).bindPopup(s.name);
      currentMarkers.push(marker);
    });

    // Fit map bounds to route stops
    const latlngs = route.stops.map(s => [s.lat, s.lng]);
    map.fitBounds(latlngs);
  });
});
