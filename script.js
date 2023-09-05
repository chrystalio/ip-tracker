// Set DOM element
const [ipInput, form, ipAddress, locationIP, timeZone, ISP] = ["#search", "form", "ip-address", "location", "time-zone", "isp"].map(selector => document.querySelector(selector));

// Initialize leaflet map
const map = L.map('map').setView([-6.315299, 106.699219], 6).addLayer(L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 20,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}));