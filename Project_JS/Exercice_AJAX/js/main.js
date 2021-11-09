"use strict";

function ajaxHTML(url) {
  fetch(url) //appel ajax vers l'url
    .then(function (response) {
      //récupère en paramètre la réponse brute du serveur
      return response.text(); //retourne le body de la réponse
    })
    .then(function (datas) {
      //récupère en paramètre le body de réponse
      document.querySelector("#target").innerHTML = datas;
    });

  // OU avec fonctions fléchées

  fetch(url)
    .then((response) => response.text())
    .then((datas) => (document.querySelector("#target").innerHTML = datas));
}

function ajaxHTML(url) {
  fetch(url)
    .then((response) => response.text())
    .then((datas) => (document.querySelector("#target").innerHTML = datas));
}

function ajaxJSON(url) {
  fetch(url)
    .then((response) => response.json())
    .then((datas) => (myString = JSON.stringify(datas)));
  document.querySelector("#target").innerHTML = myString;
}

// console.log(datas)  myString = JSON.stringify(datas)

function onClickExecute() {
  let choice = document.querySelector("input:checked").value;

  switch (choice) {
    case "1":
      ajaxHTML("php/1-get-html-article.php");
      console.log(INPUT);
      break;

    case "2":
      ajaxJSON("php/2-get-json-data.php");
      console.log(INPUT);
      break;

    case "3":
      ajaxHTML("php/3-get-html-movies.php");
      console.log(INPUT);
      break;

    case "4":
      ajaxJSON("php/4-get-json-movies.php");
      console.log(INPUT);
      break;
  }
}

/**
 * CODE PRINCIPAL
 */
document.addEventListener("DOMContentLoaded", function () {
  document.querySelector("#run").addEventListener("click", onClickExecute);
});
