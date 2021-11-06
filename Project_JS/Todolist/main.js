"use strict";

// VARIABLES CONSTANTES

let FORM = document.querySelector("#task-form");

// FONCTIONS

function showForm() {
  FORM.classList.toggle("hide");
}

function displayTasks() {
  // afficher les donnée dans le local storage
  let list = loadDatas();
  console.log(list);
  let html = "<ul>";
  list.forEach((task) => {
    html += `|<li>Nom de tâche - X%</li>`;
    console.log(task.name);
  });
  html += "<ul>";
  document.querySelector("#todo").innerHTML = html;


/**
*
* @param {Event} 
variable qui contient toutes les donnée de l'évenement ( sa valeur est attribué automatiquement grace au gestionnaire d'évenement)
**/
// Cette fonction empeche le rafraichissement quand on submit un formulaire qui est event par défaut
function saveTask(event) {
  event.preventDefault();
  console.log(event);
  //   Récup valeur input niveau accomplissement "lvl"
  //  Valeur dans l'input de la tache "name"
  // valeur du textarea "description"
  // console log des valeurs récupérées dans l'objet
  let obj1 = {
    lvl: document.getElementById("lvl").value,
    // Ou alors : document.querySelector("#name").value;
    nom: document.getElementById("name").value,
    description: document.getElementById("description").value,
  };
  //TABLEAU
  // On donne a list un stockage local plutot que d'en faire un tableau
  let list = loadDatas();
  console.log(list);
  list.push(task);
  // Pour push dans le tableau vu qu'on part d'un localStorage, la liste doit etre "parse" pour etre prise pour un tableau
  list = JSON.parse(list);
  // Faire un if pour créer quand meme un tableau vide pour ne pas avoir d'erreur avec la valeur null
  if (list == null) list = [];
  // On push les infos de l'objet dans la list
  list.push(obj1);
  // Transformer mon tableau pour que ce ne soit plus une donnée complexe (tableau) et que ce soit considéré comme du texte donc méthode JSON parce qu'on a utilisé "JSON.stringify"
  let jsonList = JSON.stringify(list);
  // On crée un stockage local ( base de donnée en local ), on lui donne un nom "todolist" et on injecte jsonList qui contient le tableau changé en chaine de caractère par "stringify"
  localStorage.setItem("todolist", jsonList);
  FORM.reset();
}

function loadDatas(){
  //tableau qui contient toutes les tâches en JSON (qui sont dans le local storage)
  let list =localStorage.getItem("todolist");
  //transforme le JSON en objet complexe manipulable
  list= JSON.parse(list);
  if (list == null) list = [];
  return list;
}

// CODE PRINCIPAL

document.addEventListener("DOMContentLoaded", function () {
  displayTasks();
  document.querySelector("#add-task").addEventListener("click", showForm);
  FORM.addEventListener("submit", saveTask);
});