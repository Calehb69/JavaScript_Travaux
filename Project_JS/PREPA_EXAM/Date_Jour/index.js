"use-strict";
/*************/

/*
 * VARIABLES
 */
let month = ["janvier", "février", "mars", "avril", "mai", "juin", "juillet", "août", "septembre", "octobre", "novembre", "décembre"];
let day = ["dimanche", "lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi"];

day = new Array();
month = new Array();

// Affectation de valeurs à chacun des tableaux.
day[0] = 'Dimanche';
day[1] = 'Lundi';
day[2] = 'Mardi';
day[3] = 'Mercredi';
day[4] = 'Jeudi';
day[5] = 'Vendredi';
day[6] = 'Samedi';

month[0]  = 'Janvier';
month[1]  = 'Février';
month[2]  = 'Mars';
month[3]  = 'Avril';
month[4]  = 'Mai';
month[5]  = 'Juin';
month[6]  = 'Juillet';
month[7]  = 'Août';
month[8]  = 'Septembre';
month[9]  = 'Octobre';
month[10] = 'Novembre';
month[11] = 'Décembre';

let today = new Date;

/*
* CODE PRINCIPAL
*/
document.write(`Nous sommes le ${day[today.getDay()]} ${today.getDate()} ${month[today.getMonth()]} ${today.getFullYear()}`);