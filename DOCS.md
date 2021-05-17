<!-- BEGIN TITLE -->

# DOCS

<!-- END TITLE -->

<!-- BEGIN TOC -->

- [handlers](#handlers)
  - [input-word.js](#srchandlersinput-wordjs)
  - [sort-words.js](#srchandlerssort-wordsjs)
- [init](#init)
  - [index.js](#srcinitindexjs)
- [listeners](#listeners)
  - [input-word.js](#srclistenersinput-wordjs)
  - [sort-words.js](#srclistenerssort-wordsjs)
- [logic](#logic)
  - [is-word.js](#srclogicis-wordjs)
  - [sort-strings.js](#srclogicsort-stringsjs)
- [data.js](#srcdatajs)

<!-- END TOC -->

<!-- BEGIN DOCS -->

---

- do not need tests
- can import and use
  - data
  - logic
- can read & write the dom
- can log important information to the console

---

### [./src/handlers/input-word.js](./src/handlers/input-word.js?study)

<a name="handleInputWord"></a>

## handleInputWord

Entry point for users adding a word to the list.
It is called each time the user clicks the "add word" button.

| Param | Type               | Description                                          |
| ----- | ------------------ | ---------------------------------------------------- |
| event | <code>Event</code> | The event triggered when the user clicks the button. |

---

### [./src/handlers/sort-words.js](./src/handlers/sort-words.js?study)

<a name="handleSortWords"></a>

## handleSortWords

Entry point for users sorting the list of words in this app.
It is called each time the input selection changes.

| Param | Type               | Description                                |
| ----- | ------------------ | ------------------------------------------ |
| event | <code>Event</code> | The event triggered by changing the input. |

[TOP](#DOCS)

---

---

---

### [./src/init/index.js](./src/init/index.js?study)

[TOP](#DOCS)

---

---

---

### [./src/listeners/input-word.js](./src/listeners/input-word.js?study)

---

### [./src/listeners/sort-words.js](./src/listeners/sort-words.js?study)

[TOP](#DOCS)

---

---

# Logic

---

### [./src/logic/is-word.js](./src/logic/is-word.js?study)

<a name="isWord"></a>

## isWord ⇒ <code>boolean</code>

Checks if a string is a word. A word contains only letters.

**Returns**: <code>boolean</code> - Whether or not the text is a word.

| Param | Type                | Description                      |
| ----- | ------------------- | -------------------------------- |
| text  | <code>string</code> | A string to check for wordiness. |

---

### [./src/logic/sort-strings.js](./src/logic/sort-strings.js?study)

<a name="sortStrings"></a>

## sortStrings ⇒ <code>Array.&lt;string&gt;</code>

Sorts an array of strings in different ways.
It does not modify the argument (no side-effects).

**Returns**: <code>Array.&lt;string&gt;</code> - a new sorted array containing the same strings as toSort

| Param      | Type                              | Default                                     | Description                                                                                                                                                                                                                                                                                                      |
| ---------- | --------------------------------- | ------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [toSort]   | <code>Array.&lt;string&gt;</code> | <code>&#x27;&#x27;</code>                   | The array of strings to sort.                                                                                                                                                                                                                                                                                    |
| [sortType] | <code>string</code>               | <code>&quot;&#x27;oldest&#x27;&quot;</code> | How to sort the strings, 6 options. - oldest: from oldest to newest - newest: from newest to oldest - shortest: from shortest to longest - longest: from longest to shortest - a: alphabetical order - z: reverse alphabetical order if the sortType is not one of these 6 options, a copy of toSort is returned |

[TOP](#DOCS)

---

---

## [./src/data.js](./src/data.js?study)

<!-- END DOCS -->
