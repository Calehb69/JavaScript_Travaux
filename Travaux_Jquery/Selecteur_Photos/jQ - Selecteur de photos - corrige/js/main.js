"use strict"; // Mode strict du JavaScript

/*************************************************************************************************/
/* ****************************************** DONNEES ****************************************** */
/*************************************************************************************************/

let index;
let photos;
let total;

/*************************************************************************************************/
/* ***************************************** FONCTIONS ***************************************** */
/*************************************************************************************************/

function onClickListItem() {
  /*
   * Dans un gestionnaire d'évènements (et uniquement dans ce cas-là) la variable this représente
   * l'objet DOM qui a déclenché l'évènement.
   *
   * Il s'agit donc de la balise <li> sur laquelle on a cliqué.
   *
   *
   * On active ou on désactive la classe selected du <li> sur lequel on a cliqué.
   */
  $(this).toggleClass("selected");

  /*
   * document.querySelectorAll() renvoie un tableau avec autant d'objets DOM manipulables en
   * JavaScript que de balises trouvées.
   *
   * selectedPhotos possède donc une propriété length représentant toutes les photos
   * sélectionnées.
   *
   * Mise à jour du nombre total de photos sélectionnées.
   */

  total.text($(".photo-list li.selected").length);
}

function selectAll() {
  photos.addClass("selected");

  total.text(photos.length);
}

function deselectAll() {
  photos.removeClass("selected");

  total.text(0);
}

/*************************************************************************************************/
/* ************************************** CODE PRINCIPAL *************************************** */
/*************************************************************************************************/

// Recherche de toutes les balises <li> (les photos) et de la balise <em> (nombre total).
photos = $(".photo-list li");
total = $("#total em");
$("#selectAll").on("click", selectAll);
$("#deselectAll").on("click", deselectAll);

// Installation d'un gestionnaire d'évènement clic sur toutes les balises <li>.

photos.on("click", onClickListItem);
