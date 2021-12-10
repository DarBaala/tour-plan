$(document).ready(function () {
  const hotelSlider = new Swiper(".hotel-slider", {
    // Optional parameters
    loop: true,

    // Navigation arrows
    navigation: {
      nextEl: ".hotel-slider__button--next",
      prevEl: ".hotel-slider__button--prev",
    },
    keyboard: {
      enabled: true,
      onlyInViewport: false,
    },
  });
  const reviewsSlider = new Swiper(".reviews-slider", {
    // Optional parameters
    loop: true,

    // Navigation arrows
    navigation: {
      nextEl: ".reviews-slider__button--next",
      prevEl: ".reviews-slider__button--prev",
    },
    keyboard: {
      enabled: true,
      onlyInViewport: false,
    },
  });

  var menuButton = document.querySelector(".menu-button");
  menuButton.addEventListener("click", function () {
    console.log("Клик по меню");
    document
      .querySelector(".navbar-bottom")
      .classList.toggle("navbar-bottom--visible");
  });

  let modalButton = $("[data-toggle=modal]");
  let closeModalButton = $(".modal__close");
  modalButton.on("click", openModal);
  closeModalButton.on("click", closeModal);
  $(document).keyup(function (e) {
    if (e.key === "Escape" || e.keyCode === 27) {
      let modalOverlay = $(".modal__overlay");
      let modalDialog = $(".modal__dialog");
      $(modalOverlay).removeClass("modal__overlay--visible");
      $(modalDialog).removeClass("modal__dialog--visible");
    }
  });

  function openModal() {
    let targetModal = $(this).attr("data-href");
    let modalOverlay = $(".modal__overlay");
    let modalDialog = $(".modal__dialog");
    $(targetModal).find(".modal__overlay");
    $(modalOverlay).addClass("modal__overlay--visible");
    $(targetModal).find(".modal__dialog");
    $(modalDialog).addClass("modal__dialog--visible");
  }

  function closeModal(event) {
    event.preventDefault();
    let modalOverlay = $(".modal__overlay");
    let modalDialog = $(".modal__dialog");
    $(modalOverlay).removeClass("modal__overlay--visible");
    $(modalDialog).removeClass("modal__dialog--visible");
  }
  $(".form").validate({
    errorClass: "invalid",
    messages: {
      name: "Пожалуйста, напишите Ваше имя",
      email: {
        required: "Поле электроенной почты обязательно",
        email: "Ваша почта должна быть следующего формата name@domain.com",
      },
      phone: {
        required: "Поле телефона обязательно",
      },
      message: {
        required: "Поле для Вашего обращения",
        minlength: "Минимальное колличество слов - 10",
      },
    },
  });
});
