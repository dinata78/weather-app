export { setCurrentInfoTime };

function setCurrentInfoTime(time) {
  const currentInfoTime = document.querySelector("#current-info-time");

  currentInfoTime.textContent = time;
}