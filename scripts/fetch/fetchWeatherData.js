export { fetchWeatherData };

async function fetchWeatherData(location) {
  const API_KEY = "LYVR2HYS7HN92FEU48Q49BVNF";
  const response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}/next6days?unitGroup=metric&key=${API_KEY}`);

  // Handle HTTP errors
  if (!response.ok) {
    throw new Error(`Error ${response.status}: ${response.statusText}`);
  }

  const json = await response.json();

  const data = { //get needed/necessary data from fetched data
    "location": json.resolvedAddress,
    "days": json.days,
  }

  return data;
}