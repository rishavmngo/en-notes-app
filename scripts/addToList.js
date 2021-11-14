const noteTemplate = document.querySelector("[list-note-template]");
const noteList = document.querySelector("[main-note-list]");
console.log(noteList);

export const addToList = (arr) => {
  noteList.innerHTML = "";
  arr.forEach((item) => {
    const noteClone = noteTemplate.content.cloneNode(true);
    noteClone.querySelector("[list-note-main").id = item.id;
    noteClone.querySelector("[list-note-title]").textContent = item.noteTitle;
    noteClone.querySelector("[list-note-desp]").textContent = item.noteDesp;

    noteList.appendChild(noteClone);
  });
};
