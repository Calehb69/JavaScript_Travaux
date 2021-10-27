"use strict";

//produit (objet) -> nom, prixUnitaire, quantité

//panier (tableau) -> liste des produits

// let produit {} -> Pour déclarer les différents produits...

const produits = [{
  nom: "Tomate",
  prixUnitaire : 2.49,
  quantite : 2,
},
{
  nom: "Patate",
  prixUnitaire: 3.99,
  quantite: 3,
},
{
  nom: "Poulet",
  prixUnitaire: 7.95,
  quantite: 1,
},
{
    nom: "Kiwi",
  prixUnitaire: 3.56,
  quantite: 6,
}
];
console.log(produits);
// console.log pour demander l'affiche du tableau (la liste) -> produit dans le cas présent.
OU 
console.log(produits[1]);
// console.log(produits[]) pour appeller toute la table (tableau, liste) et afficher un index en particulier (un élément du tableau). SI on veut voir plusieurs éléments de la table alors séparateur virgule dans les crochets. SI on veut l'entièreté du tableau ALORS simple console.log() comme au dessus.
OU   
console.log(produits[1].prixUnitaire * prdoutis[1].quantite);
// Pour afficher plusieurs données du tableau et faire des calculs, des liens... dans l'exemple ci-dessus le prix globale de X produits[1] en multipliant son prix unitaire par sa quantité.

let html = `<table>
<thead>
    <td>Nom du produit</td>
    <td>prixUnitaire du produit</td>
    <td>quantite du produit</td>
  </thead>
  <tbody>`;
    for (let produit of produits){
      html += `<tr>
      <td>${produit.nom}</td>
      <td>${produit.prixUnitaire}€</td>
      <td>${produit.quantite}</td>
      <td>${produit.prixUnitaire * produit.quantite}</td>
      </tr>`;
    }

    produits.forEach(function(produit, index) {
      html + `<tr>
      <td>${produit.prixUnitaire}€</td>
      <td>${produit.quantite}</td>
      <td>${produit.prixUnitaire * produit.quantite}€</td>
      </tr>`;
    })

let total = 0 
// pour déclarer une variable "totale" initiée évidemment à 0 au départ.
for (let produit of produits){
  html += `<tr>...
  </tr>`;
}
html += `</tbody>
</table>
<h3>Prix total du panier : 22€</h3>`;
console.log(html);

// tr = la ligne.
// td = la cellule (l'entrée, le contenu...).

document.querySelector("#content").innerHTML = html;
//pour injecter les données issues du JS dans du HTML, le garnir.