"use strict";

/************************
 * FONCTIONS UTILITAIRES
 ************************/
function getRandomInteger(min, max) {
  // Renvoie un nombre entier aléatoire compris entre les arguments min et max inclus.
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function requestInteger(message, min, max){
  let integer;

/**
 * Construire une boucle qui s'execute tant que l'entier n'est pas un nb (fonction isNaN()) vu en début de semaine et ne rentre pas dans l'argumentaire min/max.
 */
do {
  //user entre un nb entier.
  integer = parseInt(window.prompt(message));
} 
while (isNaN(integer) == true || integer < min || integer > max);

return integer;
}
