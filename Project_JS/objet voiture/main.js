"use strict";

let marque=["Renault Twingo 3"];
let anneeConstruction=[2014];
let dateAchat=["Vendredi 31 Juillet 2015"];
let passagers=["Audrey", "Gribouille", "Simon", "Dobby"]


document.querySelector("#content").innerHTML = `<h2>Information sur la voiture :
  <ul><li>${marque}</li> <li>${anneeConstruction}</li> <li>${dateAchat}</li> <li>${passagers}</li></ul></h2>`;