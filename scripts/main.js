import { getWeatherData } from "./script.js"

const searchButton = document.querySelector("#search-button");

searchButton.addEventListener("click", () => {
  const weatherData = getWeatherData();
  weatherData.then((data) => {
    console.log(data.location);
  });
});