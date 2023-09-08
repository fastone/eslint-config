# @fastone/eslint-config

![npm (scoped)](https://img.shields.io/npm/v/%40fastone/eslint-config?style=social&logo=npm)
![npm](https://img.shields.io/npm/dt/%40fastone%2Feslint-config?style=social&logo=npm)
![GitHub stars](https://img.shields.io/github/stars/fastone/eslint-config.svg?style=social&logo=github)
## Description

This is a sharable eslint config for TypeScript React projects.
One config to rule all them projects.

## Installation

To install the package run

```sh
foo@bar:~$ npm install @fastone/eslint-config
```

Create `.eslintrc.cjs` in the root of your project with the following content:

```js
/** @type {import('eslint').Linter.Config} */
export default {
    extends: ['@fastone/eslint-config'],
    parserOptions: {
        tsconfigRootDir: __dirname
    }
};
```

## Linting

After you've added the following to your `package.json`:

```json
"scripts": {
    "lint": "eslint --ext .ts,.tsx .",
    "lint:fix": "eslint --ext .ts,.tsx . --fix"
}
```

You'll be able to run the linting commands with:

```sh
foo@bar:~$ npm run lint
foo@bar:~$ npm run lint:fix
```

## VSCode

You can also add the following to your `.vscode/settings.json` to lint on save:
( You need to install the `Prettier - Code formatter` [esbenp.prettier-vscode] extension)

```json
{
    "editor.formatOnSave": true,
    "editor.defaultFormatter": "esbenp.prettier-vscode"
}
```

### Parsing error: ESLint was configured....

To hide the following error from vscode:

```
Parsing error: ESLint was configured to run on `<tsconfigRootDir>/.eslintrc.cjs` using `parserOptions.project`
```

add the following to your `.eslintrc.cjs`:

```js
ignorePatterns: ['**/*.config.js', '**/*.config.cjs', '**/*.config.ts', '**/*.config.tsx', '.eslintrc.cjs'],
```

## To Do

-   [ ] Double check and update the rules while using it in a real project
