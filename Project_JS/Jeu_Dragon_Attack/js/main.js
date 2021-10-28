"use strict";

/*****************************************
 * DONNEES DU JEU
 *****************************************/
const game = {};

/*****************************************
 * DECLARATION DE VARIABLES ET CONSTANTES
 *****************************************/
const LEVEL_EASY = 1;
const LEVEL_NORMAL = 2;
const LEVEL_HARD = 3;

const ARMOR_COPPER = 1;
const ARMOR_IRON = 2;
const ARMOR_MAGIC = 3;


const SWORD_WOOD = 1;
const SWORD_STEEL = 2;
const SWORD_EXCALIBUR = 3;

/************
 * FONCTIONS
 ************/
function initializeGame() {
  1;

  // pour initialiser le  jeu
  /* On part du level 1 dans les tour de jeu*/
  //game.round = 1;

  game.difficulty = requestInteger(
    "Niveau de difficulté ?\n" + "1. Facile - 2. Normal - 3. Difficile",
    1,
    3
  );

  /*
   * Détermination des points de vie de départ du joueur et du dragon selon
   * le niveau de difficulté.
   */
  switch (game.difficulty) {
    case LEVEL_EASY:
      game.hpDragon = getRandomInteger(150, 200);
      game.hpKnight = getRandomInteger(200, 250);
      break;

    case LEVEL_NORMAL:
      game.hpDragon = getRandomInteger(200, 250);
      game.hpKnight = getRandomInteger(200, 250);
      break;

    case LEVEL_HARD:
      game.hpDragon = getRandomInteger(200, 250);
      game.hpKnight = getRandomInteger(150, 200);
      break;
  }

  

  /**************************************************************
   * Détermine le choix de l'armure via la fonction requestInteger
   **************************************************************/
  game.armor = requestInteger(
    "Armure ?\n" + "1. Cuivre - 2. Fer - 3. Magique",
    1,
    3
  );
  /**************************************************************
   * Détermine le choix de l'épée via la fonction requestInteger
   **************************************************************/
  game.sword = requestInteger(
    "Epée ?\n" + "1. Bois - 2. Acier - 3. Excalibur",
    1,
    3
  );

  switch (game.armor) {
    // Une armure en cuivre protège normalement.
    case ARMOR_COPPER:
      game.armorRatio = 1;
      break;

    // Une armure en fer diminue un peu les dégâts infligés.
    case ARMOR_IRON:
      game.armorRatio = 1.25;
      break;

    // Une armure magique divise par deux les dégâts infligés.
    case ARMOR_MAGIC:
      game.armorRatio = 2;
      break;
  }

  switch (game.sword) {
    // Une épée en bois nécessite deux fois plus de dégâts que la normale.
    case SWORD_WOOD:
      game.swordRatio = 0.5;
      break;

    // Une épée en acier inflige des dégâts normaux.
    case SWORD_STEEL:
      game.swordRatio = 1;
      break;

    // L'épée légendaire inflige le double de dégâts.
    case SWORD_EXCALIBUR:
      game.swordRatio = 2;
      break;
  }
  console.log(game);
}

function computeDragonDamagePoint() {
  let damagePoint;

  if (game.difficulty == LEVEL_EASY) {
    //le dragon est à son minimun de dégâts influencé par le niveau facile.
    damagePoint = getRandomInteger(10, 20);
  } else {
    damagePoint = getRandomInteger(20, 30);
  }
  //Calcul des dégâts en fonction de l'armure du chevalier choisie par le joueur.
  return Math.round(damagePoint / game.armorRatio);
}

function computeKnightDamagePoint() {
  let damagePoint;

  // Les dégâts infligés par le chevalier sont influencés par la difficulté du jeu.
  switch (game.difficulty) {
    case LEVEL_EASY:
      damagePoint = getRandomInteger(25, 30);
      break;

    case LEVEL_NORMAL:
      damagePoint = getRandomInteger(25, 30);
      break;

    case LEVEL_HARD:
      damagePoint = getRandomInteger(5, 10);
      break;
  }
  // Calcul des dégâts en fonction de l'épée du chevalier.
  return Math.round(damagePoint * game.swordRatio);
}

function gameloop() {
  let damagePoint;
  let vitesseDragon;
  let vitesseKnight;

  // Le jeu tourne tant que le dragon et le joueur sont vivants (logique).
  while (game.hpDragon > 0 && game.hpKnight > 0) {
    DIV.innerHTML += `<h3>----- Tour n°${game.round} -----</h3>`;

  // Déterminer la vitesse du dragon et du joueur pour savoir qui frappe le premier.
  dragonSpeed = getRandomInteger(10, 20);
  knightSpeed = getRandomInteger(10, 20);

  // Cas où le dragon est le plus rapide des deux.
    if (dragonSpeed > knightSpeed) {
      // Le dragon est plus rapide DONC le joueur se prend des dégâts et perd des points de vie.
      damagePoint = computeDragonDamagePoint();
    }
  // Cas inverse où le chevalier est le plus rapide des deux. 
  else (knightSpeed > dragonSpeed) {
    damagePoint = computeKnightDamagePoint();
  }

  }

/*********************************************/
initializeGame();
/*********************************************/

