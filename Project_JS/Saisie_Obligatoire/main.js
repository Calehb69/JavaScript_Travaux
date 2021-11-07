"use strict"; // Mode strict du JavaScript

// Déclaration d'une variable.
let number;

/*
 * La boucle doit au moins s'exécuter une fois pour que la comparaison puisse s'effectuer, il faut
 * donc utiliser un DO ... WHILE.
 */
do {
  number = parseFloat(
    window.prompt("Veuillez saisir un nombre :").replace(",", ".")
  );
} while (isNaN(number) == true);

document.querySelector(
  "#content"
).innerHTML = `<p>Merci, vous avez saisi <strong>${number}</strong>.</p>`;