"use strict";

export function save(list, item) {
  /*
   * Le DOM storage ne permet pas de stocker des données complexes (objet, tableau...).
   * On doit donc d'aborder sérialiser nos données dans un format simple, le JSON.
   *
   * On obtient une chaîne représentant l'objet complexe, et c'est cette chaîne que
   * l'on stocke dans le DOM storage.
   *
   * Donnée complexe -> JSON stringify (= sérialisation) -> Donnée simple (chaîne)
   */
  let jsonData = JSON.stringify(list);

  window.localStorage.setItem(item, jsonData);
}

/**
 *
 * @param {string} item Nom de la clé dans le localStorage
 * @returns array
 */
export function load(item) {
  let list;

  // Chargement du carnet d'adresses depuis le DOM storage.
  list = JSON.parse(localStorage.getItem(item));

  // Est-ce qu'il n'y avait aucune donnée dans le DOM storage ?
  if (list == null) {
    // Oui, création d'un carnet d'adresses vide.
    list = new Array();
  }

  return list;
}


let listeRepas = [
  "lasagne bolognaise",
  "crosiflette",
  "curry d'agneau",
  "pot au feu",
  "tagliatelle carbonara",
  "steack frites",
  "raclette",
  "queunelles sauce roquefort",
  "blanquette de veau",
  "hachi parmentier",
];

"use strict";
/****************/
/****************
 * THOMAS VIAL - DWWM_PE2_VILL
 ****************/