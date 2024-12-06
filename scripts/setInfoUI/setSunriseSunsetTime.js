export { setSunriseSunsetTime };

function setSunriseSunsetTime(sunrise_time, sunset_time) { //update sunrise and sunset's time in the DOM
  const sunriseTime = document.querySelector("#sunrise-time");
  const sunsetTime = document.querySelector("#sunset-time");

  sunriseTime.textContent = sunrise_time.slice(0, 5);
  sunsetTime.textContent = sunset_time.slice(0, 5);
}