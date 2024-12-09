import { celciusToFahrenheit } from "../support/celciusToFahrenheit.js";

export { setAdditionalInfo };

function uvIndexMeaning(uvIndex) { //return uv index's description/meaning
  if (uvIndex === 0) return "Very Weak";
  else if (uvIndex <= 2) return "Weak";
  else if (uvIndex <= 5) return "Moderate";
  else if (uvIndex <= 7) return "Strong";
  else if (uvIndex <= 10) return "Very Strong";
  else if (uvIndex > 10) return "Extreme";
}

function setAdditionalInfo(uv_index, feels_like, humidity_, chance_of_rain, wind_speed, visibility_, unit) { //update additional info's data in the DOM
  const uvIndex = document.querySelector("#uv-index");
  const feelsLike = document.querySelector("#feels-like");
  const humidity = document.querySelector("#humidity");
  const chanceOfRain = document.querySelector("#chance-of-rain");
  const windSpeed = document.querySelector("#wind-speed");
  const visibility = document.querySelector("#visibility");

  if (unit === "fahrenheit") { //convert feels-like's value if current temperature unit is fahrenheit
    feels_like = celciusToFahrenheit(feels_like);
  }
  

  uvIndex.textContent = uv_index + " " + uvIndexMeaning(uv_index);
  feelsLike.textContent = feels_like + "°";
  humidity.textContent = humidity_ + "%";
  chanceOfRain.textContent = chance_of_rain + "%";
  windSpeed.textContent = wind_speed + " km/h";
  visibility.textContent = visibility_ + " km";
}

