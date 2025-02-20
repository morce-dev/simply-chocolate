const closeModal = document.querySelector(".close-review-modal");
const reviewModal = document.querySelector(".review-modal");
const btnReview = document.querySelector(".review-btn");
const modalWrapper = document.querySelector(".modal-wrapper");

const reviewToggle = () => {
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
