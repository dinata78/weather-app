import { celciusToFahrenheit } from "../support/celciusToFahrenheit.js";

export { setMainInfo };

function setMainInfo(temperature_, weather_icon, condition_, unit) { //update main-info's data in the DOM
  const temperature = document.querySelector("#temperature");
  const weatherIcon = document.querySelector("#weather-icon");
  const condition = document.querySelector("#condition");

  if (unit == "fahrenheit") {
    temperature_ = celciusToFahrenheit(temperature_);
  }

  temperature.textContent = `${temperature_}°`;
  weatherIcon.src = `assets/weather-icons/${weather_icon}.svg`;
  condition.textContent = condition_;
}