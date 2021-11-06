"use strict";
/****************************/
/************
 * CONSTANTES ET VARIABLES
**************/
const CONTENT = document.querySelector("#content");
const POPUP = document.querySelector("#popup");

/************
 * FONCTIONS
**************/
/*function generateH1(){
    CONTENT.insertAdjacentHTML("beforeend","<h1 contenteditable='true'>Ecrire le titre 1</h1>");
}
/**
 * Préciser l'emplacement adjacent ! 
 * beforebegin
 * afterbegin
 * beforeend
 * afterend
 */
/* function generateH2(){
    CONTENT.insertAdjacentHTML("beforeend","<h2 contenteditable='true'>Ecrire le sous titre</h2>");
}

function generateH3(){
    CONTENT.insertAdjacentHTML("beforeend","<h3 contenteditable='true'>Ecrire l'inter-titre 3</h3>");
}

function generateP(){
    CONTENT.insertAdjacentHTML("beforeend","<p contenteditable='true'>Ecrire le paragraphe de texte</p");
}

function generateHr(){
    CONTENT.insertAdjacentHTML("beforeend","<hr>");
}
/********************
 * CODE PRINCIPAL
********************
*/
/*document.querySelector("#h1").addEventListener("click", generateH1);

document.querySelector("#h2").addEventListener("click", generateH2);

document.querySelector("#h3").addEventListener("click", generateH3);

document.querySelector("#p").addEventListener("click", generateP);

document.querySelector("#hr").addEventListener("click", generateHr);*/
function generateHTML(){
    const ID = this.id;
    if (ID == "hr"){
        CONTENT.insertAdjacentHTML("beforeend", `<hr>`);
    } else {
        CONTENT.insertAdjacentHTML("beforeend",`<${ID} contenteditable='true'>${this.dataset.placeholder}</${ID}>`);
    }
}

function exportHTML(){
    const HTML = CONTENT.innerHTML.replace(/contenteditable="true"/g, "");
    const DIV = document.createElement("div");
    DIV.textContent = HTML;
    POPUP.innerHTML = "";
    POPUP.appendChild(DIV);
    POPUP.classList.remove("hide");
}

function hidePopup(){
    POPUP;classList.add("hide");
}
/*****************
 * CODE PRINCIPAL
*****************/
//Cibler tous les boutons qui permettent de générer une balise et on leur installe un gestionnaire d'événement.
const BUTTONS = document.querySelectorAll("button:not(#export)");
BUTTONS.forEach((button) => button.addEventListener("click", generateHTML));


//Cibler le bouton d'export et installer un gestionnaire d'événement.
document.querySelector("#export").addEventListener("click",exportHTML);

//Cacher la popup au double clic
POPUP.addEventListener("dbclick", hidePopup);