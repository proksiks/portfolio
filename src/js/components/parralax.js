////Parallax
let items = document.querySelector(".top-content__items-list");
let stars = document.querySelector(".top-content__stars");
let ReviewStars = document.querySelector(".reviews__stars");


document.addEventListener("DOMContentLoaded", function() {
  new Parallax(items);
  new Parallax(stars);
  new Parallax(ReviewStars);
});
