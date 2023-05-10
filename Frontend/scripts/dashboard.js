import hideLoading from "../components/hideLoading.components.js";
import loading from "../components/loading.components.js";

// loading()

let swiper = new Swiper(".mySwiper", {
    direction: "vertical",
    slidesPerView: 1,
    spaceBetween: 0,
    mousewheel: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});