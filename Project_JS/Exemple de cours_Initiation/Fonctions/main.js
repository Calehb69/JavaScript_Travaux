"use strict";

//definition de la fonctio,
function direBonjourCopain (prenom) {
  alert("Bonjour " + prenom);
}

function donnePrenom(msg){
  let userPrenom = prompt("Votre prénom ?");
  return userPrenom;
}

//appel de la fonction
/*direBonjourCopain("Toto");
direBonjourCopain("Tata")*/

for(let i = 1; i<=3; i++)
{
  let user = donnePrenom
  ("C'est quoi ton nom, user N°" + i);
  direBonjourCopain(user)
}
//ici pour répéter une fonction donnée un certain nombre de fois --> Dans le cas présent, dire bonjour à 3 utilisateurs différents et pas un de +.

//ici et cas général, la valeur de la fonction (ici Bonjour...) est renseignée au moment de l'appel de la fonction (=son execution).

/*let user = prompt("C'est quoi ton petit nom propre ?");*/

/*let user1 = donnePrenom("C'est quoi ton petit nom ?");
direBonjourCopain(user1);
let user2 = donnePrenom("Vas y file ton appellation !");
direBonjourCopain(user2);
let user3 = donnePrenom("Your name ?");
direBonjourCopain(user3);

donnePrenom();
direBonjourCopain(userPrenom);*/