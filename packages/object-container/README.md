# Nitro UI: Container

Container component for Nitro UI.

## Getting Started

Get latest version by installing via [NPM @nitro-ui/object-container](https://www.npmjs.com/package/@nitro-ui/object-container):

```sh
npm install @nitro-ui/object-container
```

Include this stylesheet code into your site:

```html
<link rel="stylesheet" href="dist/container.min.css" />
```

### Usage:

Example with `<div>` tag:

```html
<div class="o-container"></div>
```

```html
<div class="o-container  o-container--medium"></div>
```

```html
<div class="o-container  o-container--wide"></div>
```

```html
<div class="o-container  o-container--fluid"></div>
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

Types of changes:

- `Added` for new features.
- `Changed` for changes in existing functionality.
- `Deprecated` for soon-to-be removed features.
- `Removed` for now removed features.
- `Fixed` for any bug fixes.
- `Security` in case of vulnerabilities.

## [1.0.0-alpha.9] - 2019-11-01
### Changed
- Version bump - Republish to NPM.

## [0.0.0-beta] - 2019-07-18
### Added
- Initial setup.

## [1.0.0-beta] - 2019-07-26
### Added
- Install and setup `node-sass` and `grunt-sass` to support `includePath`, now we can use `@import "@nitro-ui/core/src/core"` directly in any sass file.
- Import @nitro-ui/core to `container.scss`
