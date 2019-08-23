# Nitro UI: Utility Spacing

Utility Spacing component for Nitro UI.

## Getting Started

Get latest version by installing via [NPM @nitro-ui/css-utility-spacing](https://www.npmjs.com/package/@nitro-ui/css-utility-spacing):

```sh
npm install @nitro-ui/css-utility-spacing
```

### Spacing type

The spacing consist of 7 spacing sizes:

```html
xxl - 64px
xl - 48px
lg - 24px
md - 16px
sm - 12px
xs - 8px
xxs - 4px
```

### Usage for padding

```html
<div class="u-padding-lg"></div>
<div class="u-padding-sides-sm"></div>
<div class="u-padding-bottom-xl"></div>
```


### Usage for margin

```html
<div class="u-margin-lg"></div>
<div class="u-margin-sides-sm"></div>
<div class="u-margin-bottom-xl"></div>
```

### Usage for Responsiveness

Spacing also supports the responsive abilities for non-desktop devices. Just add the classname with breakpoint property `u-[spacing-type]-[spacing-size]@[responsive-breakpoint]`.

```html
<div class="u-margin-lg  u-margin-bottom-xs@mobile"></div>
<div class="u-padding-sides-sm  u-padding-sides-lg@mobile-tablet"></div>
<div class="u-margin-bottom-xl  u-margin-bottom-xs@mobile"></div>
<div class="u-margin-bottom-xs@mobile-small"></div>
```

List of responsive breakpoint available

```html
@portable (starts on 1080px and below)
@mobile-tablet (starts on 1080px and below)
@tablet (starts on 768px to 1080px)
@mobile (starts on 767px and below)
@mobile-small (starts on 321px and below)

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
