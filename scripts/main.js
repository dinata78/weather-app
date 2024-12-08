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
    
    fetchWeatherData(location)
    
    .then((data) => {

      hideLoading();

      if (isFirstRender) {
        isFirstRender = false;
        hideMessage();
      }
      else {
        hideMessage();
        toggleVisibility.dayInfo();
      }
      setTimeout(() => {
        previousLocation = data.location;
        setLastLocationToLocalStorage(previousLocation);
        setLocation(data.location);
        renderDayInfo(data["days"], 0, unit);
        toggleVisibility.dayInfo();
      }, 500);
      
    })

    .catch((error) => {
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

    root.addEventListener("keydown", (event) => {
      if (event.key === "/") {
        event.preventDefault();
        searchInput.focus();
      }
      if (event.key === "Escape") {
        document.activeElement.blur();
      }
    });

    searchInput.addEventListener("keydown", (event) => {
      if (event.key === "Enter") {
        searchInput.blur();
        render(unit, searchInput.value);
      }
    });

    searchButton.addEventListener("click", () => {
      render(unit, searchInput.value);
    });

    celciusUnitButton.addEventListener("click", () => {
      unit = "celcius";
      updateSelectedUnit(unit);
      render(unit, previousLocation);
    });

    fahrenheitUnitButton.addEventListener("click", () => {
      unit = "fahrenheit";
      updateSelectedUnit(unit);
      render(unit, previousLocation);
    } );
  }

  function init() {
    showMessage("initial");
    initEventListener();

    if (getLastLocationFromLocalStorage()) {
      render(unit, getLastLocationFromLocalStorage());
    }
  }

  return { init };
})();

weatherApp.init();