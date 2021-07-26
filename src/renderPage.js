import {newWeatherObj} from "./callAPI";

//Build search bar
function buildSearchBar(){
    let inputForm = document.createElement("form");
    inputForm.id = "form";
    document.body.append(inputForm);

    //Build search bar input
    let searchBar = document.createElement("input");
    searchBar.id = "searchBar";
    inputForm.appendChild(searchBar);

    //Build search button
    let searchButton = document.createElement("button");
    searchButton.id = "searchButton";
    searchButton.type = "submit";
    inputForm.append(searchButton);

    let buttonPic = document.createElement("img");
    buttonPic.src = "./assets/images/search.png";
    buttonPic.id = "buttonPic";
    searchButton.append(buttonPic);
};

//Build display for weather data
function buildWeatherContainer(){
    console.log(newWeatherObj);
    let weatherContainer = document.getElementById("weatherContainer");
    let nameContainer = document.createElement("div");
    let cityName = document.createElement("h1");
    let stateOrCountry = document.createElement("h1");
    let tempContainer = document.createElement("div");
    let descContainer = document.createElement("p");
    let feelsLike = document.createElement("h4");
    let weatherRight = document.createElement("div");
    let weatherLeft = document.createElement("div");
    let windSpeed = document.createElement("h4");
    let humidity = document.createElement("h4");

    //Assign IDs to elements
    nameContainer.id = "nameContainer";
    cityName.id = "cityName";
    stateOrCountry.id = "stateOrCountry";
    tempContainer.id = "tempContainer";
    descContainer.id = "descContainer";
    feelsLike.id = "feelsLike";
    weatherRight.id = "weatherRight";
    weatherLeft.id = "weatherLeft";
    windSpeed.id = "windSpeed";
    humidity.id = "humidity";


    //Clear weather container
    weatherContainer.innerHTML = "";

    //Populate nameContainer with city name and state/country
    if(newWeatherObj.state){
        cityName.innerHTML = newWeatherObj.cityName.toUpperCase() + "," + "&nbsp";
        stateOrCountry.textContent = newWeatherObj.state;
        nameContainer.append(cityName, stateOrCountry);

    }else{
        cityName.innerHTML = newWeatherObj.cityName.toUpperCase() + "," + "&nbsp";
        stateOrCountry.textContent = newWeatherObj.country;
        nameContainer.append(cityName, stateOrCountry);
    }
    
    //Populate tempContainer
    tempContainer.innerHTML = newWeatherObj.currentTemp;
    descContainer.innerHTML = newWeatherObj.desc;
    feelsLike.innerHTML = "feels like:&nbsp" + newWeatherObj.feelsLike;
    windSpeed.innerHTML = "wind speed:&nbsp" + newWeatherObj.windSpeed;
    humidity.innerHTML = "humidity:&nbsp" + newWeatherObj.humidity;
    

    //Append new elements to DOM
    weatherContainer.append(
        weatherLeft,
        weatherRight,
    );

    weatherLeft.append(
        descContainer,
        nameContainer,
        tempContainer,
    );

    weatherRight.append(
        feelsLike,
        windSpeed,
        humidity,
    );
}



//All content rendering functions packaged into one function for export
function renderContent(){
    buildSearchBar();
}

export{
    renderContent,
    buildWeatherContainer,
}