"use strict";

/***************
 * FONCTION
****************/
function toggleRectangle() {
  console.log("Ok click")
  document.querySelector(".rectangle").classList.toggle("hide");
}

function onMouseOverRectangle() {
  const rectangle = document.querySelector("#rectangle");
  rectangle.classList.remove("rectangle.important");
}
/******************
 * CODE PRINCIPAL
*******************/
/*SUR LE BOUTON 
#toggle-rectangle-> clic -> appelle toggleRectangle*/

document.querySelector("#toggle-rectangle").addEventListener("click", toggleRectangle);

document.querySelector("#rectangle").addEventListener("mouseOut", onMouseOverRectangle);