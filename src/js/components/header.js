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
