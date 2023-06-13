const menuCollapse = document.querySelector(".menu__collapse");
const linksContainerEl = document.querySelector(".app__links-container");

if (menuCollapse && linksContainerEl) {
  menuCollapse.addEventListener("click", () => {
    linksContainerEl.classList.toggle("active");

    if (linksContainerEl.classList.contains("active")) {
      menuCollapse.src = "./asssets/images/open_menu.svg";
    } else {
      menuCollapse.src = "./asssets/images/close_menu.svg";
    }
  });
}
