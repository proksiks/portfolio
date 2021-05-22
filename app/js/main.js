
//MAIN

////Header

//////Header burger
let headerBurger = document.querySelector('.header__burger');
let mainBody = document.body;
let headerListMobile = document.querySelector('.header__list-mobile');
let headerLayout1 = document.querySelector('.header__layout-1');
let headerLayout2 = document.querySelector('.header__layout-2');
let headerLayout3 = document.querySelector('.header__layout-3');
if ($(window).width() > 1023) {
  document.addEventListener("click", function (e) {
    if (e.target.id !== "header__list-mobile" && e.target.id !== "header__burger") {
      mainBody.classList.remove("_lock");
      headerBurger.classList.remove("_active");
      headerListMobile.classList.remove("_active");
      headerLayout1.classList.remove("_active");
      headerLayout2.classList.remove("_active");
      headerLayout3.classList.remove("_active");
    }
  });
}
$(document).keyup(function (e) {
  if (e.keyCode === 27) {
    mainBody.classList.remove("_lock");
    headerBurger.classList.remove("_active");
    headerListMobile.classList.remove("_active");
    headerLayout1.classList.remove("_active");
    headerLayout2.classList.remove("_active");
    headerLayout3.classList.remove("_active");
  }
});
headerBurger.addEventListener("click", function () {
  mainBody.classList.toggle("_lock");
  headerBurger.classList.toggle("_active");
  headerListMobile.classList.toggle("_active");
  headerLayout1.classList.toggle("_active");
  headerLayout2.classList.toggle("_active");
  headerLayout3.classList.toggle("_active");
});
//////Header burger

//////Header scroll
let scrollHeader = document.querySelector('.header');
window.addEventListener('scroll', function () {
  if (window.pageYOffset > 150) {
    scrollHeader.classList.add('_active');
  } else {
    scrollHeader.classList.remove('_active');
  }
});
//////Header scroll

//////Header Search
let srchTxt = document.querySelector('.search-txt');
let srchBtn = document.querySelector('.search-btn');
srchBtn.addEventListener("click", function (e) {
  e.preventDefault();
  srchTxt.classList.toggle("active");
  srchBtn.classList.toggle("active");
});
//////Header Search

//////Header LANG
let outBtn = document.querySelector(".btn");
let btn = document.querySelector("button");
let dropdown = document.querySelector(".dropdown-options");
let optionLinks = document.querySelectorAll(".option a");
outBtn.addEventListener("click", function (e) {
  e.preventDefault();
  dropdown.classList.toggle("open");
});
let clickFn = function (e) {
  e.preventDefault();

  dropdown.classList.remove("open");

  btn.innerHTML = this.text;
  let activeLink = document.querySelector(".option .active")

  if (activeLink) {
    activeLink.classList.remove("active");
  }

  this.classList.add("active");
}
for (let i = 0; i < optionLinks.length; i++) {
  optionLinks[i].addEventListener("mousedown", clickFn, false);
}
//////Header LANG

////Header

//OVERLAY
TweenMax.to('.first', 1.5, {
  delay: .2,
  left: '-100%',
  ease: Expo.easeInOut
})
TweenMax.to('.second', 1.5, {
  delay: .4,
  left: '-100%',
  ease: Expo.easeInOut
})
TweenMax.to('.third', 1.5, {
  delay: .6,
  left: '-100%',
  ease: Expo.easeInOut
})
//OVERLAY

//WOW
new WOW().init();
//WOW

//MAIN


//MAIN__PAGE

////GSAP
let mtl = gsap.timeline();
gsap.from('.wrapper', { opacity: 0, duration: 1 });
mtl.from('.top-content__bg', { opacity: 0, duration: 0.7 })
  .from('.top-content__item-1', { opacity: 0, x: -100, duration: 0.7 })
  .from('.top-content__item-2', { opacity: 0, x: 100, duration: 0.7 })
  .from('.top-content__item-3', { opacity: 0, y: -100, duration: 0.7 })
  .from('.top-content__col img', { opacity: 0, x: -100, duration: 0.7 })
  .from('.top-content__col h1', { opacity: 0, x: 100, duration: 0.7 })
  .from('.top-content__col p', { opacity: 0, x: -50, duration: 0.7 })
  .from('.top-content__btn', { opacity: 0, y: 50, duration: 0.7 });
TweenMax.staggerFrom(".header__logo", 1, {
  delay: 1,
  opacity: 0,
  y: -100,
  ease: Expo.easeInOut
}, 0.08)
TweenMax.staggerFrom(".header__nav .header__list li", 1, {
  delay: 1.2,
  opacity: 0,
  y: -100,
  ease: Expo.easeInOut
}, 0.08)
TweenMax.staggerFrom(".header__other .header__icons", 1, {
  delay: 1.4,
  opacity: 0,
  y: -100,
  ease: Expo.easeInOut
}, 0.08)
TweenMax.staggerFrom(".header__burger", 1, {
  delay: 1.6,
  opacity: 0,
  y: -100,
  ease: Expo.easeInOut
}, 0.08)
TweenMax.staggerFrom(".top-content__stars li", 1, {
  delay: 1.9,
  opacity: 0,
  y: -100,
  ease: Expo.easeInOut
}, 0.08)
////GSAP





//// SWIPER
$(document).ready(function () {

  $('.portfolio__filters').on('click', 'li', function () {
    let filter = $(this).attr('data-filter');

    $('.portfolio__slider .swiper-slide').hide()
    $('.portfolio__slider .swiper-slide' + filter).show()
    $('.portfolio__filters li').removeClass('_active');
    $(this).addClass('_active');

    productSwiper.updateSize();
    productSwiper.updateSlides();
    productSwiper.updateProgress();
    productSwiper.updateSlidesClasses();
    productSwiper.slideTo(0);

    return false;
  });

  let productSwiper = new Swiper('.portfolio__slider', {
    slidesPerView: 5,
    slidesPerGroup: 1,
    preloadImages: false,
    lazy: {
      loadOnTransitionStart: false,
      loadPrevNext: false,
    },
    watchSlidesProgress: true,
    watchSlidesVisibility: true,
    breakpoints: {
      320: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
      1600: {
        slidesPerView: 5,
      },
    },
  })
});
new Swiper('.reviews__slider', {
  autoHeight: true, //enable auto height
  spaceBetween: 40,
  pagination: {
    el: '.reviews__pagination',
    clickable: true,
    //dynamicBullets: true,
  },
});
//// SWIPER

//MAIN__PAGE

//ABOUT__PAGE

//// SWIPER
$(document).ready(function () {

  $('.slider-team__filters').on('click', 'li', function () {
    let filter = $(this).attr('data-filter');

    $('.slider-team__slider .swiper-slide').hide()
    $('.slider-team__slider .swiper-slide' + filter).show()
    $('.slider-team__filters li').removeClass('_active');
    $(this).addClass('_active');

    productSwiper.updateSize();
    productSwiper.updateSlides();
    productSwiper.updateProgress();
    productSwiper.updateSlidesClasses();
    productSwiper.slideTo(0);

    return false;
  });

  let productSwiper = new Swiper('.slider-team__slider', {
    spaceBetween: 30,
    slidesPerView: 4,
    breakpoints: {
      320: {
        slidesPerView: 1,
      },
      600: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 3,
      },
      1200: {
        slidesPerView: 4,
      },
    },
  })
});
//// SWIPER



//ABOUT__PAGE




//ЗАКИНУТЬ НА ОСНОВНУЮ СТРАНИЦУ
////Parallax
let items = document.querySelector(".top-content__items-list");
let mainParralaxScene = new Parallax(items);
let stars = document.querySelector(".top-content__stars");
let parralaxScene = new Parallax(stars);
let ReviewStars = document.querySelector(".reviews__stars");
let ReviewParralaxScene = new Parallax(ReviewStars);
////Parallax

//ЗАКИНУТЬ НА ОСНОВНУЮ СТРАНИЦУ
//# sourceMappingURL=main.js.map
