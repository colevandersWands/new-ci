/**
 * Sorts an array of strings in different ways.
 * It does not modify the argument (no side-effects).
 *
 * @param {string[]} [toSort=''] - The array of strings to sort.
 * @param {string} [sortType='oldest'] - How to sort the strings, 6 options.
 * - oldest: from oldest to newest
 * - newest: from newest to oldest
 * - shortest: from shortest to longest
 * - longest: from longest to shortest
 * - a: alphabetical order
 * - z: reverse alphabetical order
 * if the sortType is not one of these 6 options, a copy of toSort is returned
 * @returns {string[]} a new sorted array containing the same strings as toSort
 */
export const sortStrings = (toSort = [], sortType = 'oldest') => {
  let toReturn;
  if (sortType === 'newest') {
    toReturn = [...toSort].reverse();
  } else if (sortType === 'a') {
    toReturn = [...toSort].sort();
  } else if (sortType === 'z') {
    toReturn = [...toSort].sort().reverse();
  } else if (sortType === 'shortest') {
    toReturn = [...toSort].sort((a, b) => a.length - b.length);
  } else if (sortType === 'longest') {
    toReturn = [...toSort].sort((a, b) => a.length - b.length).reverse();
  } else {
    toReturn = [...toSort];
  }
  return toReturn;
};
