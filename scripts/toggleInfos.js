export { toggleInfos };

function toggleInfos(mode) {
  const mainInfo = document.querySelector("#main-info");
  const hourlyInfo = document.querySelector("#hourly-info");
  const weeklyInfo = document.querySelector("#weekly-info");
  const additionalInfo = document.querySelector("#additional-info");

  let displayList;

  switch (mode) {
    case 0:
      displayList = ["none", "none", "none", "none"];
      break;
    case 1:
      displayList = ["flex", "grid", "grid", "grid"];
      break;
  }

  mainInfo.style.display = displayList[0];
  hourlyInfo.style.display = displayList[1];
  weeklyInfo.style.display = displayList[2];
  additionalInfo.style.display = displayList[3];
  
}