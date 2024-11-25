module.exports = {
  root: true,
  env: {
    browser: true,  // För frontend (kan tas bort om du inte har frontend)
    node: true,     // För backend (Node.js)
    es2020: true,   // Stöd för ECMAScript 2020
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended', // För TypeScript-regler
    'plugin:react-hooks/recommended',  // För React-specifika regler
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],  // Ignorera dist och eslintrc-konfigurationsfilen
  parser: '@typescript-eslint/parser',  // För att använda TypeScript-parser
  plugins: ['react-refresh'],  // React-refresh plugin
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    'no-undef': 'off',  // Stänger av `no-undef` för att hantera Node.js-specifika objekt som `process`
  },
};
