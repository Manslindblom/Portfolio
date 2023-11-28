console.log("Script loaded!");
var acc = document.getElementsByClassName("project-line");
var i;

for (i = 0; i < acc.length; i++) {
  console.log(acc[i]);
  acc[i].addEventListener("click", function () {
    /* Toggle between adding and removing the "active" class,
        to highlight the button that controls the panel */
    this.classList.toggle("active");
    console.log(this);

    /* Toggle between hiding and showing the active panel */
    var panel = this.nextElementSibling;

    // Add smooth transition to the panel
    panel.style.transition = "max-height 0.8s ease"; // Adjust the duration as needed

    if (panel.style.display === "block" || panel.style.maxHeight) {
      panel.style.display = "none";
      panel.style.maxHeight = null;
    } else {
      panel.style.display = "block";
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}

// Add smooth scrolling for anchor links with a class of 'scroll-link'
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    var targetId = this.getAttribute("href").substring(1); // Remove the '#' from the href
    var targetElement = document.getElementById(targetId);

    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: "smooth",
      });
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const hamburgerIcon = document.querySelector(".hamburger-icon");
  const navbar = document.querySelector(".navbar");
  const navbarListContainer = document.querySelector(".navbar-list-container");

  hamburgerIcon.addEventListener("click", function () {
    navbarListContainer.classList.toggle("show");
    navbar.classList.toggle("show");
  });

  // Close the menu when clicking outside of it
  document.addEventListener("click", function (event) {
    if (
      !navbar.contains(event.target) &&
      !hamburgerIcon.contains(event.target)
    ) {
      navbarListContainer.classList.remove("show");
      navbar.classList.remove("show");
    }
  });
});
