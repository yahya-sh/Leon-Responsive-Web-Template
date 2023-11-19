const navIconButton = document.querySelector(
  ".header .container nav .menu-icon"
);
const navMenu = document.querySelector(".header .container nav ul");
// const visible = navMenu.classList.contains("show-nav-menu");

navIconButton.addEventListener("click", (event) => {
  navMenu.classList.toggle("show-nav-menu");
});

const navMenuItems = document.querySelectorAll(
  ".header .container nav ul li a"
);
const hidNavMenu = function () {
  navMenu.classList.remove("show-nav-menu");
};
navMenuItems.forEach((navMenuItem) => {
  navMenuItem.addEventListener("click", hidNavMenu);
});

const navContainer = document.querySelector(".header .container nav");

document.addEventListener("click", (event) => {
  const clickedOutsideNavMenu = !navContainer.contains(event.target);
  if (clickedOutsideNavMenu) hidNavMenu();
});
