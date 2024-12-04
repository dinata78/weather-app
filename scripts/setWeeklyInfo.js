export { setWeeklyInfo };
import { renderDayInfo } from "./render.js";
import { toggleVisibility } from "./toggleVisibility.js";
import { translateDate } from "./translateDate.js";

function setWeeklyInfo(days) { //update weekly-info's data in the DOM
  const weeklyInfo = document.querySelector("#weekly-info");
  weeklyInfo.textContent = "";

  for (let i = 0; i < days.length; i++) {
    const weeklyCard = document.createElement("div");
    const weeklyDate = document.createElement("span");
    const weeklyWeatherIcon = document.createElement("img");
    const weeklyTemperature = document.createElement("span");

    weeklyCard.setAttribute("class", "weekly-card");
    weeklyDate.setAttribute("class", "weekly-date");
    weeklyTemperature.setAttribute("class", "weekly-temperature");

    weeklyDate.textContent = translateDate(days[i]["datetime"]);
    weeklyWeatherIcon.src = "assets/weather-icons/" + days[i]["icon"] + ".svg";
    weeklyTemperature.textContent = days[i]["temp"] + "°";

    weeklyCard.appendChild(weeklyDate);
    weeklyCard.appendChild(weeklyWeatherIcon);
    weeklyCard.appendChild(weeklyTemperature);

    weeklyCard.addEventListener("click", () => {
      toggleVisibility.dayInfo();
      setTimeout(() => {
        renderDayInfo(days, i);
        toggleVisibility.dayInfo();
      }, 500);
    })

    weeklyInfo.appendChild(weeklyCard);
  }
}