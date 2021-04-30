import './style.css'
import './node_modules/leaflet/dist/leaflet.css'
//Needed for MapBox version
/*import env from './env.json'*/
import L from 'leaflet'

var mymap = L.map('mapid').setView([51.505, -0.09], 20);

//OpenStreet Map version (free)
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(mymap);

//MapBox version (free-tier, requires token)
/*L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'nicolasbrondinbernard/cko3dvxaf05zt18nms87pt1zw',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: env.MAPBOX_TOKEN
}).addTo(mymap);*/

