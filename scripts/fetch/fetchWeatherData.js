export { fetchWeatherData };

async function fetchWeatherData(location) {
  const response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}/next6days?unitGroup=metric&key=LYVR2HYS7HN92FEU48Q49BVNF`);

  // Handle HTTP errors
  if (!response.ok) {
    throw new Error(`Error ${response.status}: ${response.statusText}`);
  }

  const json = await response.json();
  const data = {
    "location": json.resolvedAddress,
    "days": json.days,
  }

  return data;
}