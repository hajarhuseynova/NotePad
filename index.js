const inputNote = document.getElementById("inputNote");
const textareaNote = document.getElementById("textareaNote");
const saveButton = document.getElementById("saveButton");

saveButton.addEventListener("click", () => {
  if (inputNote.value.trim() == "") {
    alert("Please,write note title");
  } else if (textareaNote.value.trim() == "") {
    alert("Please,write note");
  }
});
