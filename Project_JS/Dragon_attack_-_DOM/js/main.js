"use strict";

/******************
 * VARIABLES
 ******************/
const game = {};

/******************
 * FONCTIONS
 ******************/

/**
 * Initialise :
 * - choix de l'utilisateur (niveau, épée, armure)
 * - les points de vie en fonction du niveau
 * - ratio épée et armure
 */
function initializeGame() {
    //détermine le choix du niveau en appelant la fonction requestInteger
    game.difficulty = requestInteger(
        "Choisissez votre niveau de difficulté\n 1- Facile / 2- Moyen / 3- Difficile",
        1,
        3
    );
    //détermine le choix de l'épée en appelant la fonction requestInteger
    game.sword = requestInteger(
        "Choisissez votre épée\n 1- Bois / 2- Acier / 3- Excalibur",
        1,
        3
    );
    //détermine le choix de l'armure en appelant la fonction requestInteger
    game.armor = requestInteger(
        "Choisissez votre armure\n 1- Cuivre / 2- Fer / 3- Magique",
        1,
        3
    );

    //attribuer les points de vie en fonction du niveau
    switch (game.difficulty) {
        case 1:
            game.hpKnight = getRandomInteger(200, 250);
            game.hpDragon = getRandomInteger(150, 200);
            break;
        case 2:
            game.hpKnight = getRandomInteger(200, 250);
            game.hpDragon = getRandomInteger(200, 250);
            break;
        case 3:
            game.hpKnight = getRandomInteger(100, 150);
            game.hpDragon = getRandomInteger(200, 250);
            break;
    }

    //ratio de l'épée qui impactera les dégâts infligés au dragon lors de chaque attaque
    switch (game.sword) {
        case 1:
            game.swordRatio = 0.5;
            break;
        case 2:
            game.swordRatio = 1;
            break;
        case 3:
            game.swordRatio = 1.5;
            break;
    }

    //ratio de l'armure qui impacte les dégats infligés par le dragon au chevalier
    switch (game.armor) {
        case 1:
            game.armorRatio = 1;
            break;
        case 2:
            game.armorRatio = 0.75;
            break;
        case 3:
            game.armorRatio = 0.5;
            break;
    }

    DIV.innerHTML = "<h3>Points de vie de départ</h3>";
    displayPV();
}

/**
 *
 * @returns les points de dégâts infligés par le dragon au chevalier, minorés selon l'armure
 */
function computeDragonDamagePoint() {
    let damagePoints;
    switch (game.difficulty) {
        case 1:
            damagePoints = getRandomInteger(10, 20);
            break;
        case 2:
        case 3:
            //points de dégat pour difficulté 1 et 2
            damagePoints = getRandomInteger(20, 30);
            break;
    }
    return Math.floor(damagePoints * game.armorRatio);
}

/**
 *
 * @returns les points de dégâts infligés au dragon minorés ou majorés selon l'épée
 */
function computeKnightDamagePoint() {
    let damagePoints;
    switch (game.difficulty) {
        case 1:
            damagePoints = getRandomInteger(25, 30);
            break;
        case 2:
            damagePoints = getRandomInteger(15, 20);
            break;
        case 3:
            damagePoints = getRandomInteger(5, 10);
            break;
    }
    return Math.floor(damagePoints * game.swordRatio);
}

function gameLoop() {
    //Tour à tour
    game.round = 0;
    let damage;
    while (game.hpDragon > 0 && game.hpKnight > 0) {
        let speed = Math.random();
        game.round++;
        DIV.innerHTML += "<h3>==== TOUR n°" + game.round + " ====</h3>";
        if (speed < 0.5) {
            //dragon attaque
            damage = computeDragonDamagePoint();
            // game.hpKnight -= damage;
            // if (game.hpKnight - damage < 0) {
            //     game.hpKnight = 0;
            // } else {
            //     game.hpKnight -= damage;
            // }
            game.hpKnight - damage < 0 ?
                (game.hpKnight = 0) :
                (game.hpKnight -= damage);

            DIV.innerHTML += `Le dragon a été plus rapide, il enlève ${damage}PV au chevalier.</p>`;
        } else {
            //chevalier attaque
            damage = computeKnightDamagePoint();
            game.hpDragon -= damage;
            DIV.innerHTML += `<p>Le chevalier a été plus rapide, il enlève ${damage}PV au dragon.</p>`;
        }
        displayPV();
    }
}

function displayPV() {
    DIV.innerHTML += `<table>
            <thead>
                <th>Personnage</th>
                <th>PV</th>
            </thead>
            <tbody>
                <tr>
                    <td>Chevalier</td>
                    <td>${game.hpKnight}</td>
                </tr>
                <tr>
                    <td>Dragon</td>
                    <td>${game.hpDragon}</td>
                </tr>
            </tbody>
        </table>`;
}

/**
 * Afficher l'image du vainqueur et ses PV restants
 */
function showWinner() {
    if (game.hpKnight > 0) {
        //chevalier vainqueur
        DIV.insertAdjacentHTML(
            "afterbegin",
            ` <article>
            <img src="img/knight.png" alt="">
            <h4>Vous avez achevé le dragon !</h4>
            <p>Il vous reste ${game.hpKnight}PV.</p>
        </article>`
        );
    } else {
        //dragon vainqueur
        DIV.insertAdjacentHTML(
            "afterbegin",
            ` <article>
            <img src="img/dragon.png" alt="">
            <h4>Le dragon vous a carbonisé !</h4>
            <p>Il lui reste ${game.hpDragon}PV.</p>
        </article>`
        );
    }
}

function startGame() {
    initializeGame();
    gameLoop();
    showWinner();
    document.querySelector("#toggleWinner").classList.remove("hide");
}

function toggleWinner() {
    //on cible la balise et on la stocke dans une variable car on s'en ressert plusieurs fois
    const ARTICLE = document.querySelector("#game article");
    //si la balise n'est ps dans le html (== null) message erreur et exit de la fonction
    if (ARTICLE == null) {
        alert("le jeu n'est pas lancé");
        return;
    }
    //ajoute ou enlève la classe hide selon si elle est déjà ou pas sur la balise
    ARTICLE.classList.toggle("hide");
}

/******************
 * CODE PRINCIPAL
 ******************/

const DIV = document.querySelector("#game");

//sur le bouton #run -> au clic -> appelle la fonction startGame
document.querySelector("#run").addEventListener("click", startGame);
//sur le bouton #toggleWinner -> au clic -> appelle la fonction toggleWinner
document.querySelector("#toggleWinner").addEventListener("click", toggleWinner);