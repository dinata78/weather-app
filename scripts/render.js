import { setMainInfo } from "./set-info-ui/setMainInfo.js";
import { setHourlyInfo } from "./set-info-ui/setHourlyInfo.js";
import { setWeeklyInfo } from "./set-info-ui/setWeeklyInfo.js";
import { setAdditionalInfo } from "./set-info-ui/setAdditionalInfo.js";
import { setCurrentInfoTime } from "./set-info-ui/setCurrentInfoTime.js";
import { setSunriseSunsetTime } from "./set-info-ui/setSunriseSunsetTime.js";
import { translateDate } from "./support/translateDate.js";

export { renderDayInfo, renderHourInfo };

function renderDayInfo(days, index, unit) { //update current info's time, render everything on the page except for location using daily date

  setCurrentInfoTime(
    translateDate(days[index]["datetime"])
  );

  setMainInfo(
    days[index]["temp"], 
    days[index]["icon"], 
    days[index]["conditions"],
    unit
  );

  setHourlyInfo(
    days[index]["hours"],
    unit
  );

  setWeeklyInfo(days, unit);

  setAdditionalInfo(
    days[index]["uvindex"], 
    days[index]["feelslike"], 
    days[index]["humidity"], 
    days[index]["precipprob"], 
    days[index]["windspeed"], 
    days[index]["visibility"],
    unit
  );

  setSunriseSunsetTime(
    days[index]["sunrise"], 
    days[index]["sunset"]
  );

}

function renderHourInfo(hours, index, unit) { //update current-info's time, render main-info and additional info's data using hourly data

  const currentInfoTime = document.querySelector("#current-info-time"); 
  setCurrentInfoTime(
    currentInfoTime.textContent.split(" ")[0]
    + " "
    + currentInfoTime.textContent.split(" ")[1]
    + " - " 
    + hours[index]["datetime"].slice(0, 5)
  );

  setMainInfo( 
    hours[index]["temp"], 
    hours[index]["icon"], 
    hours[index]["conditions"],
    unit
  );
  
  setAdditionalInfo(
    hours[index]["uvindex"], 
    hours[index]["feelslike"], 
    hours[index]["humidity"], 
    hours[index]["precipprob"], 
    hours[index]["windspeed"], 
    hours[index]["visibility"],
    unit
  );

}