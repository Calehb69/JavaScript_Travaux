"use strict";

/*****************************************
 * UNE FACON DE FAIRE * 
 *****************************************/

/*let tabMonth = ["janvier", "février", "mars", "avril", "mai", "juin",'juillet',"aout","septembre","octobre","novembre","décembre"];
let tabDay = ["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"];
let today = new Date();

//new Date= today.getTabDay()+'/'+(today.getTabMonth()+1);

document.querySelector("#content").innerHTML = `<p>Nous sommes le ${tabDay[today.getDay()]} ${tabMonth[today.getMonth()]} 
${today.getFullYear()} ${date.getDate()}`*/

/*********************************************
 * AUTRE METHODE*
**********************************************/


const day = ["dimanche", "lundi", "mardi",  "mercredi",  "jeudi", "vendredi", "samedi"];

const month = ["janvier", "février", "mars", "avril", "mai", "juin", "juillet", "aout", "septembre", "octobre", "novembre","decembre"];

let today = new Date ();
/*let year = today.getFullYear();
let month = today.getFullMonth();
let day= today.getDay();
let date = today.getDate();*/


document.querySelector("#content").innerHTML = `Nous sommes le ${dayNames[today.getDay()]} ${today.getDate()} ${monthNames[today.getMonth()]} ${today.getFullYear()}`;