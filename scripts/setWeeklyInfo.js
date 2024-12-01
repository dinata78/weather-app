export { setWeeklyInfo };

function translateDate(dateInNum) {
  const [ , month, date ] = dateInNum.split("-");
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  
  return months[month - 1] + " " + date; 
}

function setWeeklyInfo(days) {
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

    weeklyInfo.appendChild(weeklyCard);
  }
}