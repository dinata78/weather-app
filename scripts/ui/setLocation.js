export { setLocation };

function setLocation(location_) { //update location in the DOM
  const location = document.querySelector("#location");

  location.textContent = location_;
}