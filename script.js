var css = document.querySelector("h3");
var color1 = document.getElementById("color1");
var color2 = document.getElementById("color2");
var body = document.querySelector("body");
var btn = document.querySelector(".btn");

function setGradient() {
  body.style.background = "linear-gradient(to right, "
  + color1.value
  + ", "
  + color2.value
  + ")";

  css.textContent = (body.style.background + ";")
}

color1.addEventListener("input", setGradient)

color2.addEventListener("input", setGradient)



function random_bg_color() {
    var bgColor1 = Math.floor(16**5 + Math.random()*(16**6-16**5)).toString(16);
    var bgColor2 = Math.floor(16**5 + Math.random()*(16**6-16**5)).toString(16);

    body.style.background =
    "linear-gradient(to right, #"
    + bgColor1
    + ", #"
    + bgColor2
    + ")";

    color1.value = "#" + bgColor1;
    color2.value = "#" + bgColor2;

    css.textContent = (body.style.background + ";")
}

btn.addEventListener("click", random_bg_color);
