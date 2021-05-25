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
