import { fetchWeatherData } from "./fetch/fetchWeatherData.js"
import { renderDayInfo } from "./ui/render.js";
import { setLocation } from "./ui/setLocation.js";
import { toggleVisibility } from "./ui/toggleVisibility.js";
import { updateSelectedUnit } from "./support/updateSelectedUnit.js";
import { showLoading, hideLoading } from "./modals/loadingModal.js";
import { showMessage, hideMessage } from "./modals/messageModal.js";
import { getLastLocationFromLocalStorage, setLastLocationToLocalStorage } from "./local-storage/localStorage.js";

const weatherApp = (() => {

  let isFirstRender = true;
  let unit = "celcius";
  let previousLocation = "";

  function render(unit, location) {
    if (location.trim() === "") return;

    showLoading();
    
    fetchWeatherData(location) //fetch data from weather API
    .then((data) => {

      hideLoading();

      if (isFirstRender) { //set isFirstRender to false when it's the first render
        isFirstRender = false;
        hideMessage();
      }
      else { //toggle visibility when it's not the first render for the fade out effect
        hideMessage();
        toggleVisibility.dayInfo();
      }
      setTimeout(() => {
        previousLocation = data.location;
        setLastLocationToLocalStorage(previousLocation); //save last-location to local storage
        setLocation(data.location);
        renderDayInfo(data["days"], 0, unit); //render today's day-info
        toggleVisibility.dayInfo();
      }, 500);
      
    })

    .catch((error) => { //handle error fetch
      hideLoading();
      console.error("Render error:", error.message);
      showMessage("error");
    });

  }

  function initEventListener() {
    const root = document.querySelector(":root");
    const searchInput = document.querySelector("#search-input");
    const searchButton = document.querySelector("#search-button");
    const celciusUnitButton = document.querySelector("#celcius-unit");
    const fahrenheitUnitButton = document.querySelector("#fahrenheit-unit");

    //keyboard support
    root.addEventListener("keydown", (event) => {
      //jump to search bar key
      if (event.key === "/") {
        event.preventDefault();
        searchInput.focus();
      }
      //remove currently active element's focus key
      if (event.key === "Escape") {
        document.activeElement.blur();
      }
    });

  
    searchInput.addEventListener("keydown", (event) => { 
      //render while user click 'Enter' key inside search-input
      if (event.key === "Enter") {
        searchInput.blur();
        render(unit, searchInput.value);
      }
    });
    
    //render while user click search-button
    searchButton.addEventListener("click", () => {
      render(unit, searchInput.value);
    });

    celciusUnitButton.addEventListener("click", () => { //celcius button event
      unit = "celcius";
      updateSelectedUnit(unit);
      render(unit, previousLocation);
    });

    fahrenheitUnitButton.addEventListener("click", () => { //fahrenheit button event
      unit = "fahrenheit";
      updateSelectedUnit(unit);
      render(unit, previousLocation);
    } );
  }

  function init() { //initialization
    showMessage("initial");
    initEventListener();

    //render if last-location exist in local storage
    if (getLastLocationFromLocalStorage()) {
      render(unit, getLastLocationFromLocalStorage());
    }
  }

  return { init };
})();

weatherApp.init();