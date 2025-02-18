const buyBtn = document.querySelectorAll(".buy-btn");
const buymodal = document.querySelector(".buy-now-modal");
const closeBuyModal = document.querySelector(".close-buy-modal");

const toggleBuyModal = () => {
  buymodal.classList.toggle("-hidden");
};

buyBtn[0].addEventListener("click", toggleBuyModal);
buyBtn[1].addEventListener("click", toggleBuyModal);
closeBuyModal.addEventListener("click", toggleBuyModal);
