/* Created by Tivotal */

let sidebar = document.querySelector(".sidebar");
let menu = document.querySelector(".menu-content");
let menu_btn = document.querySelector(".fa-bars");
let menuItems = document.querySelectorAll(".submenu-item");
let submenuTitle = document.querySelectorAll(".submenu .menu-title");

menuItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    menu.classList.add("submenu-active");
    item.classList.add("show-submenu");

    menuItems.forEach((item2, index2) => {
      if (index !== index2) {
        item2.classList.remove("show-submenu");
      }
    });
  });
});

submenuTitle.forEach((title) => {
  title.addEventListener("click", () => {
    menu.classList.remove("submenu-active");
  });
});

menu_btn.addEventListener("click", () => {
  sidebar.classList.toggle("close");
});
