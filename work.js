const container = document.querySelector(".container");

for (let i = 1; i <= 16 * 16; i++) {
  let div = document.createElement("div");

  container.appendChild(div);
  let n = 600 / 16;
  div.style.cssText = `width:${n}px;height:${n}px;`;
}
// const div1 = document.createElement('div');
// div1.classList.add('div1');
// container.appendChild(div1);

let divv = document.querySelectorAll(".container div");

//hover Effect
divv.forEach((button) => {
  // and for each one we add a 'click' listener
  button.addEventListener("mouseenter", () => {
    button.style.backgroundColor = "black";
  });
});

//creating reset button

function reset() {
  const resetBtn = document.createElement("button");
  resetBtn.textContent = "RESET";
  container.appendChild(resetBtn);
  resetBtn.setAttribute('id',"reset");

  resetBtn.addEventListener("click", () => {
    divv.forEach((button) => {
      button.style.backgroundColor = "white";
    });
  });
}

reset();


