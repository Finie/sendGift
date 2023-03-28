module.exports = {
  bracketSpacing: true,
  jsxSingleQuote: false,
  printWidth: 85,
  singleQuote: true,
  arrowParens: 'avoid',
  tabWidth: 2,
  trailingComma: 'es5',
  useTabs: false,
  semi: false,
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
  importOrderCaseInsensitive: true,
  importOrder: [
    '<THIRD_PARTY_MODULES>',
    '^(.*)/api/(.*)$',
    '^(.*)/screens/(.*)$',
    '^(.*)/components/(.*)$',
    '^(.*)/(?!generated)(.*)/(.*)$', // Everything not generated
    '^(.*)/generated/(.*)$', // Everything generated
    '^[./]', // Absolute path imports
  ],
}
