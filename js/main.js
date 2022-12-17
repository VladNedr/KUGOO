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

let currentModal; // Текущее модальное окно
let modalDialog; // Белое диалоговое окно
let alertModal = document.querySelector("#alert-modal"); // Окно с предупреждением

const modalButtons = document.querySelectorAll("[data-toggle=modal]"); // Переключатели модальных окон
modalButtons.forEach((button) => {
  // Клик по переключателю
  button.addEventListener("click", (event) => {
    event.preventDefault();
    /* Определяем текущее открытое окно */
    currentModal = document.querySelector(button.dataset.target);
    // открываем текущее окно
    currentModal.classList.toggle("is-open");
    // назначаем диалоговое окно
    modalDialog = currentModal.querySelector(".modal-dialog");
    // отслеживаем клик по окну и пустым областям
    currentModal.addEventListener("click", (event) => {
      // елси клик в пустую белую область (не диалог)
      if (!event.composedPath().includes(modalDialog)) {
        // закрываем окно
        currentModal.classList.remove("is-open");
      }
    });
  });
});
// ловим событие нажатия на кнопки
document.addEventListener("keyup", (event) => {
  //  проверяем что это ECAPE и текущее окно открыто
  if (event.key == "Escape" && currentModal.classList.contains("is-open")) {
    // закрываем текущее окно
    currentModal.classList.toggle("is-open");
  }
  // Закрытие модального окна с помощью кнопки Escape
});
