import { data } from '../data.js';

/* --- import all listener files so they can attach to the DOM --- */
import '../listeners/sort-words.js';
import '../listeners/input-word.js';

/* --- any other code that executes when the document or window are ready --- */

const sortedLis = data.words.reduce((all, next) => {
  return `${all}<li>${next}</li>`;
}, '');
const sortedList = `<ul>${sortedLis}</ul>`;
document.getElementById('list-container').innerHTML = sortedList;
