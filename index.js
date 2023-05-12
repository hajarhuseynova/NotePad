const inputNote = document.getElementById("inputNote");
const textareaNote = document.getElementById("textareaNote");
const saveButton = document.getElementById("saveButton");
const cards = document.getElementById("cards");
const rounded = document.querySelector(".rounded");

const red = document.getElementById("red");
const purple = document.getElementById("purple");
const blue = document.getElementById("blue");
const orange = document.getElementById("orange");
const green = document.getElementById("green");

let selectedColor = "";
function selectedBoxColor(color) {
  selectedColor = color;
}

saveButton.addEventListener("click", () => {
  if (inputNote.value.trim() == "") {
    alert("Please,write note title");
  } else if (textareaNote.value.trim() == "") {
    alert("Please,write note");
  } else if (selectedColor == "") {
    alert("Please,choose a color");
  }
  const card = document.createElement("div");
  card.classList.add("card");

  const h4 = document.createElement("h4");
  h4.textContent = inputNote.value.trim();

  const p = document.createElement("p");
  p.textContent = textareaNote.value.trim();

  card.style.borderColor = selectedColor;
  h4.style.backgroundColor = selectedColor;

  if (
    inputNote.value.trim() != "" &&
    textareaNote.value.trim() != "" &&
    selectedColor != ""
  ) {
    card.append(h4, p);
    cards.append(card);
  }
  inputNote.textContent = " ";
  textareaNote.textContent = " ";
});

red.addEventListener("click", () => {
  selectedBoxColor("rgb(240, 98, 146)");
});
purple.addEventListener("click", () => {
  selectedBoxColor("rgb(186, 104, 200)");
});
blue.addEventListener("click", () => {
  selectedBoxColor("rgb(79, 195, 247)");
});
orange.addEventListener("click", () => {
  selectedBoxColor("rgb(255, 213, 79)");
});
green.addEventListener("click", () => {
  selectedBoxColor("rgb(174, 213, 129)");
});
