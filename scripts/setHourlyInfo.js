export { setHourlyInfo };

function setHourlyInfo(hours) {
  const hourlyInfo = document.querySelector("#hourly-info");
  hourlyInfo.textContent = "";

  for (let i = 0; i < hours.length; i++) {
    const hourlyCard = document.createElement("div");
    const hourlyTime = document.createElement("span");
    const hourlyWeatherIcon = document.createElement("img");
    const hourlyTemperature = document.createElement("span");

    hourlyCard.setAttribute("class", "hourly-card");
    hourlyTime.setAttribute("class", "hourly-time");
    hourlyTemperature.setAttribute("class", "hourly-temperature");

    hourlyTime.textContent = hours[i]["datetime"].slice(0, 5);
    hourlyWeatherIcon.src = `assets/weather-icons/${hours[i]["icon"]}.svg`;
    hourlyTemperature.textContent = hours[i]["temp"] + "°";

    hourlyCard.appendChild(hourlyTime);
    hourlyCard.appendChild(hourlyWeatherIcon);
    hourlyCard.appendChild(hourlyTemperature);

    hourlyInfo.appendChild(hourlyCard);
  }
}