"use strict";

/************************
 * DEFINITION DE L'OBJET
 ************************/
let game = new Object();

/*****************************************
 * DECLARATION DE VARIABLES ET CONSTANTES
 *****************************************/
const armorCopper = 1;
const armorIron = 2;
const armorMagic = 3;

const difficultyEasy = 1;
const difficultyMiddle = 2;
const difficultyHard = 3;

const swordWood = 1;
const swordIron = 2;
const swordExcalibur = 3;

/************
 * FONCTIONS
 ************/
function initializeGame();
// pour initialiser le  jeu
/* On part du level 1 dans les tour de jeu*/
game.round1;
game.difficulty = requestInteger(
  "Niveau de difficulté ?\n" + "1. Facile - 2. Normal - 3. Difficile",
    1,
    3
  );

