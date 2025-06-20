const addBtn = document.querySelector("#addBtn");
const ColorSet = document.querySelector(".colorsSet");
const colors = document.querySelectorAll(".colors");
const container = document.querySelector(".container");
const box = document.querySelector(".box");
const deltBox = document.querySelectorAll(".deltBox");
const lowerSec = document.querySelector(".lowerSec");
const prompt = document.querySelector(".prompt");
const cancel = document.querySelector("#cancel");
const addNote = document.querySelector("#addNote");
const cross = document.querySelector("#cross");
const inputText = document.querySelector("#text");
let noteTextNmbr = -2;
let noteColorNmbr = -1;

addBtn.addEventListener("click", () => {
  addBtn.classList.toggle("rotateReverse");

  if (ColorSet.style.height === "35%") {
    ColorSet.style.height = "0%";
    ColorSet.style.marginTop = "-32px";
  } else {
    ColorSet.style.height = "35%";
    ColorSet.style.marginTop = "15px";
  }
});

function createNote() {
  colors.forEach((color) => {
    color.addEventListener("click", () => {
      prompt.style.display = "flex";

      let newNote = document.createElement("div");
      newNote.classList.add("box");
      newNote.style.backgroundColor = color.style.backgroundColor;
      addNote.onclick = () => {
        let note = inputText.value;
        newNote.innerHTML = `${note} <span class="deltBox">x</span>`;
        let colorValue = color.style.backgroundColor;
        saveNoteInLS(note);
        saveNoteInLS(colorValue);
        lowerSec.append(newNote);
        prompt.style.display = "none";
      };
    });
  });
}

createNote();

function saveNoteInLS(note) {
  const noteData = getNoteFromLS();
  noteData.push({ note });
  localStorage.setItem("notesData", JSON.stringify(noteData));
}

function getNoteFromLS() {
  return JSON.parse(localStorage.getItem("notesData")) || [];
}

cancel.onclick = () => {
  prompt.style.display = "none";
};

cross.onclick = () => {
  prompt.style.display = "none";
};

console.log(deltBox)

deltBox.forEach((cross) => {
  cross.addEventListener("click", (e) => {
    cross.parentElement.remove()
    let parentNote = e.target;
    console.log(parentNote);
  });
})

document.addEventListener("DOMContentLoaded", () => {
  getNotesFromLocalStorage();
});

function getNotesFromLocalStorage() {
  const notesData = getNoteFromLS();
  console.log(notesData);
  try {
    for (let i = 0; i < notesData.length / 2; i++) {
      noteTextNmbr += 2; // noteText update
      noteColorNmbr += 2; // noteColor update
      let newNote = document.createElement("div");
      const noteText = notesData[noteTextNmbr].note;
      newNote.innerHTML = `${noteText} <span class="deltBox">x</span>`;
      newNote.classList.add("box");
      newNote.style.background = notesData[noteColorNmbr].note;
      lowerSec.append(newNote);
    }
  } catch (err) {
    console.log("Error");
  }
}

function removeNotesFromLocalStorage() {}
