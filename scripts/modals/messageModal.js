export { showMessage, hideMessage };

const messageModal = document.querySelector("#message-modal");

function showMessage() {
  messageModal.show();
}

function hideMessage() {
  messageModal.close();
}