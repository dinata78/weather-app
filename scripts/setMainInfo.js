export { setMainInfo };

function setMainInfo(resolvedAddress, temp, icon, conditions) {
  const location = document.querySelector("#location");
  const temperature = document.querySelector("#temperature");
  const weatherIcon = document.querySelector("#weather-icon");
  const condition = document.querySelector("#condition");

  location.textContent = resolvedAddress;
  temperature.textContent = `${temp}°`;
  weatherIcon.src = `assets/weather-icons/${icon}.svg`;
  condition.textContent = conditions;
}