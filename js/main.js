var darkThemeButton = document.getElementById("darkTheme");
var largeTextButton = document.getElementById("largeText");
var clearMessagesButton = document.getElementById("clearMessagesButton");
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

function clearMessages() {
  console.log("clear Messages");
  outputDiv.innerHTML = "";
};

largeTextButton.addEventListener("click", toggleTextSize);
darkThemeButton.addEventListener("click", toggleBackground);
clearMessagesButton.addEventListener("click", clearMessages);

