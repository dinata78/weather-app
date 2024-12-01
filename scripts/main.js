import { getWeatherData } from "./getWeatherData.js"
import { setMainInfo } from "./setMainInfo.js";

const searchButton = document.querySelector("#search-button");

searchButton.addEventListener("click", () => {
  const weatherData = getWeatherData();
  weatherData.then((data) => {
    setMainInfo(data.location, data.days[0].temp, data.days[0].icon, data.days[0].conditions);
  });
});