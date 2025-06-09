module.exports = [
  {
    rules: {
      // Prevent accidental assignments inside conditional expressions
      'no-cond-assign': ['error', 'always'],

      // Enforce consistent indentation of 2 spaces
      indent: ['error', 2],

      // Enforce Unix-style line breaks (LF)
      'linebreak-style': ['error', 'unix'],

      // Enforce single quotes for strings
      quotes: ['error', 'single'],

      // Turn off rule for unused variables (useful during development)
      'no-unused-vars': 'off',

      // Enforce semicolons at the end of statements
      semi: ['error', 'always']
    }
  }
];
