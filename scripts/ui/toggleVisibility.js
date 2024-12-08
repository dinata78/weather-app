export { toggleVisibility };

const toggleVisibility = (() => {
  const mainInfo = document.querySelector("#main-info");
  const hourlyInfo = document.querySelector("#hourly-info");
  const weeklyInfo = document.querySelector("#weekly-info");
  const additionalInfo = document.querySelector("#additional-info");
  const currentInfoTime = document.querySelector("#current-info-time")

  function dayInfo() {
    mainInfo.classList.toggle("hide");
    hourlyInfo.classList.toggle("hide");
    weeklyInfo.classList.toggle("hide");
    additionalInfo.classList.toggle("hide");
    currentInfoTime.classList.toggle("hide"); 
  }

  function hourInfo() {
    mainInfo.classList.toggle("hide");
    additionalInfo.classList.toggle("hide");
    currentInfoTime.classList.toggle("hide"); 
  }

  return { dayInfo, hourInfo };

})();