# @divyagnan/eslint-plugin-inline-styles [![npm version](https://badge.fury.io/js/%40divyagnan%2Feslint-plugin-inline-styles.svg)](https://badge.fury.io/js/%40divyagnan%2Feslint-plugin-inline-styles) [![Build Status](https://travis-ci.org/divyagnan/eslint-plugin-inline-styles.svg?branch=master)](https://travis-ci.org/divyagnan/eslint-plugin-inline-styles)

A collection of Eslint rules surrounding the use of inline-styles.

## Installation

You'll first need to install [ESLint](http://eslint.org):

```
$ npm i eslint --save-dev
```

Next, install `@divyagnan/eslint-plugin-inline-styles`:

```
$ npm install @divyagnan/eslint-plugin-inline-styles --save-dev
```

**Note:** If you installed ESLint globally (using the `-g` flag) then you must also install `@divyagnan/eslint-plugin-inline-styles` globally.

## Usage

Add `@divyagnan/inline-styles` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "@divyagnan/inline-styles"
    ]
}
```


Then configure the rules you want to use under the rules section.

```json
{
    "rules": {
        "@divyagnan/inline-styles/units": 2
    }
}
```

## Supported Rules

* [units](docs/rules/units.md) - Checks inline styles for units 





