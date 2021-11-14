import { listModifier } from "./listModifier.js";
const modal = document.querySelector(".overlay");
const deleteModifier = document.querySelector(".note-modifier--delete");
export const noteModifier = () => {};

document.addEventListener("click", function (e) {
  const elem = e.target;
  //delete node
  if (elem.classList.contains("delete")) {
    const id = parseInt(elem.closest(".note").id);

    listModifier("", "", { id: id, op: "remove" });
  }
  //update note
  if (elem.classList.contains("note")) {
    modal.classList.toggle("invisible");
    listModifier("", "", { id: parseInt(elem.id), op: "update" });
  }
});
