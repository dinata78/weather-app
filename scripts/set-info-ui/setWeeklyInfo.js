export { setWeeklyInfo };
import { celciusToFahrenheit } from "../support/celciusToFahrenheit.js";
import { renderDayInfo } from "../render.js";
import { toggleVisibility } from "../toggleVisibility.js";
import { translateDate } from "../support/translateDate.js";

function setWeeklyInfo(days, unit) { //update weekly-info's data in the DOM
  const weeklyInfo = document.querySelector("#weekly-info");
  weeklyInfo.textContent = "";

  for (let i = 0; i < days.length; i++) {
    const weeklyCard = document.createElement("div");
    const weeklyDate = document.createElement("span");
    const weeklyWeatherIcon = document.createElement("img");
    const weeklyTemperature = document.createElement("span");

    weeklyCard.setAttribute("tabindex", "0");
    weeklyCard.setAttribute("class", "weekly-card");
    weeklyDate.setAttribute("class", "weekly-date");
    weeklyTemperature.setAttribute("class", "weekly-temperature");

    const weekly_date = translateDate(days[i]["datetime"]);
    const weekly_weather_icon = days[i]["icon"];
    let weekly_temperature = days[i]["temp"];

    if (unit === "fahrenheit") {
      weekly_temperature = celciusToFahrenheit(weekly_temperature);
    }

    weeklyDate.textContent = weekly_date;
    weeklyWeatherIcon.src = "assets/weather-icons/" + weekly_weather_icon + ".svg";
    weeklyTemperature.textContent = weekly_temperature + "°";

    weeklyCard.appendChild(weeklyDate);
    weeklyCard.appendChild(weeklyWeatherIcon);
    weeklyCard.appendChild(weeklyTemperature);

    weeklyCard.addEventListener("click", () => {
      toggleVisibility.dayInfo();
      setTimeout(() => {
        renderDayInfo(days, i, unit);
        toggleVisibility.dayInfo();
      }, 500);
    });

    weeklyCard.addEventListener("keydown", (event) => {
      if (event.key === "Enter") {
        weeklyCard.click();
      }
    })

    weeklyInfo.appendChild(weeklyCard);
  }
}