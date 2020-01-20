# Nitro UI: Step

Step component for Nitro UI.

## Getting Started

Get latest version by installing via [NPM @nitro-ui/component-step](https://www.npmjs.com/package/@nitro-ui/component-step):

```sh
npm install @nitro-ui/component-step
```

Include this stylesheet code into your site:

```html
<link rel="stylesheet" href="dist/step.min.css" />
```

## Usage:

Step component used to indicate step or progress on the current page. Desktop and mobile will have different UI style. It will adapt automatically into mobile.

Example markup:

```html
<div class="c-step  u-margin-top-lg u-margin-bottom-lg u-margin-bottom-lg@mobile">
    <a href="javascript:void(0)" class="c-step__item is--success">
        <div class="c-step__indicator">
            <span class="c-step__number">1</span>
        </div>
        Ad Detail
    </a>
    <a href="javascript:void(0)" class="c-step__item is--active">
        <div class="c-step__indicator">
            <span class="c-step__number">2</span>
        </div>
        Review
    </a>
    <a href="javascript:void(0)" class="c-step__item is--disabled">
        <div class="c-step__indicator">
            <span class="c-step__number">3</span>
        </div>
        Publish
    </a>
</div>
```

The progress of each status of step is differentiate by class name of `is--success`, `is--active` and `is--disabled`

Use `is--success` when the step is finish and done
Use `is--active` for current active steps
Use `is--disabled` for step that hasn't yet reach


### Step positioning & sizes

Step support sizes of small,medium and large. Use this classname `c-step--sm`, `c-step--md` and `c-step--lg` by adding to the `c-step`. If the step require to expand on the container width or any grid sizes, these sizes classname not require to be define.

Arrangement that step support is `c-step--center` (to center align the step bar) and `c-step--right` (to push step bar to right).


### Responsive support

Step support responsive classname. By default it supports `@mobile`. To turn on support for `@mobile-tablet` please overwrite the `$use-step-mobile-tablet` value to `true` in your sass project.

```html
<div class="c-step  c-step--sm@mobile"></div>
<div class="c-step  c-step--md@mobile"></div>
<div class="c-step  c-step--lg@mobile"></div>
<div class="c-step  c-step--center@mobile"></div>
<div class="c-step  c-step--right@mobile"></div>
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

## [0.0.0-beta] - 2019-07-18
### Added
- Initial setup
