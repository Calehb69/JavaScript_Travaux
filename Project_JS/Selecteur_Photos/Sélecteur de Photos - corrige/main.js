"use strict"; // Mode strict du JavaScript

// /*************************************************************************************************/
// /* ***************************************** FONCTIONS ***************************************** */
// /*************************************************************************************************/

function refreshNumber() {
  // Recherche de toutes les balises <li> sélectionnées (classe selected).
  let selectedPhotos = document.querySelectorAll(".photo-list li.selected");

  /*
   * document.querySelectorAll() renvoie un tableau avec autant d'objets DOM manipulables en
   * JavaScript que de balises trouvées.
   *
   * selectedPhotos possède donc une propriété length représentant toutes les photos
   * sélectionnées.
   *
   * Mise à jour du nombre total de photos sélectionnées.
   */
  document.querySelector("#total em").textContent = selectedPhotos.length;
}

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
  this.classList.toggle("selected");

  /**
   * On appelle la fonction qui met à jour le compteur
   */
  refreshNumber();
}

function onClickSelectAll() {
  /**
   * On boucle sur toutes les photos pour leur ajouter la classe selected
   */
  for (let photo of photos) {
    photo.classList.add("selected");
  }
  /**
   * On appelle la fonction qui met à jour le compteur
   */
  refreshNumber();
}
function onClickDeselectAll() {
  /**
   * On boucle sur toutes les photos pour leur supprimer la classe selected
   */
  for (let photo of photos) {
    photo.classList.remove("selected");
  }
  /**
   * On appelle la fonction qui met à jour le compteur
   */
  refreshNumber();
}

// /*************************************************************************************************/
// /* ************************************** CODE PRINCIPAL *************************************** */
// /*************************************************************************************************/

// Recherche de toutes les balises <li> (les photos)
const photos = document.querySelectorAll(".photo-list li");

// Installation d'un gestionnaire d'évènement clic sur toutes les balises <li>.
for (let photo of photos) {
  photo.addEventListener("click", onClickListItem);
}

// On cible directement le bouton qui a l'ID selectAll afin qu'au clic ça appelle la fonction qui sélectionne toutes les photos
document
  .querySelector("#selectAll")
  .addEventListener("click", onClickSelectAll);

// On cible directement le bouton qui a l'ID deselectAll afin qu'au clic ça appelle la fonction qui désélectionne toutes les photos
document
  .querySelector("#deselectAll")
  .addEventListener("click", onClickDeselectAll);
