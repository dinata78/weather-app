export { setMainInfo };

function setMainInfo(temperature_, weather_icon, condition_) { //update main-info's data in the DOM
  const temperature = document.querySelector("#temperature");
  const weatherIcon = document.querySelector("#weather-icon");
  const condition = document.querySelector("#condition");

  temperature.textContent = `${temperature_}°`;
  weatherIcon.src = `assets/weather-icons/${weather_icon}.svg`;
  condition.textContent = condition_;
}