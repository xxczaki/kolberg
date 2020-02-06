<p align="center">
  <img src="logo.svg" height="128">
  <h2 align="center">Parsify</h2>
  <p align="center">Fast, Extensible parsing engine ⚡<p>
  <p align="center">
	<a href="https://travis-ci.org/parsify/core"><img src="https://travis-ci.org/parsify/core.svg?branch=master" alt="Build Status"></a>
	<a href="https://github.com/sindresorhus/xo"><img src="https://img.shields.io/badge/code_style-XO-5ed9c7.svg" alt="Code Style"></a>
</p>
</p>

## About

**Parsify** is a parsing engine, that is fast and can be extended using plugins.
It was inspired by [Numi](https://numi.app), a calculator app for macOS.

## Architecture

Parsify is made out of a [lightweight core](https://github.com/parsify-dev/core) and various [plugins](#official-plugins), that can parse different expressions. 

## Official Plugins

Name | Status
---|---
[@parsify/math]() | [![Build Status](https://travis-ci.org/parsify-dev/math.svg?branch=master)](https://travis-ci.org/parsify-dev/math) [![Coverage Status](https://coveralls.io/repos/github/parsify-dev/math/badge.svg?branch=master)](https://coveralls.io/github/parsify-dev/math?branch=master)
[@parsify/currencies]() | [![Build Status](https://travis-ci.org/parsify-dev/currencies.svg?branch=master)](https://travis-ci.org/parsify-dev/currencies) [![Coverage Status](https://coveralls.io/repos/github/parsify-dev/currencies/badge.svg?branch=master)](https://coveralls.io/github/parsify-dev/currencies?branch=master)
[@parsify/date]() | [![Build Status](https://travis-ci.org/parsify-dev/date.svg?branch=master)](https://travis-ci.org/parsify-dev/date) [![Coverage Status](https://coveralls.io/repos/github/parsify-dev/date/badge.svg?branch=master)](https://coveralls.io/github/parsify-dev/date?branch=master)

## Community made plugins

> Learn [how to build a plugin]() [WIP]!

## License

[MIT](https://opensource.org/licenses/MIT)
