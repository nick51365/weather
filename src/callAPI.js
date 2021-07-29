import * as cityList from "./assets/city.list.json";
import * as renderPage from "./renderPage.js";

//API key
let key = "2a7c2f8041b4067f7f76241f5798f915";
let newWeatherObj = "";

//Takes processed input and finds corresponding city object in .json file
function findCityByName(input){
    let errorMsg = document.getElementById("errorMsg")
    if (input.length === 1){
        const city = cityList.find(city => city.name.toLowerCase() == input);
            if (city === undefined){
                throwError();
                return;
            }else{
                fetchData(city.id, city.state, city.country);
                errorMsg.style.display = "none";
            };
            
    }else{
        const city = cityList.find(city => city.name.toLowerCase() == input[0] &&
        city.state.toLowerCase() == input[1]);
            if (city === undefined){
                throwError();
                return;
            }else{
                fetchData(city.id, city.state, city.country);
                errorMsg.style.display = "none";
            };

    }
};

//Takes city object from .json and calls OpenWeatherMap API
async function fetchData(cityID, cityState, cityCountry){
    let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?id=${cityID}&appid=`+ key);
    let data = await response.json();
    newWeatherObj = createWeatherObj(data, cityState, cityCountry);
    renderPage.buildWeatherContainer();
};

//Create a new WeatherData object to hold desired data from API response
function createWeatherObj(data, cityState, cityCountry){
    let newObj = new WeatherData(
        data.name,
        cityState,
        cityCountry,
        data.weather[0].description,
        data.main.temp,
        data.main.feels_like,
        data.clouds.all,
        data.main.humidity,
        data.wind.speed,
    )
    return newObj;
};

//Constructor for WeatherData object
function WeatherData(cityName,cityState,cityCountry,desc,currentTemp,feelsLike,cloudCoverage,humidity,windSpeed){
    this.cityName = cityName;
    this.state = cityState;
    this.country = cityCountry;
    this.desc = desc;
    this.currentTemp = kToFahrenheit(currentTemp).toFixed(0)+ "\xB0" + "F";
    this.feelsLike = kToFahrenheit(feelsLike).toFixed(0)+ "\xB0" + "F";
    this.cloudCoverage = cloudCoverage + "%";
    this.humidity = humidity + "%";
    this.windSpeed = speedConvert(windSpeed).toFixed(2) + " MPH";

};

function throwError(){
    let errorMsg = document.getElementById("errorMsg");
    if (errorMsg.style.display === "block"){
        errorMsg.style.display = "none";
        setTimeout(()=>
            errorMsg.style.display ="block"
        ,10);
    }else{
        errorMsg.style.display = "block";
    }
};

//Convert temps in Kelvin to Fahrenheit
function kToFahrenheit(kelvin){
    let tempF = 1.8 * (kelvin-273) + 32;
    return tempF;
};

//Convert wind speed in m/s to mph
function speedConvert(metersPerSecond){
    let speedMPH = metersPerSecond * 2.2369;
    return speedMPH;
};

export{
    fetchData,
    findCityByName,
    newWeatherObj,
};