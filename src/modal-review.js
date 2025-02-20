const closeModal = document.querySelector(".close-review-modal");
const reviewModal = document.querySelector(".review-modal");
const btnReview = document.querySelector(".review-btn");
const modalWrapper = document.querySelector(".modal-wrapper");
const bodyScrollLock = require("body-scroll-lock");

const reviewToggle = () => {
  if (reviewModal.classList.contains("-hidden")) {
    bodyScrollLock.disableBodyScroll(document.body);
  } else {
    bodyScrollLock.enableBodyScroll(document.body);
  }

  reviewModal.classList.toggle("-hidden");
  modalWrapper.classList.toggle("blur-modal-review");
};

closeModal.addEventListener("click", (event) => {
  if (event.target.nodeName !== "svg") return;
  reviewToggle();
});

btnReview.addEventListener("click", reviewToggle);

const onBackdropClick = (event) => {
  if (event.target.classList.contains("blur-modal-review")) {
    reviewToggle();
  }

  return;
};

window.addEventListener("click", onBackdropClick);
