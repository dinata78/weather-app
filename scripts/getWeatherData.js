export { getWeatherData };

async function fetchWeatherData(location) {
  const response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}/next6days?unitGroup=metric&key=LYVR2HYS7HN92FEU48Q49BVNF`);
  const json = await response.json();
  const data = {
    "location": json.resolvedAddress,
    "days": json.days,
  }

  return data;
}

function getWeatherData(searchedLocation) {
  
  return fetchWeatherData(searchedLocation);
}