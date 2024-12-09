export { setLastLocationToLocalStorage, getLastLocationFromLocalStorage };

function setLastLocationToLocalStorage(location) { //add llast-location to local storage
  localStorage.setItem("last-location", location);
}
 
function getLastLocationFromLocalStorage() { //get last-location from local storage
  return localStorage.getItem("last-location");
}