export { getWeatherData, setMainInfo };

async function fetchWeatherData(location) {
  const response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}/next6days?unitGroup=metric&key=LYVR2HYS7HN92FEU48Q49BVNF`);
  const json = await response.json();
  const data = {
    "location": json.resolvedAddress,
    "days": json.days,
  }

  return data;
}

function getWeatherData() {
  const searchInput = document.querySelector("#search-input");
  
  return fetchWeatherData(searchInput.value);
}

function setMainInfo(resolvedAddress, temp, icon, conditions) {
  const location = document.querySelector("#location");
  const temperature = document.querySelector("#temperature");
  const weatherIcon = document.querySelector("#weather-icon");
  const condition = document.querySelector("#condition");

  location.textContent = resolvedAddress;
  temperature.textContent = `${temp}°`;
  weatherIcon.src = `./assets/weather-icons/${icon}.svg`;
  condition.textContent = conditions;
}