"use strict";
/*************
* CONSTANTE
*************/
const TAUX_TVA = 20;

/*************
* VARIABLES
*************/
let montantHT;
let montantTTC;
let montantTVA;
let remise;
let nouveauPrix

/*************
* CIBLAGE DE LA BALISE
*************/
const DIV = document.querySelector("#content");

/*************
* CODE PRINCIPAL
**************/
//Demande de montantHT à user;
do{ 
  montantHT = parseFloat (prompt("Veuillez saisir un nombre HT : "));}
  while (isNaN(montantHT))

  remise = prompt("Bénéficiez-vous d''une remise marchande ?")
  if(remise == "oui" || remise == "yes") {
    do
    remise = parseInt("Quel est le montant de votre remise ?")
    
    = montantHT * (remise / 100);}
    else {
      document.querySelector("#content).innerHTML += `<p>Aucune remise n'a été appliquée.</p>`;
    }

//Calcul montant TVA
montantTVA = nouveauPrix * (TAUX_TVA / 100);
console.log(montantTVA);

//Calcul montant TTC
montantTTC = nouveauPrix + montantTVA
console.log(montantTTC);

// document.querySelector("selecteur CSS") // pour cibler une balise HTML 
/*document.querySelector("#content").innerHTML = "<p>Pour un montant HT de 100€, il y a 20€ de TVA.</p><p>Le montant TTC est donc de 120€</p>";*/

document.querySelector("#content").innerHTML = `<p>Pour un montant HT de ${montantHT}€, il y a ${montantTVA}€ de TVA.</p><p>Le montant TTC est donc de ${montantTTC}€</p>
<p>Une remise de ${remise}% a été appliquée sur le montant HT.</p>`;