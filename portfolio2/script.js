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

// Close menu & info bar if clicking outside
document.addEventListener("click", function (event) {
  if (menuOpen) {
    toggleMenu();
  }
  infoBar.style.display = "none";
});

const emailIcon = document.getElementById("email-icon");
const phoneIcon = document.getElementById("phone-icon");
const locationIcon = document.getElementById("location-icon");

const infoBar = document.getElementById("info-bar");
const infoText = document.getElementById("info-text");
const copyButton = document.getElementById("copy-button");

emailIcon.addEventListener("click", function () {
  infoBar.style.display = "flex";
  infoText.textContent = "kunalchand234@gmail.com";
  copyButton.style.display = "flex";
  event.stopPropagation();
});

phoneIcon.addEventListener("click", function () {
  infoBar.style.display = "flex";
  infoText.textContent = "+1 (716) 292-5504";
  copyButton.style.display = "none";
  event.stopPropagation();
});

locationIcon.addEventListener("click", function () {
  infoBar.style.display = "flex";
  infoText.textContent = "Buffalo, New York, USA";
  copyButton.style.display = "none";
  event.stopPropagation();
});

infoBar.addEventListener("click", function () {
  event.stopPropagation();
});

function showUrl(img, url_link) {
  img.dataset.url = url_link;
  img.title = img.dataset.url;
}
