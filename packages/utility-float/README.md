# Nitro UI: Utility Float

Utility Float component for Nitro UI.

## Getting Started

Get latest version by installing via [NPM @nitro-ui/css-utility-float](https://www.npmjs.com/package/@nitro-ui/css-utility-float):

```sh
npm install @nitro-ui/css-utility-float
```

Include this stylesheet code into your site:

```html
<strong>Float</strong>
<div class="u-float-left">Float Left</div>
<div class="u-float-right">Float Right</div>
<div class="u-float-right">Float None</div>

<strong>Core</strong>
<p class="u-text-truncate">Text Truncate</p>
<p class="u-text-strike">Text Strike</p>
<p class="u-text-clamp">Text Clamp</p>
<p class="u-text-unstyled">Text Unstyled</p>
<p class="u-icon-text">Icon Text</p>
<br/>
<strong>Text Color</strong>
<p class="u-color-base">Text color base</p>
<p class="u-color-dark">Text color dark</p>
<p class="u-color-link">Text color link</p>
<p class="u-color-muted">Text color muted</p>
<p class="u-color-white">Text color white</p>
<p class="u-color-positive">Text color positive</p>
<p class="u-color-negative">Text color negative</p>
<p class="u-color-warning">Text color warning</p>
<br/>
<strong>Font Weight</strong>
<p class="u-text-light">Font weight light</p>
<p class="u-text-normal">Font weight normal</p>
<p class="u-text-medium">Font weight medium</p>
<p class="u-text-semibold">Font weight semibold</p>
<p class="u-text-bold">Font weight bold</p>
<br/>
<strong>Responsive</strong>
`mobile, tablet, portable`
Only availabble for `u-text-{size}` and `u-text-{uppercase/lowercase}`
<p class="u-text-1  u-text-2@mobile">Text 2 when mobile size</p>
<p class="u-text-7@tablet">Text 7 when tablet size</p>
<p class="u-text-uppercase@portable">Text uppercase when tablet and mobile size</p>
<br/>
<strong>Case</strong>
<p class="u-text-uppercase">Text uppercase</p>
<p class="u-text-lowercase">Text lowercase</p>
```

## Usage:

Example with `<a>` tag:

```html
<a href="#" class="u-text-5  u-color-link  u-text-7@mobile">Text color Primary, text-5 for all screen except text-7 when mobile</a>
<a href="#" class="u-color-muted  u-text-uppercase@mobile">Text color muted and uppercase when mobile</a>
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
