let menuOpen = false;

function toggleMenu(event) {
  if (!menuOpen) {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.add("open");
    icon.classList.add("open");
    menu.style.opacity = 1;
    menuOpen = true;
  } else {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.remove("open");
    icon.classList.remove("open");
    menu.style.opacity = 0;
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

const goToTopButton = document.getElementById("go-to-top-button");

const emailIcon = document.getElementById("email-icon");
const phoneIcon = document.getElementById("phone-icon");
const locationIcon = document.getElementById("location-icon");

const infoBar = document.getElementById("info-bar");
const infoText = document.getElementById("info-text");
const copyButton = document.getElementById("copy-button");
const emailButton = document.getElementById("email-button");
const phoneButton = document.getElementById("phone-button");
const mapButton = document.getElementById("map-button");

let infoBarStatus = 0;

function fadeInInfo(element) {
  element.style.backgroundColor = "#000";

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
    }
  }, 35);

  infoBarStatus = 0;
}

window.addEventListener("scroll", () => {
  if (window.scrollY > 200) {
    goToTopButton.style.display = "block";
  } else {
    goToTopButton.style.display = "none";
  }
});

function goToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

goToTopButton.addEventListener("click", () => {
  goToTop();
});

emailIcon.addEventListener("click", function () {
  infoText.textContent = "kchand@buffalo.edu";
  copyButton.style.display = "flex";
  emailButton.style.display = "flex";
  phoneButton.style.display = "none";
  mapButton.style.display = "none";
  event.stopPropagation();

  fadeInInfo(infoBar);
});

phoneIcon.addEventListener("click", function () {
  infoText.textContent = "+1 (716) 292-5504";
  copyButton.style.display = "flex";
  emailButton.style.display = "none";
  phoneButton.style.display = "flex";
  mapButton.style.display = "none";
  event.stopPropagation();

  fadeInInfo(infoBar);
});

locationIcon.addEventListener("click", function () {
  infoText.textContent = "New York, USA";
  copyButton.style.display = "none";
  emailButton.style.display = "none";
  phoneButton.style.display = "none";
  mapButton.style.display = "flex";
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

emailButton.addEventListener("click", () => {
  const url = "mailto:kchand@buffalo.edu";
  // window.open(url, "_blank");
  window.location.href = url;

  waitAndDisappear(infoBar, 750);
});

phoneButton.addEventListener("click", () => {
  const url = "tel:+1 (716) 292-5504";
  // window.open(url, "_blank");
  window.location.href = url;

  waitAndDisappear(infoBar, 750);
});

mapButton.addEventListener("click", () => {
  // Open a link in new tab
  const url = "https://www.google.com/maps/place/" + infoText.innerText;
  window.open(url, "_blank");

  waitAndDisappear(infoBar, 750);
});

function showConfirmation() {
  infoText.textContent = "Copied!";
  infoBar.style.backgroundColor = "#6808d3";
  copyButton.style.display = "none";
  emailButton.style.display = "none";
  phoneButton.style.display = "none";
  mapButton.style.display = "none";

  waitAndDisappear(infoBar, 750);
}

function waitAndDisappear(element, waitTime) {
  setTimeout(() => {
    fadeOutInfo(element);
  }, waitTime);
}

function showUrl(img, url_link) {
  img.dataset.url = url_link;
  img.title = img.dataset.url;
}

function setFreshResumeUrl() {
  const link = document.getElementById("resumeLink");
  const baseUrl =
    "https://kunalchand.github.io/portfolio/assets/Kunal_Chand_resume_2.pdf";
  link.href = baseUrl + "?v=" + new Date().getTime();
}
