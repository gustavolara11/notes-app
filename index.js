// document.addEventListener("DOMContentLoaded", function () {
const screen = document.getElementById("screen");
if (!screen) {
  console.error("Element with ID 'screen' not found");
}

const addNewNote = () => {
  const newDiv = document.createElement("div");
  newDiv.classList.add("card");

  const newT = document.createElement("div");
  newT.classList.add("title-card");
  const newInputTitle = document.createElement("input");
  newInputTitle.classList.add("input-title");
  newT.appendChild(newInputTitle);

  const newB = document.createElement("button");
  newB.classList.add("x");
  const newBText = document.createTextNode("x");
  newB.appendChild(newBText);
  newB.addEventListener("click", () => delNote(newDiv));
  newT.appendChild(newB);

  const newC = document.createElement("div");
  newC.classList.add("card-content");
  const newInputCard = document.createElement("textarea");
  newInputCard.classList.add("textarea-card");
  newC.appendChild(newInputCard);

  newDiv.appendChild(newT);
  newDiv.appendChild(newC);
  screen.appendChild(newDiv);
  console.log(screen);
};

const delNote = (note) => {
  note.parentElement.removeChild(note);
};
