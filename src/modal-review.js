const closeModal = document.querySelector(".close-review-modal");
const reviewModal = document.querySelector(".review-modal");
const btnReview = document.querySelector(".review-btn");
const modalWrapper = document.querySelector(".modal-wrapper");

const reviewToggle = () => {
  reviewModal.classList.toggle("-hidden");
  modalWrapper.classList.toggle("blur-modal");
};

closeModal.addEventListener("click", (event) => {
  if (event.target.nodeName !== "svg") return;
  reviewToggle();
});

btnReview.addEventListener("click", reviewToggle);
