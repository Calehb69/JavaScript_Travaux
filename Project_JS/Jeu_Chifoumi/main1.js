"use strict";

/**************
 * VARIABLES
 *************/
let player;
let computer;
let random;

/***********
 * FONCTION CHOIX UTILISATEUR
 ***********/
player = window.prompt('Choisissez pierre feuille ou ciseaux');
console.log(player);
/************
 * FONCTION EVITER LA CASSE
 ************/
player = player.toLowerCase();
/************
 * RANDOM MATHS
 ************/
random = Math.random();
console.log(random);
/*************
 * CHOIX DE L'ORDINATEUR
 *************/
if(random < 1/3)
{
  computeur = 'pierre';
  console.log('pierre')
}
else if(random < 2/3)
{
  computer = 'feuille';
  console.log('feuille')
}
else
{
computer = 'ciseaux';
console.log('ciseaux')
}
if (user === ordi) {
  //gestion de l'égalité
  console.log("égalité");
} else { 
    // ... vérif. des différents cas possibles... 
    // un switch sur la variable computer
    switch(computer) 
      {case "pierre": console.log("il a joué pierre");
    document.querySelector(
      "#content"
    ).innerHTML = `<img src="img/pierre.png" alt="pierre"> <h3>Computer</h3>`;
    break;
      
      
      
      /*if(player == "feuille"){document.write("gagné");} 
      // sinon c'est qu'il a choisi ciseaux 
      else{document.write("perdu");} break; 
      // cas choix feuille 
      case "feuille": 
      // si le joueur a choisi pierre 
      if (player == "pierre"){document.write("perdu");} 
      // sinon c'est qu'il a choisi ciseaux
      else {document.write("gagné");}break; 
      // cas du choix ciseaux */


      /*case "ciseaux": 
      // si le joueur a choisi pierre
      if (player == "pierre"){document.write("gagné");} 
       // sinon c'est qu'il a choisi feuille 
      else {document.write("perdu");}break;}}*/
