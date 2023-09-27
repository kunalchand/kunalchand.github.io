let menuOpen = false;

function toggleMenu(event) {
  if (!menuOpen) {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.add("open");
    icon.classList.add("open");
    menuOpen = true;
  } else {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.remove("open");
    icon.classList.remove("open");
    menuOpen = false;
  }

  event.stopPropagation();
}

// Close menu if clicking outside
document.addEventListener("click", function (event) {
  if (menuOpen) {
    toggleMenu();
  }
});

function showUrl(img, url_link) {
  img.dataset.url = url_link;
  img.title = img.dataset.url;
}
