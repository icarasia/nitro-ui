# Nitro UI: Utility Position

Utility Position component for Nitro UI.

## Getting Started

Get latest version by installing via [NPM @nitro-ui/utility-position](https://www.npmjs.com/package/@nitro-ui/utility-position):

```sh
npm install @nitro-ui/utility-position
```

## Usage:

### Positioning
```html
<div class="u-relative">u-relative</div>
<div class="u-absolute">u-absolute</div>
<div class="u-fixed">u-fixed</div>
<div class="u-static">u-static</div>
```

### Pin
```html
<div class="u-top-right">Push to top 0, right 0 </div>
<div class="u-top-left">Push to top 0, left 0</div>
<div class="u-bottom-right">Push to bottom, right 0</div>
<div class="u-bottom-left">Push to bottom, left 0</div>
```


### Z indexes

z-index support up to 5 ordering. Use `u-zindex-auto` for auto property.

```html
<div class="u-zindex-0">Z index 0</div>
<div class="u-zindex-1">Z index 1</div>
<div class="u-zindex-2">Z index 2</div>
<div class="u-zindex-3">Z index 3</div>
<div class="u-zindex-4">Z index 4</div>
<div class="u-zindex-5">Z index 5</div>
<div class="u-zindex-auto">Z index auto</div>
```

## Responsive Usage

By default the responsive support for position is `false`. To turn it on you will need to overwrite the variable value `$responsive-position-mobile` to `true` in your project level.

```html
<div class="u-relative@mobile">u-relative</div>
<div class="u-absolute@mobile">u-absolute</div>
<div class="u-fixed@mobile">u-fixed</div>
<div class="u-static@mobile">u-static</div>
<div class="u-top-right@mobile">Push to top 0, right 0 </div>
<div class="u-top-left@mobile">Push to top 0, left 0</div>
<div class="u-bottom-right@mobile">Push to bottom, right 0</div>
<div class="u-bottom-left@mobile">Push to bottom, left 0</div>
<div class="u-zindex-0@mobile">Z index 0</div>
<div class="u-zindex-1@mobile">Z index 1</div>
<div class="u-zindex-2@mobile">Z index 2</div>
<div class="u-zindex-3@mobile">Z index 3</div>
<div class="u-zindex-4@mobile">Z index 4</div>
<div class="u-zindex-5@mobile">Z index 5</div>
<div class="u-zindex-auto@mobile">Z index auto</div>
```

## Development

To extends, develop or contribute to this component, you're required to fork our main [repository](https://github.com/icarasia/nitro-ui) and made a pull request.

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
