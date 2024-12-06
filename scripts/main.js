import { fetchWeatherData } from "./fetch/fetchWeatherData.js"
import { renderDayInfo } from "./render.js";
import { setLocation } from "./setInfoUI/setLocation.js";
import { toggleVisibility } from "./toggleVisibility.js";
import { updateSelectedUnit } from "./support/updateSelectedUnit.js";
import { showLoading, hideLoading } from "./modals/loadingModal.js";
import { showMessage, hideMessage } from "./modals/messageModal.js";

const weatherApp = (() => {
  const searchInput = document.querySelector("#search-input");

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
    showMessage("initial");
    initEventListener();
  }

  return { init };
})();

weatherApp.init();