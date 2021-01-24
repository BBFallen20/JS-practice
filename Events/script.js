const status = document.querySelector('#location-value')
const mapCanvas = document.querySelector('#map');

function success(loc){
    const latitude = loc.coords.latitude;
    const longitude = loc.coords.longitude;
    status.textContent = `Latitude: ${latitude}| longitude: ${longitude}`;
    status.setAttribute('href', `https://www.openstreetmap.org/#map=18/${latitude}/${longitude}`);
    let mapOptions = {
        center: new google.maps.LatLng(latitude, longitude),
        zoom: 10,
    }
    let map = new google.maps.Map(mapCanvas, mapOptions);
}

function error(){
    status.textContent = 'Error while processing your location... :(';
}

function find_me(){
    navigator.geolocation.getCurrentPosition(success, error)
}

document.querySelector('#location').addEventListener('click', find_me)