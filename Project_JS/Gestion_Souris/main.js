"use strict";


/*****************
 *  CONSTANTES
******************/
const button = document.querySelector("#toggle-rectangle");
const RECTANGLE = document.querySelector(".rectangle");

/***************
 * FONCTIONS
****************/
function toggleRectangle() {
  // La méthode .toggle() va ajouter ou supprimer la classe (tel un interrupteur).
  console.log("Ok click")
  document.querySelector(".rectangle").classList.toggle("hide");
}

function onMouseOverRectangle() {
  // La méthode .remove() va ajouter la classe.
  RECTANGLE.classList.add("important");
}

function onDoubleClickRectangle(){
  RECTANGLE.classList.toggle("good");
  RECTANGLE.addEventListener("dbclick", onDoubleClickRectangle);
}

function onMouseOutRectangle() {
  // La méthode .remove() va supprimer la classes.
  RECTANGLE.classList.remove("important");
  RECTANGLE.classList.remove("good");
}

/******************
 * CODE PRINCIPAL
*******************/

/*SUR LE BOUTON 
#toggle-rectangle-> clic -> appelle toggleRectangle*/
document.querySelector("#toggle-rectangle").addEventListener("click", toggleRectangle);

// Installation de deux gestionnaires d'évènements de survol du rectangle à la souris.
RECTANGLE.addEventListener("mouseover", onMouseOverRectangle);
RECTANGLE.addEventListener("mouseout", onMouseOutRectangle);

// Installation d'un gestionnaire d'évènement double clic sur le rectangle.
RECTANGLE.addEventListener("dblclick", onDoubleClickRectangle);