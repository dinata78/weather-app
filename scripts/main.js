import { getWeatherData } from "./getWeatherData.js"
import { renderDayInfo } from "./render.js";
import { setLocation } from "./setLocation.js";
import { toggleVisibility } from "./toggleVisibility.js";
import { updateSelectedUnit } from "./updateSelectedUnit.js";
import { showLoading, hideLoading } from "./loadingModal.js";
import { showInitialMessage, hideInitialMessage } from "./initialPageModal.js";

const weatherApp = (() => {
  const searchInput = document.querySelector("#search-input");

  let isFirstRender = true;
  let unit = "celcius";
  let previousLocation = "";

  function render(unit, location) {
    if (location.trim() === "") return;

    showLoading();
    
    const weatherData = getWeatherData(location);
    weatherData.then((data) => {

      hideLoading();

      if (isFirstRender === false) toggleVisibility.dayInfo();
      else if (isFirstRender === true) {
        isFirstRender = false;
        hideInitialMessage();
      }
      setTimeout(() => {
        previousLocation = data.location;
        setLocation(data.location);
        renderDayInfo(data["days"], 0, unit);
        toggleVisibility.dayInfo();
      }, 500);
      
    });

  }

  function initEventListener() {
    const searchButton = document.querySelector("#search-button");
    const celciusUnitButton = document.querySelector("#celcius-unit");
    const fahrenheitUnitButton = document.querySelector("#fahrenheit-unit");

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
    showInitialMessage();
    initEventListener();
  }

  return { init };
})();

weatherApp.init();