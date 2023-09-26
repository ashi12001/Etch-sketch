const container = document.querySelector(".container");
// let widthOfContainer=parseInt(prompt("How many grids you want in a row or column"));
let widthOfContainer = 16;

if (widthOfContainer > 61) {
  alert("we don't support too much grids Try lower");
  widthOfContainer = 60;
}

//THis method i use is for width of container but it is not optimal

let newDimensions = 600;
container.style.width = newDimensions + "px";
container.style.height = newDimensions + "px";

function createContainer() {
  for (let i = 1; i <= widthOfContainer * widthOfContainer; i++) {
    let divv = document.createElement("div");
    container.appendChild(divv);
    let n = newDimensions / widthOfContainer - 1;

    divv.style.cssText = `width:${n}px;height:${n}px;`;
  }
}
createContainer();

//hover
const divv = document.querySelectorAll(".container div");

function getHoverEffect() {
  //hover Effect
  divv.forEach((button) => {
    // and for each one we add a 'click' listener
    button.addEventListener("mouseenter", () => {
      button.style.backgroundColor = "black";
    });
  });
}
getHoverEffect();

//eraser
const controls = document.querySelector(".controls");

function reset() {
  const reset = document.createElement("button");
  reset.setAttribute("id", "reset");
  reset.textContent = "Reset";
  controls.appendChild(reset);

  reset.addEventListener("click", () => {
    divv.forEach((individual) => {
      individual.style.backgroundColor = "white";
    });
  });
}
reset();

//eraser

function eraser() {
  const eraser = document.createElement("button");
  eraser.setAttribute("id", "eraser");
  eraser.textContent = "Eraser";
  controls.appendChild(eraser);

  eraser.addEventListener("click", () => {
    divv.forEach((button) => {
      // and for each one we add a 'click' listener
      button.addEventListener("mouseenter", () => {
        button.style.backgroundColor = "white";
      });
    });
  });
}
eraser();

function randColor() {
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);
  return `#${randomColor}`;
}

// rainbow hover effext

function rainbowHover() {
  const rainbowButton = document.createElement("button");
  rainbowButton.textContent = "rainbow";
  controls.appendChild(rainbowButton);
  rainbowButton.setAttribute("id", "rainbow");

  rainbowButton.addEventListener("click", () => {
    divv.forEach((button) => {
      // and for each one we add a 'click' listener
      button.addEventListener("mouseenter", () => {
        button.style.backgroundColor = randColor();
      });
    });
  });
}
rainbowHover();