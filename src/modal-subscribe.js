const subscribeBtn = document.querySelector(".subscribe-btn");
const subscribeModal = document.querySelector(".subscribe-modal");
const closeSubscribeModal = document.querySelector(".close-subscribe-modal");

const toggleSubscribeModal = () => {
  subscribeModal.classList.toggle("-hidden");
};

subscribeBtn.addEventListener("click", toggleSubscribeModal);
closeSubscribeModal.addEventListener("click", toggleSubscribeModal);
