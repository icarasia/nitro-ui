dropdown# Nitro UI: Component > Form Float

Toggle contextual overlays for displaying lists of links and more

## Getting Started

Get latest version by installing via [NPM @nitro-ui/component-form-float](https://www.npmjs.com/package/@nitro-ui/component-form-float):

```sh
npm install @nitro-ui/component-form-float
```
**Dependencies**

Form float require Nitro Form Component which already define inside package.json.



## Usage

Sample markup for Form float

**Input**
```html
<div class="c-field-float">
    <input type="text" class="c-input"/>
    <label>Label</label>
    <div class="c-field__message">
        Message here
    </div>
</div>
```

**Disable State**
```html
<div class="c-field-float">
    <input type="text" class="c-input" disabled/>
    <label>Label</label>
    <div class="c-field__message">
        Message here
    </div>
</div>
```

**Error State**
```html
<div class="c-field-float  c-field--error">
    <input type="text" class="c-input"/>
    <label>Label</label>
    <div class="c-field__message">
        Message here
    </div>
</div>
```

**Select**
```html
<div class="c-field-float">
    <select class="c-input">
        <option></option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
    </select>
    <label>Select</label>
    <div class="c-field__message">
        Message here
    </div>
</div>
```

**Input with Button**
```html
<div class="c-field-float">
    <div class="c-input-btn  u-padding-ends-none  u-flex  u-flex--items-center  u-bg-white">
        <input type="text" class="c-input"/>
        <label>Label</label>
        <button class="c-btn  c-btn--secondary">Button</button>
    </div>
    <div class="c-field__message">
        Message here
    </div>
</div>
```

## Development

To extends, develop or contribute to this component, you're required to fork our main [repository](https://github.com/icarasia-/nitro-ui) and made a pull request.

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

## [0.0.0-beta] - 2019-10-08
### Added
- Initial setup
- Fixed CSS style for reorder the First and Last button
