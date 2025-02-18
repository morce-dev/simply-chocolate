const buyBtn = document.querySelectorAll(".buy-btn");
const buymodal = document.querySelector(".buy-now-modal");
const closeBuyModal = document.querySelector(".close-buy-modal");
const modalWrapper = document.querySelector(".modal-wrapper");

const toggleBuyModal = () => {
  buymodal.classList.toggle("-hidden");
  modalWrapper.classList.toggle("blur-modal");
};

buyBtn[0].addEventListener("click", toggleBuyModal);
buyBtn[1].addEventListener("click", toggleBuyModal);
closeBuyModal.addEventListener("click", toggleBuyModal);
