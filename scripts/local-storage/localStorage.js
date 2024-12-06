export { setLastLocationToLocalStorage, getLastLocationFromLocalStorage };

function setLastLocationToLocalStorage(location) {
  localStorage.setItem("last-location", location);
}

function getLastLocationFromLocalStorage() {
  return localStorage.getItem("last-location");
}