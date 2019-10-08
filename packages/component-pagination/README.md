# Nitro UI: Component > Pagination

Pagination styling for list or table

## Getting Started

Get latest version by installing via [NPM @nitro-ui/component-pagination](https://www.npmjs.com/package/@nitro-ui/component-pagination):

```sh
npm install @nitro-ui/component-pagination
```
**Dependencies**

Pagination style requires Nitro Button Components which already defined inside package.json. Use `c-btn-secondary` or `c-btn-secondary-outline` to render the button style. When pagination installed `@nitro-ui/component-button` will be installed together inside the node_modules. Use the button to include in your project.


## Usage

Sample markup for pagination

```html
<ul class="c-pagination">
    <li class="c-pagination__first"><span class="c-btn  c-btn--secondary-outline  is--disabled">First</span></li>
    <li class="c-pagination__previous"><a href="#" class="c-btn  c-btn--secondary-outline">Prev</a></li>
    <li class="c-pagination__item  is--active"><a href="#">1</a></li>
    <li class="c-pagination__item"><a href="#">2</a></li>
    <li class="c-pagination__item"><a href="#">3</a></li>
    <li class="c-pagination__item"><a href="#">4</a></li>
    <li class="c-pagination__item"><a href="#">5</a></li>
    <li class="c-pagination__next"><a href="#" class="c-btn  c-btn--secondary-outline">Next</a></li>
    <li class="c-pagination__last"><a href="#" class="c-btn  c-btn--secondary-outline">Last</a></li>
</ul>

```

For pagination item that currently active requires to add `is--active` class name.

**Inline Pagination**

To make the pagination inline add extra class name `c-pagination--inline` to the c-pagination

```html
<ul class="c-pagination  c-pagination--inline">
    <li class="c-pagination__first"><span class="c-btn   c-btn--secondary-outline  is--disabled">First</span></li>
    <li class="c-pagination__previous"><a href="#" class="c-btn  c-btn--secondary-outline">Prev</a></li>
    <li class="c-pagination__item  is--active"><a href="#">1</a></li>
    <li class="c-pagination__item"><a href="#">2</a></li>
    <li class="c-pagination__item"><a href="#">3</a></li>
    <li class="c-pagination__item"><a href="#">4</a></li>
    <li class="c-pagination__item"><a href="#">5</a></li>
    <li class="c-pagination__next"><a href="#" class="c-btn  c-btn--secondary-outline">Next</a></li>
    <li class="c-pagination__last"><a href="#" class="c-btn  c-btn--secondary-outline">Last</a></li>
</ul>
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
- Fixed CSS style for reorder the First and Last button
