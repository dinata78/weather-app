export { showLoading, hideLoading };

const loadingModal = document.querySelector("#loading-modal");
const loadingSpinner = document.querySelector("#loading-spinner");

function showLoading() {
  loadingModal.showModal();
  loadingSpinner.style.animationPlayState = "running";
}

function hideLoading() {
  loadingModal.close();
  loadingSpinner.style.animationPlayState = "paused";
}