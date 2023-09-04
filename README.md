# @fastone/eslint-config
    
[![npm version](https://badge.fury.io/js/%40fastone%2Feslint-config.svg)](https://badge.fury.io/js/%40fastone%2Feslint-config)
[![npm downloads](https://img.shields.io/npm/dm/%40fastone%2Feslint-config.svg)](https://www.npmjs.com/package/%40fastone%2Feslint-config)
[![GitHub stars](https://img.shields.io/github/stars/fastone/eslint-config.svg?style=social&label=Star&maxAge=2592000)](https://github.com/fastone/eslint-config)            

## Description
This is a sharable eslint config for TypeScript React projects.
One config to rule all them projects.

## Installation
`npm install @fastone/eslint-config`

## Usage
Create `.eslintrc.cjs` in the root of your project with the following content:

```
/** @type {import('eslint').Linter.Config} */
module.exports = {
	extends: ['@fastone/eslint-config'],
	parserOptions: {
		tsconfigRootDir: __dirname,
	},
};
```

## To Do

- [ ] Double check and update the rules while using it in a real project
