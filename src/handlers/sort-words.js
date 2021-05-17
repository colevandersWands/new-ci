import { data } from '../data.js';
import { sortStrings } from '../logic/sort-strings.js';

/**
 * Entry point for users sorting the list of words in this app.
 * It is called each time the input selection changes.
 *
 * @param {Event} event - The event triggered by changing the input.
 */
export const handleSortWords = (event) => {
  /* -- log beginning of interaction -- */
  console.log('-- begin sort words --');

  /* -- gather user input from DOM -- */
  const howToSort = event.target.value;

  /* -- use the input and data -- */
  data.sort = howToSort;
  const sorted = sortStrings(data.words, data.sort);

  /* -- render new words -- */
  const listItems = sorted.reduce((all, next) => {
    return `${all}<li>${next}</li>`;
  }, '');
  const sortedList = `<ul>${listItems}</ul>`;
  document.getElementById('list-container').innerHTML = sortedList;

  /* -- log end of interaction -- */
  console.log('-- end sort words --');
};
