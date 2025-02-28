import Swiper from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

const swiper = new Swiper(".swiper", {
  modules: [Pagination],
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  slidesPerView: 1,
  spaceBetween: 18,
});
