// hamburger first
const navSlide = () => {
  const burger = document.querySelector(".burger");
  const navList = document.querySelector(".menu");
  const closed = document.querySelector(".menu li a i");

  burger.addEventListener("click", () => {
    navList.classList.toggle("main__menu__active");
  });
  closed.addEventListener("click", () => {
    navList.classList.remove("main__menu__active");
  });
};
navSlide();
// hamburger end
// swiper testimoni card
let swiperTesti = new Swiper(".content__testimoni", {
  loop: true,
  spaceBetween: 32,
  grabCursor: true,
  breakpoints: {
    700: {
      slidesPerView: 3,
    },
    800: {
      slidesPerView: 4,
    },
    968: {
      slidesPerView: 5,
    },
  },
});
// swiper testimoni card end
// accordion first
let accordions = document.querySelectorAll(".accordion-wrapper .accordion");

accordions.forEach((acco) => {
  acco.onclick = () => {
    accordions.forEach((subcontent) => {
      subcontent.classList.remove("active");
    });
    acco.classList.add("active");
  };
});
// accordion end
