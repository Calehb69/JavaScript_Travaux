"use strict";
/*************/

/**
 * VARIABLES
 */
const NUMBERUSER1 =parseFloat(window.prompt("Merci d'entrer le premier nombre"));
console.log(`typeof NUMBERUSER1 : ${typeof NUMBERUSER1}`);
const OPERATOR = window.prompt("Merci d'entrer l'opérateur de calcul");
const NUMBERUSER2 = windows.prompt("Merci de saisir un deuxième chiffre");


const DIV = document.querySelector("#content");
DIV.innerHTML = `<p>Le résultat de l'opération ${numberUser1} + ${numberUser2} est ${resultatCalcul}`;