const subscribeBtn = document.querySelector(".subscribe-btn");
const subscribeModal = document.querySelector(".subscribe-modal");
const closeSubscribeModal = document.querySelector(".close-subscribe-modal");
const modalWrapper = document.querySelector(".modal-wrapper");

const toggleSubscribeModal = () => {
  subscribeModal.classList.toggle("-hidden");
  modalWrapper.classList.toggle("blur-modal-subscribe");
};

subscribeBtn.addEventListener("click", toggleSubscribeModal);
closeSubscribeModal.addEventListener("click", toggleSubscribeModal);

const onBackdropClick = (event) => {
  if (event.target.classList.contains("blur-modal-subscribe")) {
    toggleSubscribeModal();
  }

  return;
};

window.addEventListener("click", onBackdropClick);
