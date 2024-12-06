export { showMessage, hideMessage };

const messageModal = document.querySelector("#message-modal");
const message = document.querySelector("#message");
const mainContainer = document.querySelector("#main-container");

function showMessage(type) {
  if (type === "initial") {
    message.textContent = "Search your location in the search bar above to get started.";
  }
  else if (type === "error") {
    message.textContent = "Failed to load weather data. Please check your input or try again.";
    mainContainer.style.display = "none";
  }

  messageModal.show();
}

function hideMessage() {
  mainContainer.style.display = "grid";
  messageModal.close();
}