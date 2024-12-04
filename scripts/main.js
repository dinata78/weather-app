import { getWeatherData } from "./getWeatherData.js"
import { renderDayInfo } from "./render.js";
import { setLocation } from "./setLocation.js";
import { toggleVisibility } from "./toggleVisibility.js";

const weatherApp = (() => {

  function firstRender() {
    const searchButton = document.querySelector("#search-button");

    searchButton.addEventListener("click", () => {
      const weatherData = getWeatherData();
      weatherData.then((data) => {
        toggleVisibility.dayInfo();
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
