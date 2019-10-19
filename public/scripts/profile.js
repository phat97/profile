function loadScripts() {
  displayAccordion();
}

function displayAccordion() {
  let acc = document.getElementsByClassName("accordion");

  for (let i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", event => {
      let targetElement = event.target || event.srcElement;
      targetElement.classList.toggle("active");
      let panel = targetElement.nextElementSibling;

      if (targetElement.classList.contains("active")) {
        panel.style.border = "1px solid black";
      } else {
        panel.style.border = "none";
      }

      if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
      } else {
        panel.style.maxHeight = panel.scrollHeight + "px";
      }
    });
  }
}

function autoScrollTo(el) {
  let top = $("." + el).offset().top;
  $("html, body").animate({ scrollTop: top }, 500);
}
