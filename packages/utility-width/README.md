# Nitro UI: Utility Width

Utility Width component for Nitro UI.

## Getting Started

Get latest version by installing via [NPM @nitro-ui/utility-width](https://www.npmjs.com/package/@nitro-ui/utility-width):

```sh
npm install @nitro-ui/utility-width
```

Include this stylesheet code into your site:

```html
<div class="u-width-1">width = 100%</div>

<div class="u-width-1/2">width = 50%</div>

<div class="u-width-1/3">width = 33.333%</div>
<div class="u-width-2/3">width = 66.666%</div>

<div class="u-width-1/4">width = 25%</div>
<div class="u-width-2/4">width = 50%</div>
<div class="u-width-3/4">width = 75%</div>



<div class="u-width-1/5">width = 20%</div>
<div class="u-width-2/5">width = 40%</div>
<div class="u-width-3/5">width = 60%</div>
<div class="u-width-4/5">width = 80%</div>

<div class="u-width-1/6">width = 16.666%</div>
<div class="u-width-2/6">width = 33.333%</div>
<div class="u-width-3/6">width = 50%</div>
<div class="u-width-4/6">width = 66.666%</div>
<div class="u-width-5/6">width = 83.333%</div>

<div class="u-width-1/8">width = 12.5%</div>
<div class="u-width-2/8">width = 25%</div>
<div class="u-width-3/8">width = 37.5%</div>
<div class="u-width-4/8">width = 50%</div>
<div class="u-width-5/8">width = 62.5%</div>
<div class="u-width-6/8">width = 75%</div>
<div class="u-width-7/8">width = 87.5%</div>

<div class="u-width-1/10">width = 10%</div>
<div class="u-width-2/10">width = 20%</div>
<div class="u-width-3/10">width = 30%</div>
<div class="u-width-4/10">width = 40%</div>
<div class="u-width-5/10">width = 50%</div>
<div class="u-width-6/10">width = 60%</div>
<div class="u-width-7/10">width = 70%</div>
<div class="u-width-8/10">width = 80%</div>
<div class="u-width-9/10">width = 90%</div>

<div class="u-width-1/12">width = 8.333%</div>
<div class="u-width-2/12">width = 16.666%</div>
<div class="u-width-3/12">width = 25%</div>
<div class="u-width-4/12">width = 33.333%</div>
<div class="u-width-5/12">width = 41.666%</div>
<div class="u-width-6/12">width = 50%</div>
<div class="u-width-7/12">width = 58.333%</div>
<div class="u-width-8/12">width = 66.666%</div>
<div class="u-width-9/12">width = 75%</div>
<div class="u-width-10/12">width = 83.333%</div>
<div class="u-width-11/12">width = 91.666%</div>

<div class="u-width-1/2@desktop">width = 50% when portable size</div>
<div class="u-width-1/2@mobile-tablet">width = 50% when portable size</div>
<div class="u-width-1/2@mobile">width = 50% when mobile size</div>
```

## Usage:

Example with `<div>` tag:

```html
<div class="o-grid">
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
