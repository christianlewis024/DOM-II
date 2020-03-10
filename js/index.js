const header = document.querySelector("header");
header.addEventListener(
  "mouseenter",
  () => ((header.style.backgroundColor = "grey"), (header.style.color = "red"))
);

header.addEventListener(
  "mouseout",
  () => (
    (header.style.backgroundColor = "#fff"), (header.style.color = "black")
  )
);

const pRemove = document.querySelectorAll("p");
pRemove.forEach(pRemove =>
  pRemove.addEventListener("auxclick", e => {
    e.preventDefault();
    const div = e.target.parentElement;
    div.parentNode.removeChild(div);
  })
);

const removeBus = document.querySelector(".intro img");
removeBus.addEventListener("mouseup", () => (removeBus.style.display = "none"));

const darkToggle = document.querySelector("*");
darkToggle.addEventListener(
  "keypress",
  () => (
    (darkToggle.style.backgroundColor = "black"),
    (darkToggle.style.color = "white")
  )
);
darkToggle.addEventListener(
  "keyup",
  () => (
    (darkToggle.style.backgroundColor = "#fff"),
    (darkToggle.style.color = "black")
  )
);

const removeImg = document.querySelectorAll("img");
removeImg.forEach(image =>
  image.addEventListener("click", e => {
    const div = e.target.parentElement;
    div.parentNode.removeChild(div);
  })
);

// dARK MODE
// dARK MODE
// dARK MODE

var darkButton = document
  .getElementByID("darkMode")
  .addEventListener("click", buttonClick);

function darkModeFunc(e) {
  document.querySelector("body").style.color = "white";
  document.querySelector("body").style.backgroundColor = "black";
  document.querySelector("header").style.backgroundColor = "black";
  document.querySelector(".logo-heading").style.color = "white";
}

// REGULAR MODE
// REGULAR MODE
// REGULAR MODE

var regularButton = document
  .getElementByID("regularMode")
  .addEventListener("click", buttonClick);

function regularModeFunc(e) {
  document.querySelector("body").style.color = "black";
  document.querySelector("body").style.backgroundColor = "white";
  document.querySelector("header").style.backgroundColor = "white";
  document.querySelector(".logo-heading").style.color = "black";
}

// COLORFUL MODE
// COLORFUL MODE
// COLORFUL MODE
var colorfulButton = document
  .getElementByID("colorfulMode")
  .addEventListener("click", buttonClick);

function colorfulModeFunc(e) {
  document.querySelector("body").style.color = "teal";
  document.querySelector("body").style.backgroundColor = "#4400FA";
  document.querySelector("header").style.backgroundColor = "green";
  document.querySelector(".logo-heading").style.color = "red";
}
//// color modes done ////
