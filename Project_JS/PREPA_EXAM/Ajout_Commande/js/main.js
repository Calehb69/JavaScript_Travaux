"use strict";

// VARIBALES
let FORM = document.querySelector("#task-form");
let COURSES = document.querySelector("#courses");
let QUANTITE = document.querySelector("#task-form input[type = 'number']");
let PRODUIT = document.querySelector("#task-form input[type = 'text']");
let SUBMIT = document.querySelector("#task-form input[type = 'submit']");

// FONCTIONS

function loadDatas() {
  //tableau qui contient toutes les tâches en JSON (qui sont dans le local storage)
  let list = localStorage.getItem("courses");
  //transforme le JSON en objet complexe manipulable
  list = JSON.parse(list);
  if (list == null) list = [];
  return list;
}

function saveTask(event) {
  //annule l'action par défaut de l'événement (le refresh dû au submit)
  event.preventDefault();
  //objet qui contient toutes les infos de la tâche
  let task = new Object();
  //Récupérer la valeur dans la select niveau accomplissement
  task.quantite = QUANTITE.value;
  task.produit = PRODUIT.value;
  console.log(task);
  // TABLEAU
  let list = loadDatas();
  //ajoute l'objet task au tableau
  list.push(task);
  //transforme la liste de tâche en texte JSON
  let jsonList = JSON.stringify(list);
  //injecter dans le localstorage notre liste au format JSON
  localStorage.setItem("courses", jsonList);
  displayList();
}

function displayList() {
  let list = loadDatas();
  COURSES.innerHTML = `<ul>`;
  list.forEach((task, index) => {
    COURSES.innerHTML += `<li data-index = ${index}>${task.produit} x ${task.quantite}</li>`;
  });
  COURSES.innerHTML += `</ul>`;
}

/*function isDoublon(produit){
  list.forEach((ligne, index) =>{
    if (ligne.nom == produit.nom){
      list[index].quantite = parseInt(lignr.quantite) + parseInt(produit.quantite);
      doublon = true;
    }
  })
}
}*/

function deleteAll(){
  localStorage.clear();
}

// CODE PRINCIPAL

document.addEventListener("DOMContentLoaded", function () {
  SUBMIT.addEventListener("click", saveTask);
});

document.querySelector("#task-form #delete")
.addEventListener("click", deleteAll);