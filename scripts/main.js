import { getWeatherData } from "./getWeatherData.js"
import { renderDayInfo } from "./render.js";
import { setLocation } from "./setLocation.js";

const searchButton = document.querySelector("#search-button");

searchButton.addEventListener("click", () => {
  const weatherData = getWeatherData();
  weatherData.then((data) => {
    setLocation(data.location);
    renderDayInfo(data["days"], 0);
  });
});