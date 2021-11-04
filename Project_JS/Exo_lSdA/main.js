"use-strict";
/***************************/

/**************
 * VARIABLES
 **************/
const characters = [
  "Aragorn",
  "Boromir",
  "Frodon",
  "Gandalf",
  "Gimli",
  "Legolas",
  "Merry",
  "Pipin",
  "Sam",
];

/**************
 * FONCTIONS
 **************/

function fillSelect() {
  //<option value="0">Contenu/option>
  characters.forEach((character, index) => {
    document.querySelector("#member").insertAdjacentHTML(
      "beforeend",
      `<option value="${index}">
      ${character}</option>`
    );
  });
}

function displayCharacters() {
  characters.forEach((character, index) => {
    document
      .querySelector("#team")
      .insertAdjacentHTML(
        "beforeend",
        `<li><img src="img/${character.toLowerCase()}.jpeg" alt"${character}"></li>`
      );
  });
}

function selectCharacter() {
  choice = parseInt(document.querySelector("#member"))
}
/*****************
 * CODE PRINCIPAL
 *****************/
document.addEventListener("DOMContentLoaded", function () {
  fillSelect();
  displayCharacters();

  document
    .querySelector("input[type='button']")
    .addEventListener("click", selectCharacter);
});
