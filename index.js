const inputNote = document.getElementById("inputNote");
const textareaNote = document.getElementById("textareaNote");
const saveButton = document.getElementById("saveButton");
const cards = document.getElementById("cards");
const rounded = document.querySelector(".rounded");
const searchInput = document.getElementById("searchInput");
const defaultDiv = document.getElementById("defaultDiv");

const red = document.getElementById("red");
const purple = document.getElementById("purple");
const blue = document.getElementById("blue");
const orange = document.getElementById("orange");
const green = document.getElementById("green");

const confirmRed = document.querySelector(".confirmRed");
const confirmPurple = document.querySelector(".confirmPurple");
const confirmBlue = document.querySelector(".confirmBlue");
const confirmOrange = document.querySelector(".confirmOrange");
const confirmGreen = document.querySelector(".confirmGreen");

let selectedColor = "";
function selectedBoxColor(color) {
  selectedColor = color;
}
const defaultSvg = document.getElementById("defaultSvg");
defaultSvg.addEventListener("click", () => {
  let rslt = confirm("Are you sure?");
  if (rslt) {
    defaultDiv.style.display = "none";
  }
});

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
  let newcolor = selectedColor.replace(")", ",0.4)");
  h4.style.backgroundColor = newcolor;

  if (
    inputNote.value.trim() != "" &&
    textareaNote.value.trim() != "" &&
    selectedColor != ""
  ) {
    card.append(h4, p);
    cards.append(card);
    inputNote.value = "";
    textareaNote.value = "";
    selectedColor = "";
    display();
  }

  const remove = document.createElement("button");
  remove.classList.add("remove");
  remove.addEventListener("click", () => {
    let result = confirm("Are you sure?");
    if (result) {
      card.remove();
    }
  });
  remove.innerHTML = `
  <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" class="Content_deleteBtn__mQsUR" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"></path><path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"></path></svg>
  `;
  h4.append(remove);
});

red.addEventListener("click", () => {
  selectedBoxColor("rgb(240, 98, 146)");
  display();
  confirmRed.style.display = "inherit";
});
purple.addEventListener("click", () => {
  selectedBoxColor("rgb(186, 104, 200)");
  display();
  confirmPurple.style.display = "inherit";
});
blue.addEventListener("click", () => {
  selectedBoxColor("rgb(79, 195, 247)");
  display();
  confirmBlue.style.display = "inherit";
});
orange.addEventListener("click", () => {
  selectedBoxColor("rgb(255, 213, 79)");
  display();
  confirmOrange.style.display = "inherit";
});
green.addEventListener("click", () => {
  selectedBoxColor("rgb(174, 213, 129)");
  display();
  confirmGreen.style.display = "inherit";
});

function display() {
  confirmRed.style.display = "none";
  confirmPurple.style.display = "none";
  confirmBlue.style.display = "none";
  confirmOrange.style.display = "none";
  confirmGreen.style.display = "none";
}

searchInput.addEventListener("input", () => {
  const searchValueTitle = searchInput.value.trim().toLowerCase();
  const cardsArr = [...cards.children];
  cardsArr.forEach((card) => {
    const title = card
      .querySelector("h4")
      .textContent.trim()
      .toLocaleLowerCase();
    if (title.includes(searchValueTitle)) {
      card.style.display = "inline-block";
    } else {
      card.style.display = "none";
    }
  });
});
