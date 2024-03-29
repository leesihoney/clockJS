const weather = document.querySelector(".js-weather");
const COORDS = 'coords';
const API_KEY = "085249c1f42317f613f21b7908ced5c3";

function getWeather(lat, lng) {
    fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`
        ).then(function(response){
            return response.json();
        }).then(function(json){
            const temperature = json.main.temp;
            const place = json.name;
            weather.innerText = `${temperature} @ ${place}`;
        });
}
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
    getWeather(latitude, longitude);
    
}

function handleGeoError() {
    console.log("Can't access geolocation");
}
function askForCords() {
    navigator.geolocation.getCurrentPosition(handleGeoSuccess, handleGeoError);
}
function loadCords() {
    const loadedCoords = localStorage.getItem(COORDS);
    if (loadedCoords===null) {
        askForCords();
    } else {
        const parseCoords = JSON.parse(loadedCoords); 
        getWeather(parseCoords.latitude, parseCoords.longitude);
    }
}

function init() {
    loadCords();
}

init();