"use-strict";
/**********************************************/
//Tableau d'objets => contient les infos utiles à la construction du carrousel (propriétées : SRC et légendes).
let button;

const PHOTOS = [
  {
    //Image n°1 -Peluches-
    src: "1.jpg",
    legend: "Frères Pandas",
  },
  {
    //Image n°2 -Comment c'est balèze-
    src: "2.jpg",
    legend: "Yoga Top",
  },
  {
    //Image n°3 -C'est de toute beauté !-
    src: "3.jpg",
    legend: "Lever de Soleil",
  },
  {
    //Image n°4-INSPIRANT !-
    src: "4.jpg",
    legend: "Ciel étoilé",
  },
  {
    //Image n°5-Quand tout à raté, une tasse de thé-
    src: "5.jpg",
    legend: "Tea Time",
  },
  {
    //Image n°6-J'en fais des meilleurs ^^-
    src: "6.jpg",
    legend: "ça va péter le bide !",
  },
];

let id = {};
/*************
 * FONCTIONS
 **************/
function refreshSlider() {
  //cible le figcaption qui est dans le HTML et le stocke dans la constante "figcaption"
  const figcaption = document.querySelector("#slider figcaption");
  //cible l'image qui est dans le HTML et le stocke dans la constante "img"
  const img = document.querySelector("#slider img");
  //injecte la legende (contenue dans l'objet de la photo en cours dans le tableau PHOTOS) dans le contenu textuel du figcaption
  figcaption.textContent = PHOTOS[state.index].legend;
  //injecte le chemin (contenu dans l'objet de la photo en cours dans le tableau PHOTOS) de l'image dans la propriété src de la balise "img"
  img.src = `images/${PHOTOS[state.index].src}`;
  //injecte la legende (contenue dans l'objet de la photo en cours dans le tableau PHOTOS) dans l'attribut de texte alternatif de la photo (balise "img")
  img.alt = PHOTOS[state.index].legend;
}
//Cibler la "ul" afin de récupérer l'ensemble des éléménts contenus à l'intérieur et enlever sa propriété "hide" via le toggle.
function toolbarToggle() {
  //Alternance des classes font-awesome pour que ce soit un coup en bas / un coup à droite (rotation flèche).
  console.log("Ok click");
  document.querySelector(".toolbar ul").classList.toggle("hide");
  const icon = document.querySelector("#toolbar-toggle i");
  icon.classList.toggle("fa-arrow-right");
  icon.classList.toggle("fa-arrow-down");
}

function next() {
  state.index++;
  if (state.index > PHOTOS.length - 1) state.index = 0;
  console.log(state.index);
  refreshSlider();
}

function previous() {
  state.index--;
  if (state.index < 0) state.index = PHOTOS.length - 1;
  console.log(state.index);
  refreshSlider();
}

function random() {
  let nb = getRandomInteger(0, PHOTOS.length - 1);
  while (nb === state.index) {
    nb = getRandomInteger(0, PHOTOS.length - 1);
  }
  state.index = nb;
  console.log(state.index);
  refreshSlider();
}

function diapo() {
  console.log(state.interval);
  const icon = document.querySelector("#slider-toggle i");
  icon.classList.toggle("fa-play");
  icon.classList.toggle("fa-pause");

  if (state.interval == false) {
    state.interval = setInterval(next, 2000);
  } else {
    console.log("stop");
    clearInterval(state.interval);
    state.interval = false;
  }
}
/**********************
 * CODE PRINCIPAL
 ***********************/
//fonction anonyme qui est appelée au déclenchement de l'événement "PAGE HTML BIEN CHARGEE (DOMContentLoaded) sur la page web (document).
//Tout le code principal en lien avec des éléments HTML doit se trouver dans cette fonction.
//Le code ne s'execute que quand la page HTML a fini de charger.
document.addEventListener("DOMContentLoaded", function () {
  state = {};
  state.index = 0;
  state.interval = false;
  refreshSlider();

  document
    .querySelector("#toolbar-toggle")
    .addEventListener("click", toolbarToggle);

  document.querySelector("#slider-next").addEventListener("click", next);

  document
    .querySelector("#slider-previous")
    .addEventListener("click", previous);

  document.querySelector("#slider-random").addEventListener("click", random);

  document.querySelector("#slider-toggle").addEventListener("click", diapo);
});
