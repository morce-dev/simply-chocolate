const closeModal = document.querySelector(".close-review-modal");
const reviewModal = document.querySelector(".review-modal");
const btnReview = document.querySelector(".review-btn");

const reviewToggle = () => {
  reviewModal.classList.toggle("-hidden");
};

closeModal.addEventListener("click", (event) => {
  if (event.target.nodeName !== "svg") return;
  reviewToggle();
});

btnReview.addEventListener("click", reviewToggle);
