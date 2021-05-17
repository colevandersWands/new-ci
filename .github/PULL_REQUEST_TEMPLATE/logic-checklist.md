---
name: code PR
about: A template PR for contributing to the /logic folder
---

<!--
  make this PR easy to find:

  - assign: yourself
  - labels:
  - request a review
-->

## Continuous Integration (CI)

- [ ] Linting passes
- [ ] Tests pass

## It Does

- [ ] have a nice function name that matches the file name
- [ ] has nice parameter names and default values
- [ ] have an exported function, and no other things
- [ ] has a JSDoc comment
  - [ ] is well formatted
  - [ ] parameter names match function's parameter names
  - [ ] default parameters are documented
  - [ ] has complete and clear descriptions
  - [ ] has correct type annotations
  - [ ] includes at least one example
- [ ] have good formatting
- [ ] use short comments to describe the strategy
- [ ] be a simple and readable implementation
- [ ] use short comments to describe important language feature choices
- [ ] use clear and helpful variable names
- [ ] declare variables in the smallest scope possible
- [ ] have a spec file:
  - [ ] There are at least 8 test cases
  - [ ] All `describe`s and `it`s have clear and helpful names
  - [ ] All test names actually describe what is being tested
  - [ ] Tests are grouped logically using `describe`
  - [ ] There is only one `expect` inside every `it`
  - [ ] There is no logic (loops, conditionals, ...) in the test cases
  - [ ] Side-effects are tested, if necessary
  - [ ] Tricky edge cases are tested (extra credit)
- [ ] spelling is clear and understandable

## It Does Not

- [ ] read or write from the DOM
- [ ] log to the console
- [ ] use `prompt`, `alert` or `confirm`
