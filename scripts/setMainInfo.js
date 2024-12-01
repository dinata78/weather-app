export { setMainInfo };

function setMainInfo(temperature_, weatherIcon_, condition_) {
  const temperature = document.querySelector("#temperature");
  const weatherIcon = document.querySelector("#weather-icon");
  const condition = document.querySelector("#condition");

  temperature.textContent = `${temperature_}°`;
  weatherIcon.src = `assets/weather-icons/${weatherIcon_}.svg`;
  condition.textContent = condition_;
}