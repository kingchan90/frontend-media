module.exports = {
  testRegex: "((\\.|/*.)(spec))\\.js?$",
  moduleNameMapper: {
    "@/(.*)$": "<rootDir>/src/js/$1",
    '^@constants': `<rootDir>/src/js/constants.js`
  }
};
