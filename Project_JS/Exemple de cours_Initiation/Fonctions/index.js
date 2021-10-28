//EXEMPLE DE FONCTION
function faireCarbo(lardon, creme, oeuf, pates, champignon = false){
  faireRevenirLardon(lardon);
  ajouterCreme(creme);
  if(champignon){
    ajouterChampignon(champignon);
  }
  cuirPates(pates);
  servirPlat(oeuf);
}

faireCarbo(200, 4, 230, 400, 200); //recettes pour 4 avec quantités précises à mettre dans un ordre précis.

faireCarbo(400, 460, 8, 800) // Rappelle de la fonction car nouveau besoin, paramètre facultatif en moins = champignon.

