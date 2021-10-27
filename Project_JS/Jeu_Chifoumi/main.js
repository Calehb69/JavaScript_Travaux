"use strict";

/**************
 * VARIABLES
 *************/
let user;
do { 
  user = prompt (
  "Vous jouez ? Pierre, feuille ou ciseaux ?"
  ).toLowerCase();
} while (user != "pierre" && user != "feuille" && user !="ciseaux");

//Choix ordi
let ordi = Math.random();
if (ordi < 1 / 3) {
  ordi ="pierre";
} else if (ordi >= 1 / 3 && ordi < 2 / 3) {
  ordi = "feuille";
} else {
  ordi = "ciseaux";
}
console.log(user, ordi);

let phrase;

if (user === ordi) {
  //gestion de l'égalité
  phrase = `Vous avez tous les 2 joué ${user}`
} else {
  //comparaison pour savoir qui gagne
  switch (user) {
    case "pierre":
      if (ordi == "ciseaux") {
        phrase = ("La pierre détruit les ciseaux : vous gagnez !");
      } else {
        phrase = ("la feuille recouvre la pierre : vous perdez !");
      }
      break;
    case "ciseaux":
      if (ordi == "feuille") {
        phrase = ("les ciseaux coupent la feuille : vous gagnez !");
      } else {
        phrase = ("la pierre détruit les ciseaux : vous perdez !");
      }
      break;
    case "feuille":
      if (ordi == "pierre") {
        phrase = ("la feuille recouvre la pierre : vous gagnez !");
      } else {
        phrase = ("Les ciseaux coupent la feuille : vous perdez !");
      }
      break;
  }
}
document.querySelector("#content").innerHTML= `
<ul>
  <li>
  <img src="img/${user}.png" alt="${user}">
  <h3>Vous</h3>
  </li>
  <li>
  <img src="img/${ordi}.png" alt="${ordi}">
  <h3>L'ordinateur</h3>
  </li>
</ul>
  <p>${phrase}</p>
  `;