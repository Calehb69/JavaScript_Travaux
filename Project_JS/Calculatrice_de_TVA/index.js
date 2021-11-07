"use-strict";
/*****************/

const TAUX_DE_TVA = 20;

let montantHT;
let montantTTC
let montantTVA

/**
 * CODE PRINCIPAL
 */

//Demande à l'utilisateur du montant HT qu'il souhaite saisir
montantHT = parseFloat(window.prompt("Quel est le montant HT ?"));

//Application de la TVA pour connaitre le montant post taxation.
montantTVA = (montantHT * TAUX_DE_TVA) / 100;

//Calcul du montant TTC maintenant.
montantTTC = montantHT + montantTVA;

//Intégration dans le HTML
const DIV = document.querySelector("#content");
DIV.innerHTML = `<p>Pour un montant HT de ${montantHT}€ il y a ${montantTVA}€ de TVA.</p>
  <p>Le montant TTC est donc de ${montantTTC}€.</p>`;