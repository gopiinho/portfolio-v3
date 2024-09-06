/** @type {import("prettier").Config} */
export default {
  printWidth: 80,
  singleQuote: true,
  trailingComma: 'es5',
  jsxSingleQuote: true,
  semi: false,
  tabWidth: 2,
  bracketSpacing: true,
  arrowParens: 'always',
  plugins: ['prettier-plugin-astro'],
  overrides: [
    {
      files: '*.astro',
      options: {
        parser: 'astro',
      },
    },
  ],
}
