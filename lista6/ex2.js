
const titulo = document.createElement('h1');
titulo.innerText = "Sua localização";
const conteudo = document.createElement('div');
const mapa = document.querySelector('#map');
mapa.style.height = "90vh";
window.onload = () => {
    navigator.geolocation.getCurrentPosition((position) => {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        const map = L.map('map').setView([latitude, longitude], 14);
        L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '© OpenStreetMap'
        }).addTo(map);
        L.marker([latitude, longitude])
        .addTo(map)
        .bindPopup('Localização')
        .openPopup();
    });
}

document.body.appendChild(titulo)
document.body.appendChild(conteudo)
