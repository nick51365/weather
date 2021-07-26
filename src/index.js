import "./styles.css";
import {findCityByName, newWeatherObj} from "./callAPI.js";
import * as renderContent from "./renderPage.js";
import * as processInput from "./processInput.js";

renderContent.renderContent();

//Identify HTML elements
const form = document.getElementById("form");
const searchBar = document.getElementById("searchBar");
const searchButton = document.getElementById("searchButton");

//Assign event listener to searchButton
form.addEventListener("submit",() => findCityByName(processInput.processInput()));



