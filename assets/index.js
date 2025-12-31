"use strict";

const FADJUSTMENT = ["fs-5", "fw-bold", "indie-flower-regular"];
let hasBeenClicked = false;

// Year on footer
const yearPlaceholder = document.querySelector("#year");
yearPlaceholder.textContent = new Date().getFullYear();

// Hover effect for the "Hire Me" button
const hireMe = document.querySelector("#nav-bar li:last-child");
const btnBackdrop = document.querySelector(".backdrop");
const anchor = document.querySelector("#special-btn a");
const swipePseudo = window.getComputedStyle(anchor, "::before");

hireMe.addEventListener("mouseenter", (e) => {
  btnBackdrop.classList.add("backdrop-hvr");
  anchor.classList.add("swipe-active");
});

hireMe.addEventListener("focusin", (e) => {
  btnBackdrop.classList.add("backdrop-hvr");
  // anchor.classList.add("swipe-active");
});

hireMe.addEventListener("focusout", (e) => {
  btnBackdrop.classList.remove("backdrop-hvr");
  // anchor.classList.add("swipe-active");
});

hireMe.addEventListener("mouseleave", (e) => {
  btnBackdrop.classList.remove("backdrop-hvr");
  anchor.classList.remove("swipe-active");
});

// Hero Button functionality
const heroButton = document.querySelector("#primary"); // The button
const rootHtmlElement = document.documentElement; // The website's root
const rootElement = document.body; // The body element
const compStyles = window.getComputedStyle(rootElement);
const footer = document.querySelector("footer");
const footerParagraphs = document.querySelectorAll("footer p");
heroButton.addEventListener("click", (e) => {
  const classList = footer.classList;
  const target = e.target;
  if (classList.contains("grafitti")) {
    classList.remove("grafitti");
    console.log("Removed grafitti!");
  } else {
    classList.add("grafitti");
    console.log("Added grafitti!");
  }

  const theme = rootHtmlElement.getAttribute("data-bs-theme");
  if (theme === "dark") {
    rootHtmlElement.setAttribute("data-bs-theme", "light");
    footerParagraphs.forEach((p, index) => {
      const classList = p.classList;
      classList.add(...FADJUSTMENT);
    });

    // Delayed Scroll to the end of the page
    if (!hasBeenClicked) {
      setTimeout(() => {
        rootHtmlElement.scrollIntoView({
          behavior: "smooth",
          block: "end",
        });
        setTimeout(() => {
          const altText = document.querySelector(".lead span");
          altText.textContent = "😛😛😛😛😌";
          hasBeenClicked = true;
          target.textContent = "Dark Mode";
          target.classList.add("outline-btn");
        }, 500);
      }, 500);
    } else {
      target.textContent = "Dark Mode";
      target.classList.add("outline-btn");
    }
  } else {
    if (hasBeenClicked) {
      target.textContent = "Light Mode";
    }
    rootHtmlElement.setAttribute("data-bs-theme", "dark");
    footerParagraphs.forEach((p, index) => {
      const classList = p.classList;
      classList.remove(...FADJUSTMENT);
    });
  }
});

// Light mode glint-swipe button functionality
const glintSwipeButtons = document.querySelectorAll(".icon-fix");
glintSwipeButtons.forEach((btn) => {
  btn.addEventListener("mouseenter", () => {
    btn.classList.add("swipe-active");
  });

  btn.addEventListener("mouseleave", () => {
    btn.classList.remove("swipe-active");
  });
});
