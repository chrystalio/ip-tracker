// Set DOM element
const [ipInput, form, ipAddress, locationIP, timeZone, ISP] = ["#search", "form", "ip-address", "location", "time-zone", "isp"].map(selector => document.querySelector(selector));

// Function to fetch data from API
const getIpInfo = async (ip) => {
    const response = await fetch(`https://ipapi.co/${ip}/json/`);
    if(!response.ok) throw new Error('Failed to fetch iP Information');
    return await response.json();
}

// Function to render IP Information to the page
const renderIpInfo = (data) => {
    [ipAddress, locationIP, timeZone, ISP].forEach((element, index) => {
        element.textContent = index === 0 ? data.ip : index === 1 ? `${data.city}, ${data.region} ${data.postal}` : index === 2 ? `UTC${data.utc_offset}` : data.org;
    });
    const { latitude, longitude } = data;
    map.setView([latitude, longitude], 13);

}

// Initialize leaflet map
const map = L.map('map').setView([-6.315299, 106.699219], 6).addLayer(L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 20,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}));