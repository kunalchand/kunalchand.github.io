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
  fadeOutInfo(infoBar);
});

const emailIcon = document.getElementById("email-icon");
const phoneIcon = document.getElementById("phone-icon");
const locationIcon = document.getElementById("location-icon");

const infoBar = document.getElementById("info-bar");
const infoText = document.getElementById("info-text");
const copyButton = document.getElementById("copy-button");

function fadeInInfo(element) {
  // Set initial opacity to 0
  element.style.opacity = 0;

  // Fade in over 0.35 seconds
  let opacity = 0;
  const interval = setInterval(() => {
    opacity += 0.1;
    element.style.opacity = opacity;
    if (opacity >= 1) {
      clearInterval(interval);
    }
  }, 35);
}

function fadeOutInfo(element) {
  // Set initial opacity to 1
  element.style.opacity = 1;

  // Fade out over 0.35 seconds
  let opacity = 1;
  const interval = setInterval(() => {
    opacity -= 0.1;
    element.style.opacity = opacity;
    if (opacity <= 0) {
      clearInterval(interval);
      element.style.display = "none";
    }
  }, 35);
}

emailIcon.addEventListener("click", function () {
  infoBar.style.display = "flex";
  infoText.textContent = "kunalchand234@gmail.com";
  copyButton.style.display = "flex";
  event.stopPropagation();

  fadeInInfo(infoBar);
});

phoneIcon.addEventListener("click", function () {
  infoBar.style.display = "flex";
  infoText.textContent = "+1 (716) 292-5504";
  copyButton.style.display = "flex";
  event.stopPropagation();

  fadeInInfo(infoBar);
});

locationIcon.addEventListener("click", function () {
  infoBar.style.display = "flex";
  infoText.textContent = "Buffalo, New York, USA";
  copyButton.style.display = "none";
  event.stopPropagation();

  fadeInInfo(infoBar);
});

infoBar.addEventListener("click", function () {
  event.stopPropagation();
});

function showUrl(img, url_link) {
  img.dataset.url = url_link;
  img.title = img.dataset.url;
}
