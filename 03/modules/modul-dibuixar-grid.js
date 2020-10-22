/*
These functions are used by the interface of this code. You don't need to know how they work at this moment.
*/

/**
 * Pinta un Grid per als indexos de l'array
 *
 * @param {number} length
 */
export function createIndexesGrid(length) {
  let str = "";
  for (let i = 0; i < length; i++) {
    str += "<span>" + i + "</span>";
  }
  return str;
}

/**
 * Pinta un Grid per a les caselles de l'Array
 *
 * @param {string[]} s  L'array
 */
export function createTextGrid(s) {
  let str = "";
  for (let i = 0; i < s.length; i++) {
    str += "<span>" + s[i] + "</span>";
  }
  return str;
}
