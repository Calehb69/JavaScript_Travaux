"use-strict";
/**********************************************/

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


/*************
 * FONCTIONS
**************/
//1ere fonction que c'est comme ça qu'on doit faire désormais cependant j'ai pas tout compris...
function refreshSlider(){
  const figcaption = document.querySelector("#slider figcaption");
  const img = document.querySelector("#slider img");
  figcaption.textContent = PHOTOS[0].legend;
  img.src = `images/${PHOTOS[0].src}`; //Chemin de la photo.
  img.alt = PHOTOS[0].legend; //Légende associée à chaque image.
}

/**********************
 * CODE PRINCIPAL
***********************/
//Qu'est-ce à dire que ceci !!??
document.addEventListener("DOMContentLoaded", function() {
refreshSlider();
});