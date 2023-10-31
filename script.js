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
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "250px";
    }
  });
}
