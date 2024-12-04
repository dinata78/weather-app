import { getWeatherData } from "./getWeatherData.js"
import { renderDayInfo } from "./render.js";
import { setLocation } from "./setLocation.js";
import { toggleInfos } from "./toggleInfos.js";

toggleInfos(0);

const searchButton = document.querySelector("#search-button");

searchButton.addEventListener("click", () => {
  toggleInfos(0);
  const weatherData = getWeatherData();
  weatherData.then((data) => {
    setLocation(data.location);
    renderDayInfo(data["days"], 0);
    toggleInfos(1);
  });
});