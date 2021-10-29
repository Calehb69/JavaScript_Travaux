"use strict";

/**
 *
 * @param {number} min
 * @param {number} max
 * @returns Nombre entier aléatoire
 */
function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

/**
 *
 * @param {string} msg Message qui apparait dans le promt
 * @param {number} min
 * @param {number} max
 * @returns
 */
function requestInteger(msg, min, max) {
    let nb;
    do {
        nb = parseInt(prompt(msg, 1));
    } while (isNaN(nb) || nb < min || nb > max);
    return nb;
}