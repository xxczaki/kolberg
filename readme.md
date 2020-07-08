# Kolberg

> Useful utilities for string searching and manipulation.

[![Build Status](https://travis-ci.com/xxczaki/kolberg.svg?branch=master)](https://travis-ci.com/xxczaki/kolberg)
[![XO code style](https://img.shields.io/badge/code_style-XO-5ed9c7.svg)](https://github.com/xojs/xo)

Have you had to split a string into a few parts based on a certain character or keyword? Or maybe place a word between symbols? Such operations are common when building an expression parser or simply working with text. Kolberg aims to make it easier by providing a simple, human-readable API.

---

## Features

- Lightweight
- Simple, human-readable API
- Written in TypeScript

## Install

```
$ npm install kolberg
```

## Usage

```js
import {get} from 'kolberg';

const result = get('the quick brown fox jumps over the lazy dog').between('the', 'dog')?.trim();

console.log(result); //=> 'lazy'
```

## API

- [get(expression)](#getexpression)
- [remove(expression)](#removeexpression)
- [replace(expression)](#replaceexpression)

### get(expression)

#### expression

Type: `string`

String, which you want to search or manipulate.

### .before(identifier)

Get the contents of a string before identifier. Returns a `string` or `undefined`.

#### identifier

Type: `string | RegExp`

The identifier, **before** which you want to receive the content.

### .after(identifier)

Get the contents of a string **after** identifier. Returns a `string` or `undefined`.

#### identifier

Type: `string | RegExp`

The identifier, **after** which you want to receive the content.

### .between(firstIdentifier, secondIdentifier)

Get the contents of a string **between** identifiers. Returns a `string` or `undefined`.

#### firstIdentifier

Type: `string | RegExp`

The identifier, from which you want to search.

#### secondIdentifier

Type: `string | RegExp`

The identifier, to which you want to search.

### remove(expression)

#### expression

Type: `string`

String, which you want to search or manipulate.

### .before(identifier)

Remove the contents of a string before identifier. Returns a `string` or `undefined`.

#### identifier

Type: `string | RegExp`

The identifier, **before** which you want to remove the content.

### .after(identifier)

Remove the contents of a string **after** identifier. Returns a `string` or `undefined`.

#### identifier

Type: `string | RegExp`

The identifier, **after** which you want to remove the content.

### .between(firstIdentifier, secondIdentifier)

Remove the contents of a string **between** identifiers. Returns a `string` or `undefined`.

#### firstIdentifier

Type: `string | RegExp`

The identifier, from which you want to search.

#### secondIdentifier

Type: `string | RegExp`

The identifier, to which you want to search.

### replace(expression)

#### expression

Type: `string`

String, which you want to search or manipulate.

### .before(identifier, replaceWith)

Replace the contents of a string before identifier. Returns a `string` or `undefined`.

#### identifier

Type: `string | RegExp`

The identifier, **before** which you want to replace the content.

#### replaceWith

Type: `string`

String, which you want to replace the content with.

### .after(identifier, replaceWith)

Replace the contents of a string **after** identifier. Returns a `string` or `undefined`.

#### identifier

Type: `string | RegExp`

The identifier, **after** which you want to replace the content.

#### replaceWith

Type: `string`

String, which you want to replace the content with.

### .between(firstIdentifier, secondIdentifier, replaceWith)

Replace the contents of a string **between** identifiers. Returns a `string` or `undefined`.

#### firstIdentifier

Type: `string | RegExp`

The identifier, from which you want to search.

#### secondIdentifier

Type: `string | RegExp`

The identifier, to which you want to search.

#### replaceWith

Type: `string`

String, which you want to replace the content with.

## Why `kolberg`?

The name `kolberg` comes from a Polish etnographer, folklorist, and composer active during the foreign Partitions of Poland - [Henryk Oskar Kolberg](https://en.wikipedia.org/wiki/Oskar_Kolberg).

## License

[MIT](https://opensource.org/licenses/MIT)
