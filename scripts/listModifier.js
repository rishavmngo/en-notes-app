import { addToList } from "./addToList.js";
const modal = document.querySelector(".overlay");
const noteList = document.querySelector("[main-note-list]");
// let notes = [];
let notes = JSON.parse(localStorage.getItem("en-note")) || [];
let note = {};
let acmd = {};

window.addEventListener("load", function () {
  addToList(notes);
});
function saveToLocalStorage(n) {
  localStorage.setItem("en-note", JSON.stringify(n));
}

export function listModifier(noteTitle, noteDesp, cmd) {
  if (cmd.op === "add") {
    notes.unshift({
      id: new Date().valueOf(),
      noteTitle: noteTitle,
      noteDesp: noteDesp,
    });

    saveToLocalStorage(notes);
    addToList(notes);
  } else if (cmd.op === "remove") {
    notes = notes.filter((i) => {
      return i.id !== cmd.id;
    });

    saveToLocalStorage(notes);
    addToList(notes);
  } else if (cmd.op === "update") {
    note = notes.find((i) => i.id === cmd.id);
    acmd = cmd;
    modal.querySelector(".note-title-editor").textContent = note.noteTitle;
    modal.querySelector(".note-desp-editor").textContent = note.noteDesp;
  }
}

modal.addEventListener("click", function (e) {
  const elem = e.target;
  if (
    !(
      elem.classList.contains("note-editor-modal") ||
      elem.classList.contains("note-title-editor") ||
      elem.classList.contains("note-desp-editor")
    )
  ) {
    modal.classList.add("invisible");
    const newTitle = modal.querySelector(".note-title-editor").textContent;
    const newDesp = modal.querySelector(".note-desp-editor").textContent;
    note.noteTitle = newTitle;
    note.noteDesp = newDesp;
    notes = notes.filter((i) => i.id !== acmd.id);
    notes.unshift(note);
    saveToLocalStorage(notes);
    addToList(notes);
  }
});
