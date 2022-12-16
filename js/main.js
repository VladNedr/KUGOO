const mMenuToggle = document.querySelector(".mobile-menu-toggle");
const menu = document.querySelector(".mobile-menu");

const openMenu = (event) => {
  // Функция открывания меню
  menu.classList.add("is-open"); // Вешает класс is-open
  mMenuToggle.classList.add("close-menu");
  document.body.style.overflow = "hidden"; // Запрещает прокрутку сайта под меню
  lightModeOn();
};
const closeMenu = (event) => {
  // Функция закрывания меню
  menu.classList.remove("is-open"); // убирает класс is-open
  mMenuToggle.classList.remove("close-menu");
  document.body.style.overflow = ""; // возвращает прокрутку сайта под меню
  lightModeOff();
};


mMenuToggle.addEventListener("click", (event) => {
  event.preventDefault();
  menu.classList.contains("is-open") ? closeMenu() : openMenu();
});
// Если меню имеет класс is-open открой меню,если нет,то закрой!

const swiper = new Swiper(".swiper", {
  speed: 400,
  slidesPerView: 1,
  loop: true,
  breakpoints: {
    425: {
      slidesPerView: 2,
      spaceBetween: 5,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
    992: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
    1200: {
      slidesPerView: 4,
      spaceBetween: 29,
      loop: false,
    },
  },
});
