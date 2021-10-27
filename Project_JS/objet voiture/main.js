"use strict";

let voiture = {
  marque: "Renault Twingo 3",
  annee: 2014,
  dateAchat: "Fri-Jul-31-2015",
  passagers: ["Audrey", "Gribouille"],
};

document.querySelector(
  "#content"
).innerHTML += `<p> <strong> Information sur la voiture : </strong> <ul>
<li> Marque : ${voiture.marque}</li>
<li> Anné de construction : ${voiture.annee}</li>
<li> Date d'achat : ${voiture.dateAchat}</li>
<li> Passagers : <ol>
<li>${voiture.passagers[0]} </li>
<li>${voiture.passagers[1]} </li>
</li></ol>
</ul></p>`;
