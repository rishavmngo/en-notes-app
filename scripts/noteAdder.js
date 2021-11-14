import { listModifier } from "./listModifier.js";

export const noteAdder = () => {};
const noteAdderTitle = document.querySelector(".note-adder--title");
const noteAdderDesp = document.querySelector(".note-adder--desp");

//event listner
noteAdderDesp.addEventListener("click", function () {
  noteAdderTitle.classList.remove("invisible");
  if (noteAdderDesp.textContent === "Take a note...") {
    noteAdderDesp.textContent = "";
  }
  if (noteAdderTitle.textContent === "") {
    noteAdderTitle.textContent = "Title...";
  }
});
noteAdderTitle.addEventListener("click", function () {
  if (noteAdderTitle.textContent === "Title...") {
    noteAdderTitle.textContent = "";
  }
  if (noteAdderDesp.textContent === "") {
    noteAdderDesp.textContent = "Take a note...";
  }
});

//event listner
//when user click outside the note adder noteSave() is called
document.addEventListener("click", function (e) {
  if (e.target !== noteAdderDesp && e.target !== noteAdderTitle) {
    if (
      (noteAdderDesp.textContent !== "" &&
        noteAdderDesp.textContent !== "Take a note...") ||
      (noteAdderTitle.textContent !== "" &&
        noteAdderTitle.textContent !== "Title...")
    ) {
      listModifier(noteAdderTitle.textContent, noteAdderDesp.textContent, {
        id: "",
        op: "add",
      });
    }
    noteAdderTitle.classList.add("invisible");
    noteAdderTitle.textContent = "Title...";
    noteAdderDesp.textContent = "Take a note...";
  }
});
