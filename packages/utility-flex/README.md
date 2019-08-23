# Nitro UI: Utility Flex

Utility Flex component for Nitro UI. Quickly manage the layout, alignment, and sizing of grid columns, navigation, components, and more with a full suite of responsive flexbox utilities. For more complex implementations, custom CSS may be necessary.

## Getting Started

Get latest version by installing via [NPM @nitro-ui/css-utility-flex](https://www.npmjs.com/package/@nitro-ui/css-utility-spacing):

```sh
npm install @nitro-ui/css-utility-flex
```

### Enable Flex behaviors

To make the flexbox enable apply `u-flex` class to create a flexbox container and transform direct child elements into flex items.

```html
<div class="u-flex">I am a flexbox container</div>
```
```html
<div class="u-inline-flex">I am an inline flexbox container</div>
```

Responsive variations class also exist for display `u-flex` and `u-inline-flex`

```html
.u-flex@desktop
.u-flex@portable
.u-flex@tablet
.u-flex@mobile

.u-inline-flex@desktop
.u-inline-flex@portable
.u-inline-flex@tablet
.u-inline-flex@mobile
```

### Direction

Use `.u-flex--row` or `u-direction-row` to set a horizontal direction (the browser default), or `.u-flex--row-reverse` or `u-direction-row-reverse` to start the horizontal direction from the opposite side.

```html
<div class="u-flex u-flex--row">
  <div>Flex item 1</div>
  <div>Flex item 2</div>
  <div>Flex item 3</div>
</div>
<div class="u-flex u-flex--row-reverse">
  <div>Flex item 1</div>
  <div>Flex item 2</div>
  <div>Flex item 3</div>
</div>
```

Use `.u-flex--column` or `.u-direction-column`  to set a vertical direction, or `.u-flex--column-reverse` or `u-direction-column-reverse` to start the vertical direction from the opposite side.

```html
<div class="u-flex u-flex--colum">
  <div>Flex item 1</div>
  <div>Flex item 2</div>
  <div>Flex item 3</div>
</div>
<div class="u-flex u-flex--column-reverse">
  <div>Flex item 1</div>
  <div>Flex item 2</div>
  <div>Flex item 3</div>
</div>
```

Responsive variations also exist for flex direction.

```html
.u-flex--row / .u-direction-row
.u-flex--row@desktop / .u-direction-row@desktop
.u-flex--row@portable / .u-direction-row@portable
.u-flex--row@tablet / .u-direction-row@tablet
.u-flex--row@mobile / .u-direction-row@mobile

.u-flex--row-reverse / .u-direction-row-reverse
.u-flex--row-reverse@desktop / .u-direction-row-reverse@desktop
.u-flex--row-reverse@portable / .u-direction-row-reverse@portable
.u-flex--row-reverse@tablet / .u-direction-row-reverse@tablet
.u-flex--row-reverse@mobile / .u-direction-row-reverse@mobile

.u-flex--column / .u-direction-column
.u-flex--column@desktop / .u-direction-column@desktop
.u-flex--column@portable / .u-direction-column@portable
.u-flex--column@tablet / .u-direction-column@tablet
.u-flex--column@mobile / .u-direction-column@mobile

.u-flex--column-reverse / .u-direction-column-reverse
.u-flex--column-reverse@desktop / .u-direction-column-reverse@desktop
.u-flex--column-reverse@portable / .u-direction-column-reverse@portable
.u-flex--column-reverse@tablet / .u-direction-column-reverse@tablet
.u-flex--column-reverse@mobile / .u-direction-column-reverse@mobile


```


## Development

To extends, develop or contribute to this component, you're required to fork our main [repository](https://github.com/icarasia-engineering/nitro-ui) and made a pull request.

### Development Requirements

Development tools required for this component are:

- [NodeJS](https://nodejs.org/en/)
- [Grunt CLI](https://gruntjs.com)
- [Ruby](https://www.ruby-lang.org/en/) (optional)
- [SASS](https://sass-lang.com) (optional)

Ruby and SASS are optional if you're fully using [node-sass](https://github.com/sass/node-sass) from npm for development.

### Development Setup

Run:

```sh
npm install
```

### Compile

Run:

```sh
grunt
```
---

# TODO

Nothing todo for now.

---

# CHANGELOG

All notable changes to this project will be documented in this file. **For now, let's keep TODO and CHANGELOG in README file. Keeping things simple.**

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [0.0.0-beta] - 2019-08-23
### Added
- Initial setup for spacing
