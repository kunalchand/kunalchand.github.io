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
const copyPopup = document.getElementById("copy-popup-text");

let infoBarStatus = 0;

function fadeInInfo(element) {
  infoBar.style.backgroundColor = "#000";

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

  infoBarStatus = 1;
}

function fadeOutInfo(element) {
  // If already faded out, do nothing
  if (infoBarStatus === 0) {
    return;
  }

  // Fade out over 0.35 seconds
  let opacity = 1;
  const interval = setInterval(() => {
    opacity -= 0.1;
    element.style.opacity = opacity;
    if (opacity <= 0) {
      clearInterval(interval);
      element.style.display = "flex";
    }
  }, 35);

  infoBarStatus = 0;
}

emailIcon.addEventListener("click", function () {
  infoText.textContent = "kunalchand234@gmail.com";
  copyButton.style.display = "flex";
  event.stopPropagation();

  fadeInInfo(infoBar);
});

phoneIcon.addEventListener("click", function () {
  infoText.textContent = "+1 (716) 292-5504";
  copyButton.style.display = "flex";
  event.stopPropagation();

  fadeInInfo(infoBar);
});

locationIcon.addEventListener("click", function () {
  infoText.textContent = "Buffalo, New York, USA";
  copyButton.style.display = "none";
  event.stopPropagation();

  fadeInInfo(infoBar);
});

infoBar.addEventListener("click", function () {
  event.stopPropagation();
});

copyButton.addEventListener("click", () => {
  // Copy content of infoText to clipboard
  navigator.clipboard
    .writeText(infoText.innerText)
    .then(() => {
      // Show the copy confirmation
      showConfirmation();
    })
    .catch((error) => {
      console.error("Unable to copy text: ", error);
    });
});

function showConfirmation() {
  infoText.textContent = "Copied!";
  infoBar.style.backgroundColor = "#4CAF50";
  copyButton.style.display = "none";
}

function showUrl(img, url_link) {
  img.dataset.url = url_link;
  img.title = img.dataset.url;
}
