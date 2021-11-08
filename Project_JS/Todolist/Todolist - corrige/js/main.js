"use strict";

import * as storage from "./storage.js";

const STORAGE = "todolist";

/************************************************************************************/
/************************************* FONCTIONS ************************************/
/************************************************************************************/

/**
 *
 * @param {string} percent Pourcentage de réalisation de la tâche
 * @returns string - icône fontawesome
 */
function icon(percent) {
  switch (percent) {
    case "100":
      return '<i class="fas fa-check"></i>';
    default:
      return "";
  }
}

/**
 * Recharge la liste des tâches ajoutées dans le localstorage qui est affichée dans la page
 */
function refreshTodoList() {
  let todoList = storage.load(STORAGE);

  // Suppression de l'ensemble du carnet d'adresses HTML et ajout d'une UL vide

  let list = "<ul>";
  // Affichage HTML du carnet d'adresses, un contact à la fois.
  for (let index = 0; index < todoList.length; index++) {
    list += `<li><a class="task ${
      todoList[index].lvl == 100 ? "barre" : ""
    }" data-index="${index}">${todoList[index].label} -  ${
      todoList[index].lvl
    }%</a><i class="fa fa-trash remove" data-index="${index}"></i></li>`;
  }
  list += "</ul>";
  document.querySelector("#todo").innerHTML = list;
}

/**
 * Ajoute la tâche si le formulaire est en mode ajout, ou édite une tpache existante s'il est en mode edit
 */
function addTask(e) {
  e.preventDefault();
  let list;
  let task;
  let index;

  // Création d'un objet task avec les données du formulaire.
  task = {
    lvl: document.querySelector("select[name=lvl]").value,
    label: document.querySelector("input[name=name]").value,
    desc: document.querySelector("textarea[name=description]").value,
  };

  list = storage.load(STORAGE);

  if (document.querySelector("#task-form").dataset.mode == "add") {
    // Mode "ajout", il faut ajouter la task au carnet.

    list.push(task);
  } else {
    // Mode "édition", il faut modifier une task existante.

    index = document.querySelector("#task-details a").dataset.index;

    list[index] = task;
  }

  storage.save(list, STORAGE);

  // Mise à jour de l'affichage.
  document.querySelector("#task-form").classList.add("hide");
  document.querySelector("#task-details").classList.add("hide");
  refreshTodoList();
}

/**
 * Pré-remplissage du formulaire avec les données de la tâche qu'on souhaite éditer
 */
function editTask() {
  let list = storage.load(STORAGE);
  /*
   * this = objet DOM qui a déclenché l'évènement,
   * il s'agit donc de l'hyperlien généré dans showDetails()
   * on récupère la valeur se trouvant dans son data-attribut index
   */
  let index = this.dataset.index;

  let task = list[index];

  document.querySelector("select[name=lvl]").value = task.lvl;
  document.querySelector("input[name=name]").value = task.label;
  document.querySelector("textarea[name=description]").value = task.desc;

  //on cache le détail de la tâche
  document.querySelector("#task-details").classList.add("hide");

  // Basculement du formulaire en mode édition puis affichage.
  document.querySelector("#task-form").dataset.mode = "edit";
  document.querySelector("#task-form").classList.remove("hide");
}

/**
 *
 * @param {*} element élément HTML contenant le data-index
 */
function showDetails(element) {
  let todolist;
  let task;
  let index;
  /**
   * element contient la balise qui a déchenché l'événement
   * cette balise contient un data-attribut contenant l'index dans le tableau du contact
   * on accède aux data attributs grâce à la propriété datatset
   */
  index = element.dataset.index;

  // Chargement du carnet d'adresses puis récupération du contact sur lequel on a cliqué.
  todolist = storage.load(STORAGE);
  task = todolist[index];
  //console.log(task);

  /*
   * Affichage des données de la tâche, enregistrement du numéro (index) du de la tâche dans
   * l'attribut HTML data-index de l'hyperlien "Editer cette tâche"
   */
  document.querySelector("#task-details h3").innerHTML =
    icon(task.lvl) + " " + task.label + " - " + task.lvl + "%";
  document.querySelector("#task-details p").textContent = task.desc;
  document.querySelector("#task-details a").dataset.index = index;

  // Mise à jour de l'affichage.
  document.querySelector("#task-details").classList.remove("hide");
}

/**
 *
 * @param {*} element élément HTML contenant le data-index
 */
function removeTask(element) {
  let todolist;
  let index;
  /**
   * element contient la balise qui a déchenché l'événement
   * cette balise contient un data-attribut contenant l'index dans le tableau du contact
   * on accède aux data attributs grâce à la propriété datatset
   */
  index = element.dataset.index;
  console.log(index);

  // Chargement du carnet d'adresses puis récupération du contact sur lequel on a cliqué.
  todolist = storage.load(STORAGE);

  //on supprime 1 ligne dans le tableau à partir de l'index de la tâche
  todolist.splice(index, 1);

  //on met à jour la liste
  storage.save(todolist, STORAGE);
  refreshTodoList();
}

/**
 * Affiche le formulaire en mode ajout
 */
function onClickOpenForm() {
  // Basculement du formulaire en mode ajout puis affichage.
  document.querySelector("#task-form").dataset.mode = "add";
  document.querySelector("#task-form").reset();
  document.querySelector("#task-form").classList.remove("hide");
}

/************************************************************************************/
/********************************** CODE PRINCIPAL **********************************/
/************************************************************************************/

/*
 * Installation d'un gestionnaire d'évènement déclenché quand l'arbre DOM sera
 * totalement construit par le navigateur.
 *
 */
document.addEventListener("DOMContentLoaded", function () {
  // Installation des gestionnaires d'évènements.

  //clic sur le bouton pour faire apparaitre le formulaire en mode ajout
  document
    .querySelector("#add-task")
    .addEventListener("click", onClickOpenForm);
  //ajout ou édition d'une tâche
  document.querySelector("#task-form").addEventListener("submit", addTask);
  //modifier une tâche d'une tâche
  document.querySelector("#task-details a").addEventListener("click", editTask);
  //suppression de toutes les tâches
  document.querySelector("#clear-todo").addEventListener("click", () => {
    storage.save([], STORAGE);
    refreshTodoList();
  });

  /*
   * Installation d'un gestionnaire d'évènement "dans le futur", quand il y aura
   * des hyperliens ajoutés dans l'arbre DOM à partir du <ul id="address-book">.
   */
  document.querySelector("#todo").addEventListener("click", function (event) {
    console.log(event.target, this);
    if (event.target.classList.contains("task")) {
      showDetails(event.target);
    } else if (event.target.classList.contains("remove")) {
      removeTask(event.target);
    }
  });
  refreshTodoList();
});
