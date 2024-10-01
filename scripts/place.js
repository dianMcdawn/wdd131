// select the DOM elements for output
const doctemp = document.querySelector("#temperature");
const doccond = document.querySelector("#conditions");
const docwspeed = document.querySelector("#windspeed");
const docwchill = document.querySelector("#windchill");

//Some weather variables
let temperature = 10;
let windspeed = 5;
let windchill = calculateWindChill(temperature, windspeed);

//Saving Data
doctemp.innerHTML = `${temperature} ºC`;
docwspeed.innerHTML = `${windspeed} km/h`;
docwchill.innerHTML = `${windchill}`;

//Some functions
function calculateWindChill(temperature, windspeed) {
    if (temperature <= 10) { return "> 4.8 km/h"; } else { return "N/A"; }
}