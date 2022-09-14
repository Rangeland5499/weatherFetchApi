const API_URL = 'https://api.openweathermap.org/data/2.5/weather?q=';
const API_KEY = '[Skriv din egen API key!]';
const API_UNITS = 'metric';

let tempElement = document.querySelector('#local-weather_temp');
let searchElement = document.querySelector('#local-weather_search');
let cityNameElement = document.querySelector('#local-weather_cityName');

searchElement.addEventListener('click', () => {
    getWeatherByCityName(cityNameElement.value);

});

async function getWeatherByCityName(cityName) {
    let response = await fetch(API_URL + cityName + '&appid=' + API_KEY + '&units=' + API_UNITS);
    let json = await response.json();
    
    console.log(json);

    tempElement.innerHTML = `Det er nu ${json.main.temp}&deg; C i ${cityName}`;
}