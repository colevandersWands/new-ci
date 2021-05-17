import { data } from '../data.js';
import { isWord } from '../logic/is-word.js';
import { sortStrings } from '../logic/sort-strings.js';

/**
 * Entry point for users adding a word to the list.
 * It is called each time the user clicks the "add word" button.
 *
 * @param {Event} event - The event triggered when the user clicks the button.
 */
export const handleInputWord = (event) => {
  /* -- log beginning of interaction -- */
  console.log('-- begin input word --');

  /* -- check the target -- */
  if (event.target.type !== 'button') {
    return;
  }

  /* -- gather user input from DOM -- */
  const text = event.target.form.text.value;
  const action = event.target.value;

  /* -- use the input and data -- */
  const warnings = document.getElementById('warnings');
  warnings.innerHTML = '';

  if (action === 'add') {
    if (!isWord(text)) {
      warnings.innerHTML = `"${text}" is not a word`;
      return;
    }
    data.words.push(text);
  } else if (action === 'remove') {
    if (!data.words.includes(text)) {
      warnings.innerHTML = `"${text}" is not in the list`;
      return;
    }
    data.words.splice(data.words.indexOf(text), 1);
  }

  const sorted = sortStrings(data.words, data.sort);

  /* -- render new words -- */
  const listItems = sorted.reduce((all, next) => {
    return `${all}<li>${next}</li>`;
  }, '');
  const sortedList = `<ul>${listItems}</ul>`;
  document.getElementById('list-container').innerHTML = sortedList;

  /* -- log end of interaction -- */
  console.log('-- end input word --');
};
