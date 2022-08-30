var elHeading = document.querySelector("[data-click-menu]");
var elBoxAddClass = document.querySelector("[data-click-change-class");
var elImgRotate = document.querySelector("[data-click-rotate-img]");

elHeading.addEventListener("click", function (evt) {
  addClassName(elBoxAddClass, "d-none");
  addClassName(elImgRotate, "img-rotate-js");
});

function addClassName(elClass, addClass) {
  elClass.classList.toggle(addClass);
}
