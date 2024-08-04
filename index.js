console.log(`Window width: ${window.innerWidth}px`);

/*** self-asset ***/
function showSelfAsset() {
  console.log(
    "Asset: 100 \n1.Вёрстка страницы Main соответствует макету при ширине экрана 1280px: 14 \n2.Вёрстка страницы Main соответствует макету при ширине экрана 768px: 14 \n3.Вёрстка страницы Main соответствует макету при ширине экрана 320px: 14 \n4.Вёрстка страницы Pets соответствует макету при ширине экрана 1280px: 6 \n5.Вёрстка страницы Pets соответствует макету при ширине экрана 768px: 6 \n6.Вёрстка страницы Pets соответствует макету при ширине экрана 320px: 6 \n7. Ни на одном из разрешений до 320px включительно не появляется горизонтальная полоса прокрутки, справа от отдельных блоков не появляются белые поля. Весь контент страницы при этом сохраняется: не обрезается и не удаляется: 20 \n8. Верстка резиновая: при плавном изменении размера экрана от 1280px до 320px верстка подстраивается под этот размер, элементы верстки меняют свои размеры и расположение, не наезжают друг на друга, изображения могут менять размер, но сохраняют правильные пропорции: 8 \n9.При ширине экрана меньше 768px на обеих страницах меню в хедере скрывается, появляется иконка бургер-меню: 4 \n10. Верстка обеих страниц валидная: для проверки валидности вёрстки используйте сервис: 8"
  );
}

showSelfAsset();

/*** BURGER MENU ***/

const burger = document.querySelector(".burger");
const burgerMenu = document.querySelector(".menu");
const header = document.querySelector(".header");
const cover = document.querySelector(".cover");
const body = document.querySelector(".body");
const menuItems = document.querySelectorAll(".menu-item");

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

function goScroll() {
  body.classList.remove("no-scroll");
}

function followLink() {
  for (let i = 0; i < menuItems.length; i++) {
    menuItems[i].addEventListener("click", notActiveBurgerLogo);
    menuItems[i].addEventListener("click", notActiveBurgerMenu);
    menuItems[i].addEventListener("click", hideCover);
    menuItems[i].addEventListener("click", goScroll);
  }
}

function closeBurgerMenu() {
  document.addEventListener("click", function (event) {
    if (!burgerMenu.contains(event.target) && !burger.contains(event.target)) {
      notActiveBurgerLogo();
      notActiveBurgerMenu();
      hideCover();
      goScroll();
    }
  });
}

openBurgerMenu();

closeBurgerMenu();

followLink();
