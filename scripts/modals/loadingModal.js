export { showLoading, hideLoading };

const loadingModal = document.querySelector("#loading-modal");
const loadingSpinner = document.querySelector("#loading-spinner");

function showLoading() { //show loading-modal which hide loading-spinner
  loadingModal.showModal();
  loadingSpinner.style.animationPlayState = "running"; //set loading-spinner's animation play state to 'running'
}

function hideLoading() { //hide loading-modal which hide loading-spinner
  loadingModal.close();
  loadingSpinner.style.animationPlayState = "paused"; //set loading-spinner's animation play state to 'paused'
}