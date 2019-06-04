const COORDS = 'coords';
const API_KEY = "085249c1f42317f613f21b7908ced5c3";

function saveCoords(coordsObj){
    localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}

function handleGeoSuccess(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const coordsObj = {
        latitude: latitude,
        longitude: longitude
    };

    saveCoords(coordsObj);
    
}

function handleGeoError() {
    console.log("Can't access geolocation");
}
function askForCords() {
    navigator.geolocation.getCurrentPosition(handleGeoSuccess, handleGeoError);
}
function loadCords() {
    const loadedCords = localStorage.getItem(COORDS);
    if (loadedCords===null) {
        askForCords();
    } else {
        //get Weather
    }
}

function init() {
    loadCords();
}

init();