import { getWeatherData } from "./getWeatherData.js"
import { renderDayInfo } from "./render.js";
import { setLocation } from "./setLocation.js";
import { toggleVisibility } from "./toggleVisibility.js";

const weatherApp = (() => {
  let isFirstRender = true;

  function firstRender() {
    const searchButton = document.querySelector("#search-button");

    searchButton.addEventListener("click", () => {
      const weatherData = getWeatherData();
      weatherData.then((data) => {
        if (isFirstRender === false) toggleVisibility.dayInfo();
        else if (isFirstRender === true) isFirstRender = false;
        setTimeout(() => {
          setLocation(data.location);
          renderDayInfo(data["days"], 0);
          toggleVisibility.dayInfo();
        }, 500);
      });
    });
  }

  return { firstRender };
})();

weatherApp.firstRender();
