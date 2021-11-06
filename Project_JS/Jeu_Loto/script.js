"use strict";

/**************
 * VARIABLES
***************/
// tirage == variable globale -> constante.
// compGen == idem que tirage.
// cpt == compteur.
let tirage = new Set(); // contiendra le tirage de l'ordinateur
let saisie = new Set(); // contiendra le choix de l'utilisateur (aurait aussi pu être un set)
let compGen, // numéro complémentaire généré
  compSaisi; // numéro complémentaire saisi par l'utilisateur
let cpt = 0; // nombre de numéros correspondants au tirage
let gain = 0; // prix gagné


/*****************
 * FONCTIONS
 ******************/
/*
 * @param  {number} min
 * @param  {number} max
 */
function getRandomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

//GENERATION DU TIRAGE ALEATOIRE SUR 5 NUMEROS UNIQUES.
function generationTirage() {
  //Tirage aléatoire de 5 chiffres entre 1et 50.
  let nombre;
  while (tirage.size < 5) {
    nombre = getRandomInteger(1, 50);
    if (tirage.has(nombre) == false) {
      //Si le nombre n'est pas dans le tirage alors on l'ajoute.
      tirage.add(nombre);
    }
  }
  compGen = getRandomInteger(1, 10); //Gé,ération du numéro complémentaire qui est compris dans un écart 1 et 10.
}

//CONSTITUTION DU JEU DU JOUEUR -> SON TIRAGE.
function getUserChoice() {
  let inputs = document.querySelectorAll(".nombres");
  for (let input of inputs) {
    /**
     * Vérification que tous les nombres saisies soient bien compris dans un écart 1 et 50 ET que l'input ne soit pas vide ET que le nb ne soit pas présent deux fois dans le tirage.
     * SI une de ces conditions n'est pas respectées scrupuleusement ALORS ajout de la classe "warning" à l'input.
     */
    if (
      input.value.trim().length > 0 &&
      input.value > 0 &&
      input.value <= 50 &&
      saisie.has(parseInt(input.value)) == false
    ) {
      saisie.add(parseInt(input.value));
      input.disabled = true; // on rend l'input "disable"  cad désactivé pour qu'il ne soit plus modifiable
      input.classList.remove("nombres"); // on supprime la classe nombre pour que sur une double sortie, les nb ajoutés au tableau ne soient plus comptabilisés.
      input.classList.remove("warning");
    } else { 
      input.classList.add("warning");
    }
    }

  let inputComp = document.querySelector("#complementaire");
  if (
    inputComp.value.trim().length > 0 &&
    inputComp.value > 0 &&
    inputCompt.value <= 10
  ) {
    compSaisi = inputComp.value;
    inputComp.disabled = true; // on désactive l'input pour q'uil ne soit plus modifiable comme plus haut.
  } else {
    inputComp.classList.add("warning");
  }
//LANCEMENT DU TIRAGE DU LOTO AVEC LES REGLES SAISIES PRECEDEMMENT.
  console.log(saisie.size);
  /**************************************************************************************************************
   * Appel de fonctions suivantes SI ET SEULEMENT SI les 5 numéros sont réunis avec respect des règles définies.
   ***************************************************************************************************************/
  if (saisie.size == 5 && compSaisi != undefined) {
    compare();
    genPrice();
    showResult();
  }
}

//COMPARAISON DES VALEURS POUR VOIR SI VICTOIRE OU NON.
function compare() {
  let html = "";
  for (let nbGen of tirage) {
    /**
     * Vérification pour chaque nombre du tirage de sortie qu'il a bien été selectionné par le joueur.
     * SI oui alors classe win en vert sur la page.
     * SINON simplement le chiffre sans la classe.
     */
    if (saisie.has(nbGen)) {
      cpt++;
      html += `<span class="win">${nbGen}</span>`;
    } else {
      html += `<span>${nbGen}</span>`;
    }
  }
  if (compSaisi == compGen) {
    cpt++;
    gain = 2000;
    html += `<span class= "win complementaire">${compGen}</span>`;
  } else {
    html += `<span class = "complementaire">${compGen}</span>`;
  }
  document.querySelector("#result .generate").innerHTML = html;
}

// CALCUL DU GAIN.
function genPrice() {
  /****************************************************************************************************************************
   * Calcul du montant des gains en fonction du nombre de correspondance sanchant que si le n°complémentaire est tiré il y a déjà 2k€ de gagné.
   ****************************************************************************************************************************/
  switch (cpt) {
    case 2:
      gain += 1000;
      break;
    case 3:
      gain += 5000;
      break;
    case 4:
      gain += 10000;
      break;
    case 5:
      gain += 50000;
      break;
    case 6:
      gain += 100000;
      break;
  }
  /***************************************************
   * SI qqch a été gagné alors on affiche le montant.
   * SINON on affiche que rien n'a été gagné.
   ***************************************************/
  if (gain > 0) {
    document.querySelector("#result h3 span").textContent = gain;
  } else {
    document.querySelector("#result h3").textContent =
      "Vous n'avez rien gagné cette fois-ci, mais vous pouvez retenter votre chance une fois prochaine !";
  }
}

//AFFICHAGE DU RESULTAT
function showResult() {
  document.querySelector("#choix").classList.add("hide");

  document.querySelector("#result .saisi").innerHTML =
    "Pour rappel, voici votre grille :";
  for (let choix of saisie) {
    document.querySelector("#result .saisi").innerHTML += choix + ", ";
  }
  document.querySelector(
    "#result .saisi"
  ).innerHTML += `et le numéro complémentaire <b>${compSaisi}</b>`;

  document.querySelector("#result").classList.remove("hide");
}

document.addEventListener("DOMContentLoaded", function () {
  generationTirage();
  console.log(tirage); //pour le debug, pour ne pas avoir à faire plein de tests pour choisir les bons nombres

  //gestionnaire d'événement sur le bouton afin de lancer tout le process
  document.querySelector("button").addEventListener("click", getUserChoice);
});