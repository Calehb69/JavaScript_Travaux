"use strict"; // Mode strict du JavaScript

// Affectation d'un objet vide et définition de la variable.
const myCar = new Object(); // syntaxe longue.

// La syntaxe raccourcie est : myCar = {};

// Création de propriétés dans l'objet.
myCar.brand = "Renault Twingo 3";
myCar.buyDate = new Date("2015-07-31");
myCar.passengers = new Array();
myCar.passengers[0] = "Audrey";
myCar.passengers[1] = "Gribouille";
myCar.year = 2014;

/*
 * Les lignes de code ci-dessus peuvent également être écrites comme ceci :
 *
 * myCar =
 * {
 *     brand      : 'Renault Twingo 3',
 *     buyDate    : new Date('2015-07-31'),
 *     passengers : [ 'Audrey', 'Gribouille' ],
 *     year       : 2014
 * };
 */

// Injection du contenu HTML dans la balise #content
document.querySelector(
  "#content"
).innerHTML = `<strong>Informations sur la voiture :</strong>
  <ul>
    <li>Marque : ${myCar.brand}</li>
    <li>Année de fabrication : ${myCar.year}</li>
    <li>Date de l'achat : ${myCar.buyDate.toDateString()}</li>
    <li>Passagers :
            <ol>
                <li>${myCar.passengers[0]}</li>
                <li>${myCar.passengers[1]}</li>
            </ol>
        </li>
  </ul>`;
