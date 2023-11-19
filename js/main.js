// SHOW NAV_MENU WHEN CLICK EVENT
let nav_menu = document.querySelector(".nav_links");
let nav_toggle = document.querySelector(".nav_toggle");
let nav_close = document.querySelector(".nav_close");

// CHECK IF VARIABLE EXISTS
// MENU SHOW
if (nav_toggle) {
  nav_toggle.addEventListener("click", function () {
    nav_menu.classList.add("active_menu");
  });
}
// MENU HIDDEN
if (nav_close) {
  nav_close.addEventListener("click", function () {
    nav_menu.classList.remove("active_menu");
  });
}
// WHEN CLICK ON ALL LI REMOVE MENU
let menu_list = document.querySelectorAll(".nav_link");

function removeMenu() {
  const newMenu = document.querySelector(".nav_links");
  newMenu.classList.remove("active_menu");
}

menu_list.forEach((li) => li.addEventListener("click", removeMenu));

//  CHANGE BACKGROUND HEADER

function changeBgHeader() {
  let head = document.querySelector(".header");

  this.scrollY >= 100
    ? head.classList.add("change-bg")
    : head.classList.remove("change-bg");
}

window.addEventListener("scroll", changeBgHeader);

// Scroll Up

function scrollUp() {
  let scrollUp = document.getElementById("scroll_up");
  this.scrollY >= 200
    ? scrollUp.classList.add("show_scroll")
    : scrollUp.classList.remove("show_scroll");
}

window.addEventListener("scroll", scrollUp);

/* ==================== Scroll Section Active Link ========================== */
let sections = document.querySelectorAll("section[id]");

function scrollActiveLink() {
  const scrollY = window.scrollY;
  sections.forEach((section) => {
    let secHeight = section.offsetHeight;
    let secTop = section.offsetTop - 50;
    let secId = section.getAttribute("id");

    if (scrollY > secTop && scrollY <= secTop + secHeight) {
      document
        .querySelector(`.nav_links a[href*= ${secId}]`)
        .classList.add("active_link");
    } else {
      document
        .querySelector(`.nav_links a[href*= ` + secId + `]`)
        .classList.remove("active_link");
    }
  });
}

window.addEventListener("scroll", scrollActiveLink);

/* =========================== SCROLL REVEAL ============================ */
let scr = ScrollReveal({
  distance: "60px",
  duration: 2500,
  delay: 400,
});

scr.reveal(`.home_header,.section_title`, { delay: 600 });
scr.reveal(`.home_body`, { delay: 700 });
scr.reveal(`.home_image`, { delay: 900, origin: "top" });
scr.reveal(`.sponser_img`, { origin: "top", interval: 100 });
scr.reveal(`.specs_data,.discount_data`, { origin: "left", interval: 100 });
scr.reveal(`.specs_image,.discount_image`, { origin: "right" });
scr.reveal(`.case_image`, { origin: "top" });
scr.reveal(`.case_data`, { origin: "bottom" });
scr.reveal(".product_item,.product_image", { origin: "bottom", interval: 100 });
scr.reveal(".footer_container", { origin: "top" ,delay: 410});
