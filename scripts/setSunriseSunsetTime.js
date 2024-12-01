export { setSunriseSunsetTime };

function setSunriseSunsetTime(sunset_time, sunrise_time) { //update sunrise and sunset's time in the DOM
  const sunriseTime = document.querySelector("#sunrise-time");
  const sunsetTime = document.querySelector("#sunset-time");

  sunriseTime.textContent = sunrise_time.slice(0, 5);
  sunsetTime.textContent = sunset_time.slice(0, 5);
}