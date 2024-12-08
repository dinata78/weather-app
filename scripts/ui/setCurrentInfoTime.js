export { setCurrentInfoTime };

function setCurrentInfoTime(time) { //update the value of current-info-time
  const currentInfoTime = document.querySelector("#current-info-time");

  currentInfoTime.textContent = time;
}