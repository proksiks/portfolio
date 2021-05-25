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
