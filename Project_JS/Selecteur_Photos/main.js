"use strict";
/***************************************/
/***************************************
 * VARIABLES ET CONSTANTES
****************************************/
const PHOTOS = document.querySelectorAll("li");  for (let li of PHOTOS){
  li.addEventListener("click", onClickListItem);
}
document.querySelector("#selectAll").addEventListener("click", selectAll);
document.querySelector("#deselectAll").addEventListener("click", deselectAll);

let index = 0;

/**********************
 * FONCTIONS
***********************/
function onClickListItem(){
  console.log("bouton ok !")
  this.classList.toggle("selected");
  if (this.classList.contains("selected")){
    index++;
  } else {index--;
  }
  document.querySelector("#total em").textContent = index;
}

function selectAll(){
  console.log("tout selectionner")
  PHOTOS.forEach((li) => li.classList.add("selected"));

  for(let li of PHOTOS){
    li.classList.add("selected");
  }
}

function deselectAll(){
  PHOTOS.forEach((li) => li.classList.remove("selected")); 
  count();
}

function count(){
  let cpt = document.querySelectorAll("li.selected").length; document.querySelector("#total em").textContent = cpt;
}