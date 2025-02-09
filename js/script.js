document.addEventListener("DOMContentLoaded", function () {
  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 2,
    spaceBetween: 10,
    direction: "horizontal",
    loop: true,
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
    scrollbar: {
      el: ".swiper-scrollbar",
      hide: true,
    },

    breakpoints: {
      760: {
        slidesPerView: 3,
        spaceBetween: 10,
      },
    },

  });

  const sec1 = document.querySelector(`.sec_1`);
  const sec2 = document.querySelector(`.sec_2`);

  window.addEventListener(`scroll`, () => {
    const sec1Top = sec1.offsetTop - 500;
    const sec2Top = sec2.offsetTop;

    const scrollTop = window.scrollY;
    console.log(scrollTop);

    const bodyBg = document.querySelector(`body`);

    if (scrollTop > sec1Top && scrollTop < sec2Top) {
      bodyBg.classList.add(`bg`);
    } else {
      bodyBg.classList.remove(`bg`);
    }
  });

  window.addEventListener(`wheel`, (event) => {
    const headerArea = document.querySelector(`.header_area`);

    if (event.deltaY > 0) {
      headerArea.classList.remove(`scroll`);
    } else {
      headerArea.classList.add(`scroll`);
    }
  });

  const topBtn = document.querySelector(`.top_btn`);

  window.addEventListener(`scroll`, () => {
    const scrollTop = window.scrollY;

    if (scrollTop >= 500) {
      topBtn.classList.add(`on`);
    } else {
      topBtn.classList.remove(`on`);
    }
  });

  topBtn.addEventListener(`click`, () => {
    window.scrollTo({
      top: 0,
      behavior: `smooth`,
    });
  });
});
