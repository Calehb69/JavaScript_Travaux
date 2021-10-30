"use strict";


/*****************
 *  CONSTANTES
******************/
const button = document.querySelector("#toggle-rectangle");
const rectangle = document.querySelector(".rectangle");

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
  rectangle.classList.add("important");
}

function onDoubleClickRectangle(){
  rectangle.classList.toggle("good");
  rectangle.addEventListener("dbclick", onDoubleClickRectangle);
}

function onMouseOutRectangle() {
  // La méthode .remove() va supprimer la classes.
    rectangle.classList.remove("important");
  rectangle.classList.remove("good");
}

/******************
 * CODE PRINCIPAL
*******************/

/*SUR LE BOUTON 
#toggle-rectangle-> clic -> appelle toggleRectangle*/
document.querySelector("#toggle-rectangle").addEventListener("click", toggleRectangle);

// Installation de deux gestionnaires d'évènements de survol du rectangle à la souris.
rectangle.addEventListener("mouseover", onMouseOverRectangle);
rectangle.addEventListener("mouseout", onMouseOutRectangle);

// Installation d'un gestionnaire d'évènement double clic sur le rectangle.
rectangle.addEventListener("dblclick", onDoubleClickRectangle);