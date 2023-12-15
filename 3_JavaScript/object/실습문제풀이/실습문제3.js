const images = document.querySelectorAll(".images img");

const span = document.querySelector("#click span");
let count = 0;

function clickHandler() {
  span.innerHTML = ++count;
  const random = [
    Math.floor(Math.random() * 3 + 1),
    Math.floor(Math.random() * 3 + 1),
    Math.floor(Math.random() * 3 + 1),
  ];

  for (let i = 0; i < images.length; i++) {
    images[i].setAttribute("src", `/resources/spy${random[i]}.jpg`);
    if (random[0] == random[1] && random[1] === random[2]) {
      result.innerHTML = "Conguration!! Press restart to play again~";
      click.setAttribute("disabled", "disabled");
    }
  }
}

function restartHandler() {
  for (let i = 0; i < images.length; i++) {
    images[i].setAttribute("src", `/resources/spy${i + 1}.jpg`);
  }
  click.removeAttribute("disabled");
  count = 0;
  span.innerHTML = "";
  result.innerHTML = "";
}
click.addEventListener("click", clickHandler);
restart.addEventListener("click", restartHandler);
