// Init weather object
const storage = new Storage;
const weatherLocation = storage.getLocationData();

const weather = new Weather(weatherLocation.city, weatherLocation.state);
const ui = new UI;


// Get weather on DOM load
document.addEventListener('DOMContentLoaded', getWeather);

// Change Location event
document.getElementById('w-changeBtn').addEventListener('click', (e) => {
    const city = document.getElementById('city').value;
    const state = document.getElementById('state').value;
    weather.changeLocation(city, state);

    //Set localstorage
    storage.setLocationData(city, state);
    getWeather();

    $('#locModal').modal('hide');
});

function getWeather(){
    weather.getWeather()
        .then(res => {
            console.log(res);
            ui.paint(res);
        })
        .catch(err => console.log(err));
}
