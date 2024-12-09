export { toggleVisibility };

const toggleVisibility = (() => {
  const mainInfo = document.querySelector("#main-info");
  const hourlyInfo = document.querySelector("#hourly-info");
  const weeklyInfo = document.querySelector("#weekly-info");
  const additionalInfo = document.querySelector("#additional-info");
  const currentInfoTime = document.querySelector("#current-info-time");

  function dayInfo() { //toggle the class "hide" which will trigger transition on all elements that updates while we render day info
    mainInfo.classList.toggle("hide");
    hourlyInfo.classList.toggle("hide");
    weeklyInfo.classList.toggle("hide");
    additionalInfo.classList.toggle("hide");
    currentInfoTime.classList.toggle("hide"); 
  }

  function hourInfo() { //toggle the class "hide" which will trigger transition on all elements that updates while we render hour info 
    mainInfo.classList.toggle("hide");
    additionalInfo.classList.toggle("hide");
    currentInfoTime.classList.toggle("hide"); 
  }

  return { dayInfo, hourInfo };

})();