import { setMainInfo } from "./setMainInfo.js";
import { setHourlyInfo } from "./setHourlyInfo.js";
import { setWeeklyInfo } from "./setWeeklyInfo.js";
import { setAdditionalInfo } from "./setAdditionalInfo.js";
import { setCurrentInfoTime } from "./setCurrentInfoTime.js";
import { setSunriseSunsetTime } from "./setSunriseSunsetTime.js";
import { translateDate } from "./translateDate.js";
import { toggleInfos } from "./toggleInfos.js";

export { renderDayInfo, renderHourInfo };

function renderDayInfo(days, index) { //update current info's time, render everything on the page except for location using daily date
  toggleInfos(0);

  setCurrentInfoTime(
    translateDate(days[index]["datetime"])
  );

  setMainInfo(
    days[index]["temp"], 
    days[index]["icon"], 
    days[index]["conditions"]
  );

  setHourlyInfo(
    days[index]["hours"]
  );

  setWeeklyInfo(days);

  setAdditionalInfo(
    days[index]["uvindex"], 
    days[index]["feelslike"], 
    days[index]["humidity"], 
    days[index]["precipprob"], 
    days[index]["windspeed"], 
    days[index]["visibility"], 
  );

  setSunriseSunsetTime(
    days[index]["sunrise"], 
    days[index]["sunset"]
  );

  toggleInfos(1);
}

function renderHourInfo(hours, index) { //update current-info's time, render main-info and additional info's data using hourly data
  toggleInfos(0);

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
    hours[index]["conditions"]
  );
  
  setAdditionalInfo(
    hours[index]["uvindex"], 
    hours[index]["feelslike"], 
    hours[index]["humidity"], 
    hours[index]["precipprob"], 
    hours[index]["windspeed"], 
    hours[index]["visibility"]
  );

  toggleInfos(1);
}