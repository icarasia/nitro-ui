# Nitro UI: Object List

List styling for Nitro UI.

## Getting Started

Get latest version by installing via [NPM @nitro-ui/object-list](https://www.npmjs.com/package/@nitro-ui/object-list):

```sh
npm install @nitro-ui/object-list
```

Default

```html
<ul class="o-menu">
    <li class="o-menu__item">
        <a href="#" class="o-menu__link  is--active">Menu One</a>
    </li>
    <li class="o-menu__item">
        <a href="#" class="o-menu__link">Menu Two</a>
    </li>
    <li class="o-menu__item">
        <a href="#" class="o-menu__link">Menu Three</a>
    </li>
    <li class="o-menu__item">
        <a href="#" class="o-menu__link  is--disabled">Menu Four</a>
    </li>
</ul>
```

Options

```html
<ul class="o-menu  o-menu--center"> ... </div>
<ul class="o-menu  o-menu--right"> ... </div>
<ul class="o-menu  o-menu--space-around"> ... </div>
<ul class="o-menu  o-menu--space-between"> ... </div>
<ul class="o-menu  o-menu--responsive@mobile-tablet"> ... </div>
<ul class="o-menu  o-menu--responsive@mobile"> ... </div>
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
npm run build
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
