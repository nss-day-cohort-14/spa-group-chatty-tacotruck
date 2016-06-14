var darkThemeButton = document.getElementById("darkTheme");
var largeTextButton = document.getElementById("largeText");
var bodyColor = document.getElementById("body");
var bodyTextSize = document.getElementById("body");

function toggleBackground() {
  console.log("toggle");
  body.classList.toggle("bodyColorChange");
};

function toggleTextSize() {
  console.log("large text");
  body.classList.toggle("textSizeChange");
};

largeText.addEventListener("click", toggleTextSize);
darkTheme.addEventListener("click", toggleBackground);
