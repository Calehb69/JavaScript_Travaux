"use strict"; // Mode strict du JavaScript

// Déclaration de quatre variables.
let number1,
  number2,
  operation,
  result,
  error = false;
const DIV = document.querySelector("#content");

// Récupération des deux nombres et de l'opération mathématique à effectuer.
number1 = parseFloat(window.prompt("Saisissez un premier nombre :"));
operation = window.prompt(
  "Quelle opération mathématique souhaitez-vous effectuer ?"
);
number2 = parseFloat(window.prompt("Saisissez un deuxième nombre :"));

// Exécution de la calculatrice.
switch (operation) {
  case "+":
  case "addition":
    result = number1 + number2;
    break;

  case "-":
  case "soustraction":
    result = number1 - number2;
    break;

  case "*":
  case "multiplication":
    result = number1 * number2;
    break;

  case "/":
  case "division":
    {
      // On peut utiliser des accolades pour écrire le code à l'intérieur d'un case.

      if (number2 == 0) {
        DIV.innerHTML =
          "<p>Erreur : vous ne pouvez pas diviser un nombre par 0 !</p>";
        //boolean à true qui permettra de gérer l'affichage final
        error = true;
        // Le fait de placer un break ici permet de sortir IMMEDIATEMENT du switch.
        break;
      }

      result = number1 / number2;
    }
    break;

  case "^":
  case "puissance":
    result = number1 ** number2;
    break;

  default:
    DIV.innerHTML =
      "<p>Erreur : vous avez indiqué une opération inconnue !</p>";
    //boolean à true qui permettra de gérer l'affichage final
    error = true;
    break;
}

/*
 * Si l'utilisateur a saisi autre chose qu'un nombre dans les variables number1 ou number2 alors
 * les fonctions parseFloat() renvoient la valeur spéciale NaN.
 *
 * Du coup la variable result vaudra forcément NaN également !
 */
if (isNaN(result) == true && !error) {
  DIV.innerHTML += "<p>Vous n'avez pas saisi deux nombres !</p>";

  // La variable result est maintenant indéfinie.
  result = undefined;
}

/*
 * Il faut afficher le résultat de l'opération UNIQUEMENT s'il n'y a PAS eu d'erreur !
 *
 * Les erreurs possibles sont :
 * 1. L'utilisateur a voulu effectuer une division par zéro (ligne 38).
 * 2. L'opération demandée est inconnue (ligne 56).
 * 3. Au moins l'un des deux nombres saisis n'est pas vraiment un nombre (ligne 65)
 *
 * Lorsqu'une erreur se produit la variable result vaut undefined, il faut donc tester cette valeur
 * pour détecter qu'une erreur s'est produite.
 */
if (result != undefined && !error) {
  DIV.innerHTML += `<p>Le résultat de l'opération ${number1} ${operation} ${number2} est <strong>${result}</strong>.</p>`;
}
