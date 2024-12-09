export { updateSelectedUnit };

function updateSelectedUnit(unit) { //change each temperature-unit's style based on currently selected temperature unit
  const celciusUnitButton = document.querySelector("#celcius-unit");
  const fahrenheitUnitButton = document.querySelector("#fahrenheit-unit");

  if (unit === "celcius") {
    fahrenheitUnitButton.classList.remove("selected");
    celciusUnitButton.classList.add("selected");
  }
  else if (unit === "fahrenheit") {
    celciusUnitButton.classList.remove("selected");
    fahrenheitUnitButton.classList.add("selected");
  }
}