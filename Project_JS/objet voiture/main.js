"use strict";

let voiture = {
  marque : ("Renaut Twingo 3"),
  anneeFabrication : (2014),
  dateAchat : ("Fri-Jul-31-2015"),
  Passager : ["Audrey", "Gribouille"],
};

document.querySelector(
  "#content"
).innerHTML += `<p> <strong> Information sur la voiture : </strong> <ul>
<li> Marque : ${voiture.marque}</li>
<li> Année de construction : ${voiture.anneeFabrication}</li>
<li> Date d'achat : ${voiture.dateAchat}</li>
<li> Passagers : <ol>
<li>${voiture.Passager[0]}</li>
<li>${voiture.Passager[1]}</li>
</li></ol>
</ul></p>
`;