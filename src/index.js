import "./styles.css";
import {findCityByName, newWeatherObj} from "./callAPI.js";
import * as renderContent from "./renderPage.js";
import * as processInput from "./processInput.js";

//Render content on page load
renderContent.renderContent();

//Assign event listener to searchButton
const form = document.getElementById("form");
form.addEventListener("submit",() => findCityByName(processInput.processInput()));