module.exports = {
  root: true,
  extends: [
    '@react-native-community',
    'plugin:react/recommended',
    "plugin:@typescript-eslint-plugin/recommended",
    "plugin:prettier/recommended"
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 2018, // Allows for the parsing of modern ECMAScript features
    sourceType: "module" // Allows for the use of imports
  },
  rules: {
    "@typescript-eslint/interface-name-prefix": ["warn", {
      prefixWithI: "always"
    }]
  }
};
