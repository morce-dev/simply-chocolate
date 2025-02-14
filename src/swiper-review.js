import Swiper from "swiper";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const swiper = new Swiper(".review-swiper", {
  modules: [Pagination],
  loop: true,
  pagination: {
    el: ".review-swiper-pagination",
    clickable: true,
  },

  slidesPerView: 1,
  spaceBetween: 18,
});
