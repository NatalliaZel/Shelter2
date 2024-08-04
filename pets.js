/*** BURGER MENU ***/

const burger = document.querySelector(".burger");
const burgerMenu = document.querySelector(".menu");
const header = document.querySelector(".header");
const cover = document.querySelector(".cover");
const body = document.querySelector(".body");
const menuItems = document.querySelectorAll(".menu-item");
const burgerLines = document.querySelectorAll(".burger-line");

function rotateBurgerLogo() {
  if (!burger.classList.contains("burger-active")) {
    burger.classList.add("burger-active");
  } else {
    burger.classList.add("burger-active-reverse");
    setTimeout(() => {
      burger.classList.remove("burger-active");
      burger.classList.remove("burger-active-reverse");
    }, 310);
  }
}

function openedLineColor() {
  if (burger.classList.contains("burger-active")) {
    for (let i = 0; i < burgerLines.length; i++) {
      burgerLines[i].classList.toggle("burger-line-opened");
    }
  }
}

function moveBurgerMenu() {
  if (!burgerMenu.classList.contains("openedMenu")) {
    burgerMenu.classList.add("openedMenu");
    header.classList.add("hideHeader");
  } else {
    burgerMenu.classList.add("closedMenu");

    setTimeout(() => {
      burgerMenu.classList.remove("openedMenu");
      burgerMenu.classList.remove("closedMenu");
      header.classList.remove("hideHeader");
    }, 310);
  }
}

function showCover() {
  cover.classList.toggle("cover-active");
}

function noScroll() {
  body.classList.toggle("no-scroll");
}

function openBurgerMenu() {
  burger.addEventListener("click", rotateBurgerLogo);
  burger.addEventListener("click", openedLineColor);
  burger.addEventListener("click", moveBurgerMenu);
  burger.addEventListener("click", showCover);
  burger.addEventListener("click", noScroll);
}

function notActiveBurgerLogo() {
  burger.classList.add("burger-active-reverse");
  setTimeout(() => {
    burger.classList.remove("burger-active");
    burger.classList.remove("burger-active-reverse");
  }, 310);
}

function notActiveBurgerMenu() {
  burgerMenu.classList.add("closedMenu");
  setTimeout(() => {
    burgerMenu.classList.remove("openedMenu");
    burgerMenu.classList.remove("closedMenu");
    header.classList.remove("hideHeader");
  }, 310);
}

function hideCover() {
  cover.classList.remove("cover-active");
}

function followLink() {
  for (let i = 0; i < menuItems.length; i++) {
    menuItems[i].addEventListener("click", notActiveBurgerLogo);
    menuItems[i].addEventListener("click", notActiveBurgerMenu);
    menuItems[i].addEventListener("click", hideCover);
    menuItems[i].addEventListener("click", openedLineColor);
    menuItems[i].addEventListener("click", goScroll);
  }
}

function goScroll() {
  body.classList.remove("no-scroll");
}

function closeBurgerMenu() {
  document.addEventListener("click", function (event) {
    if (!burgerMenu.contains(event.target) && !burger.contains(event.target)) {
      notActiveBurgerLogo();
      openedLineColor();
      notActiveBurgerMenu();
      hideCover();
      goScroll();
    }
  });
}

openBurgerMenu();

closeBurgerMenu();

followLink();
