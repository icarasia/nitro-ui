# Nitro UI: Component > Alert

Alert component for Nitro UI.

## Getting Started

Get latest version by installing via [NPM @nitro-ui/component-alert](https://www.npmjs.com/package/@nitro-ui/component-alert):

```sh
npm install @nitro-ui/component-alert
```

Include this stylesheet code into your site:

```html
<link rel="stylesheet" href="dist/component-alert.min.css" />
```

## Usage:

Example with `<div>` tag:
info
tips
success
error
warning


Using Icon
```html
<!--c-alert--info-->
<div class="c-alert  c-alert--info">
    <div class="c-alert__left">
        <span class="icon  icon--20  icon--info"></span>
    </div>

    <div class="c-alert__body">
        This is info alert with an <a href="#">example link</a>
    </div>
    <a href="#" class="c-alert__close  icon  icon--16  icon--close" data-dismiss="alert"></a>
</div>

<!--c-alert--tips-->
<div class="c-alert  c-alert--tips">
    <div class="c-alert__left">
        <span class="icon  icon--20  icon--tips"></span>
    </div>

    <div class="c-alert__body">
        This is tips alert with an <a href="#">example link</a>
    </div>
    <a href="#" class="c-alert__close  icon  icon--16  icon--close" data-dismiss="alert"></a>
</div>

<!--c-alert--success-->
<div class="c-alert  c-alert--success">
    <div class="c-alert__left">
        <span class="icon  icon--20  icon--check-circle"></span>
    </div>

    <div class="c-alert__body">
        This is success alert with an <a href="#">example link</a>
    </div>
    <a href="#" class="c-alert__close  icon  icon--16  icon--close" data-dismiss="alert"></a>
</div>

<!--c-alert--error-->
<div class="c-alert  c-alert--error">
    <div class="c-alert__left">
        <span class="icon  icon--20  icon--error"></span>
    </div>

    <div class="c-alert__body">
        This is error alert with an <a href="#">example link</a>
    </div>
    <a href="#" class="c-alert__close  icon  icon--16  icon--close" data-dismiss="alert"></a>
</div>

<!--c-alert--warning-->
<div class="c-alert  c-alert--warning">
    <div class="c-alert__left">
        <span class="icon  icon--20  icon--warning"></span>
    </div>

    <div class="c-alert__body">
        This is warning alert with an <a href="#">example link</a>
    </div>
    <a href="#" class="c-alert__close  icon  icon--16  icon--close" data-dismiss="alert"></a>
</div>
```

Using SVG Icon
```html
<!--c-alert--info-->
<div class="c-alert  c-alert--info">
    <div class="c-alert__left">
        <svg class="icon-svg  icon-svg--20">
            <use xlink:href="/YOUR_FOLDER/spritemap.svg#icon--info"></use>
        </svg>
    </div>

    <div class="c-alert__body">
        This is info alert with an <a href="#">example link</a>
    </div>
    <a href="#" class="c-alert__close" data-dismiss="alert">
        <svg class="icon-svg  icon-svg--16">
            <use xlink:href="/YOUR_FOLDER/spritemap.svg#icon--close"></use>
        </svg>
    </a>
</div>

<!--c-alert--tips-->
<div class="c-alert  c-alert--tips">
    <div class="c-alert__left">
        <svg class="icon-svg  icon-svg--20">
            <use xlink:href="/YOUR_FOLDER/spritemap.svg#icon--tips"></use>
        </svg>
    </div>

    <div class="c-alert__body">
        This is tips alert with an <a href="#">example link</a>
    </div>
    <a href="#" class="c-alert__close" data-dismiss="alert">
        <svg class="icon-svg  icon-svg--16">
            <use xlink:href="/YOUR_FOLDER/spritemap.svg#icon--close"></use>
        </svg>
    </a>
</div>

<!--c-alert--success-->
<div class="c-alert  c-alert--success">
    <div class="c-alert__left">
        <svg class="icon-svg  icon-svg--20">
            <use xlink:href="/YOUR_FOLDER/spritemap.svg#icon--check-circle"></use>
        </svg>
    </div>

    <div class="c-alert__body">
        This is success alert with an <a href="#">example link</a>
    </div>
    <a href="#" class="c-alert__close" data-dismiss="alert">
        <svg class="icon-svg  icon-svg--16">
            <use xlink:href="/YOUR_FOLDER/spritemap.svg#icon--close"></use>
        </svg>
    </a>
</div>

<!--c-alert--error-->
<div class="c-alert  c-alert--error">
    <div class="c-alert__left">
        <svg class="icon-svg  icon-svg--20">
            <use xlink:href="/YOUR_FOLDER/spritemap.svg#icon--error"></use>
        </svg>
    </div>

    <div class="c-alert__body">
        This is error alert with an <a href="#">example link</a>
    </div>
    <a href="#" class="c-alert__close" data-dismiss="alert">
        <svg class="icon-svg  icon-svg--16">
            <use xlink:href="/YOUR_FOLDER/spritemap.svg#icon--close"></use>
        </svg>
    </a>
</div>

<!--c-alert--warning-->
<div class="c-alert  c-alert--warning">
    <div class="c-alert__left">
        <svg class="icon-svg  icon-svg--20">
            <use xlink:href="/YOUR_FOLDER/spritemap.svg#icon--warning"></use>
        </svg>
    </div>

    <div class="c-alert__body">
        This is warning alert with an <a href="#">example link</a>
    </div>
    <a href="#" class="c-alert__close" data-dismiss="alert">
        <svg class="icon-svg  icon-svg--16">
            <use xlink:href="/YOUR_FOLDER/spritemap.svg#icon--close"></use>
        </svg>
    </a>
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
