import { celciusToFahrenheit } from "../support/celciusToFahrenheit.js";
import { renderHourInfo } from "./render.js";
import { fadeAnimation } from "../animation/fadeAnimation.js"

export { setHourlyInfo };

function setHourlyInfo(hours, unit) { //update hourly-info's data in the DOM
  const hourlyInfo = document.querySelector("#hourly-info");
  hourlyInfo.textContent = "";

  for (let i = 0; i < hours.length; i++) {
    const hourlyCard = document.createElement("div");
    const hourlyTime = document.createElement("span");
    const hourlyWeatherIcon = document.createElement("img");
    const hourlyTemperature = document.createElement("span");

    hourlyCard.setAttribute("tabindex", "0"); //add tabindex attribute to make element focusable
    hourlyCard.setAttribute("class", "hourly-card");
    hourlyTime.setAttribute("class", "hourly-time");
    hourlyTemperature.setAttribute("class", "hourly-temperature");

    const hourly_time = hours[i]["datetime"].slice(0, 5);
    const hourly_weather_icon = hours[i]["icon"];
    let hourly_temperature = hours[i]["temp"];

    if (unit === "fahrenheit") { //convert temperature's value if current temperature unit is fahrenheit
      hourly_temperature = celciusToFahrenheit(hourly_temperature);
    }

    hourlyTime.textContent = hourly_time;
    hourlyWeatherIcon.src = "assets/weather-icons/" + hourly_weather_icon + ".svg";
    hourlyTemperature.textContent = hourly_temperature + "°";

    hourlyCard.appendChild(hourlyTime);
    hourlyCard.appendChild(hourlyWeatherIcon);
    hourlyCard.appendChild(hourlyTemperature);

    hourlyCard.addEventListener("click", () => { //hourly-card's click event
      fadeAnimation("hour", 500, renderHourInfo, hours, i, unit); //render with animation
    });

    hourlyCard.addEventListener("keydown", (event) => { //hourly-card's Event-key event (keybord support)
      if (event.key === "Enter") {
        hourlyCard.click();
      }
    });

    hourlyInfo.appendChild(hourlyCard);
  }
}