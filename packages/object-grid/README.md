# Nitro UI: Object Grid

Object Grid component for Nitro UI.

## Getting Started

Get latest version by installing via [NPM @nitro-ui/css-object-grid](https://www.npmjs.com/package/@nitro-ui/css-object-grid):

```sh
npm install @nitro-ui/css-object-grid
```

Include this stylesheet code into your site:


### o-grid - default
```html
<div class="o-grid">
    <div class="o-grid__item">Grid item 1</div>
    <div class="o-grid__item">Grid item 2</div>
    <div class="o-grid__item">Grid item 3</div>
</div>
```

### o-grid - sm (padding sides = 4px)
```html
<div class="o-grid  o-grid--sm">
    <div class="o-grid__item">Grid item 1</div>
    <div class="o-grid__item">Grid item 2</div>
    <div class="o-grid__item">Grid item 3</div>
</div>
```

### o-grid - md (padding sides = 8px)
```html
<div class="o-grid  o-grid--md">
    <div class="o-grid__item">Grid item 1</div>
    <div class="o-grid__item">Grid item 2</div>
    <div class="o-grid__item">Grid item 3</div>
</div>
```

### o-grid - lg (padding sides = 12px)
```html
<div class="o-grid  o-grid--lg">
    <div class="o-grid__item">Grid item 1</div>
    <div class="o-grid__item">Grid item 2</div>
    <div class="o-grid__item">Grid item 3</div>
</div>
```

### o-grid - none (padding sides = 0px)
```html
<div class="o-grid  o-grid--none">
    <div class="o-grid__item">Grid item 1</div>
    <div class="o-grid__item">Grid item 2</div>
    <div class="o-grid__item">Grid item 3</div>
</div>
```

### o-grid - reversed
```html
<div class="o-grid  o-grid--reversed">
    <div class="o-grid__item">Grid item 1</div>
    <div class="o-grid__item">Grid item 2</div>
    <div class="o-grid__item">Grid item 3</div>
</div>
```

### o-grid - none@mobile
```html
<div class="o-grid  o-grid--none@mobile">
    <div class="o-grid__item">Grid item 1</div>
    <div class="o-grid__item">Grid item 2</div>
    <div class="o-grid__item">Grid item 3</div>
</div>
```

## Usage:

Example with `<div>` tag:

```html
<div class="o-grid  o-grid--sm  o-grid--none@mobile">
    <div class="o-grid__item  u-width-1-3  u-width-1/2@mobile">
        width 1/3
    </div>

    <div class="o-grid__item  u-width-2-3  u-width-1/2@mobile">
        width 2/3
    </div>
</div>
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

## [0.0.0-beta] - 2019-07-18
### Added
- Initial setup
