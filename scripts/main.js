import { getWeatherData } from "./getWeatherData.js"
import { setMainInfo } from "./setMainInfo.js";
import { setHourlyInfo } from "./setHourlyInfo.js";
import { setWeeklyInfo } from "./setWeeklyInfo.js";
import { setAdditionalInfo } from "./setAdditionalInfo.js";

const searchButton = document.querySelector("#search-button");

searchButton.addEventListener("click", () => {
  const weatherData = getWeatherData();
  weatherData.then((data) => {
    setMainInfo(data["location"], 
                data["days"][0]["temp"], 
                data["days"][0]["icon"], 
                data["days"][0]["conditions"]);

    setHourlyInfo(data["days"][0]["hours"]);

    setWeeklyInfo(data["days"]);

    setAdditionalInfo(data["days"][0]["uvindex"], 
                      data["days"][0]["feelslike"], 
                      data["days"][0]["humidity"], 
                      data["days"][0]["precipprob"], 
                      data["days"][0]["windspeed"], 
                      data["days"][0]["visibility"], 
                      data["days"][0]["sunrise"], 
                      data["days"][0]["sunset"]);
  });
});