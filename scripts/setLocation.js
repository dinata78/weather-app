export { setLocation };

function setLocation(location_) {
  const location = document.querySelector("#location");

  location.textContent = location_;
}