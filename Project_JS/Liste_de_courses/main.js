"use strict";

/*************************
 * VARIABLE
 *************************/
let shoppingList = new Array (); //let list = []

/*************************
 * FONCTIONS
 ************************/

/**
 * Ajouter un item à la liste de course
 * @param {string} item 
 */
function addItem(item){
  //ajouter un produit à la liste de course
  shoppingList.push(item);
}

function displayShoppingList() {
  //affichage de ce que nous avons dans la liste de course
  console.log("La liste contient " + shoppingList.length + " produit(s).");
  console.log(shoppingList);
}

function removeAllItems() {
// Remplacement de la liste de courses actuelle par une liste vide --> TABLE RASE.
  shoppingList = new Array();
}

/**
 * Supprime un item dans la liste
 * @param {string} item nom du produit à supprimer
 */
function deleteItem(item) {
  let index;
  //Pour déclarer l'index (la totalité de la table et ainsi la rappeler/agir dedans ensuite)

  // Recherche de l'emplacement (l'indice) du produit spécifié dans la liste de courses.
  index = shoppingList.indexOf(item);

  // Est-ce que le produit spécifié n'a pas été trouvé ?
  if (index == -1) {
    // Oui, affichage d'une erreur.
    console.log(
      "ERREUR : le produit " + item + " n'existe pas dans la liste de courses"
    );

    // Fin de la fonction removeItem(), il ne faut pas aller plus loin.
    return;
  }

  // Suppression du produit spécifié dans la liste de courses (le tableau diminue de taille).
  shoppingList.splice(index, 1);
}

/**
 * Affiche le contenu de la liste et son nb d'items
 * @returns ce qui a été demandé plus haut
 */
function display(){
  console.log("==============");
  console.log(`Il y a ${list.lenght} produits dans la liste :`);
  for (let item of list){
    console.log("..." + item);
  }
  console.log("===============");
}
  /*let htmlList = "<ol>";
  for (let item of list) {
    htmlList += `<li>${item}</li>`;
  }
  htmlList += "</ol>";

  return `Il y a ${list.lenght} produits dans la liste: ${htmlList}`;
}*/ //EN ATTENDANT QUE CELA RESERVE ET A CONDITION QUE CELA RESERVE PLUS TARD...

/************************
 * CODE PRINCIPAL
 ************************/
//Liste de courses (lambda) en JS//

//ETAPE 1 - AJOUT D'ITEMS DANS LA LISTE DE COURSES (sa constitution quoi...)//
addItem("Pomme");
addItem("Patate");
addItem("Fraises");
addItem("Poulet");
addItem("Tournevis");
addItem("Artichaut");
displayShoppingList();
/*document.querySelector("#content").innerHTML = `Voici ma liste... ${displayShoppingList()}`*/

//ETAPE 2 - SUPPRESSION D'ITEMS DE LA LISTE SOIT PARCE QU'ILS ONT ETE PRIS, SOIT PARCE QUE PLUS BESOIN//
//supprimer 1 item (de la liste de courses).
let toDelete = prompt("Quel produit voulez-vous supprimer ?");
deleteItem(toDelete);

//affiche (ici de la liste de courses).
function displayShoppingList(){
  console.log("La liste contient " + shoppingList.length + " produit(s).");
  console.log(shoppingList);
}

//supprime tout (dans le cas d'un "table rase" pour repartir sur une liste vierge)
function removeAllItems(){
    shoppingList = new Array();
};

//affiche
//Re-displayShoppingList pour réafficher le contenu (vide) de la liste ? (étrange...)
displayShoppingList();