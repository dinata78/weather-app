export { showInitialMessage, hideInitialMessage };

const initialMessageModal = document.querySelector("#initial-message-modal");

function showInitialMessage() {
  initialMessageModal.show();
}

function hideInitialMessage() {
  initialMessageModal.close();
}