# Nitro UI: Component > Tab

Tab component for Nitro UI.

## Getting Started

Get latest version by installing via [NPM @nitro-ui/component-tab](https://www.npmjs.com/package/@nitro-ui/component-tab):

```sh
npm install @nitro-ui/component-tab
```

Include this stylesheet code into your site:

```html
<link rel="stylesheet" href="dist/tab.min.css" />
```

## Usage:

Nitro tab is the extended version of Boostrap 4 Tab. Nitro tab uses `c-tab` class for parent and `c-tab__item` for the children. Add `data-toggle="tab"` to the c-tab__item for it to work. Active tab will added `is--active` class when it activated.

Dynamic tabbed interfaces, as described in the WAI ARIA Authoring Practices, require `role="tablist", role="tab", role="tabpanel"`, and additional aria- attributes in order to convey their structure, functionality and current state to users of assistive technologies (such as screen readers).

### Normal tab
```html
<div class="c-tab" role="tablist">
    <a class="c-tab__item  is--active" data-toggle="tab" href="#nav-1" role="tab" aria-selected="true" aria-controls="nav-1">
        <span class="fas fa-award  mr-2"></span><!-- with font awesome-->
        <span>Shortlist</span>
    </a>
    <a class="c-tab__item" data-toggle="tab" href="#nav-2" role="tab" aria-selected="false" aria-controls="nav-2">        
        <span>Inbox</span>
    </a>
    <a class="c-tab__item" data-toggle="tab" href="#nav-3" role="tab" aria-selected="false" aria-controls="nav-3">
        <!-- with svg icon-->       
        <svg class="icon-svg  icon-svg--24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#000000"><path d="M 5 3 C 3.895 3 3 3.895 3 5 L 3 6 L 3 7 L 3 19 C 3 20.105 3.895 21 5 21 L 14.171875 21 C 14.723875 21 15.171875 20.552 15.171875 20 C 15.171875 19.448 14.724875 19 14.171875 19 L 5 19 L 5 7 L 19 7 L 18.998047 14.171875 C 18.998047 14.723875 19.446047 15.171875 19.998047 15.171875 C 20.550047 15.171875 20.998047 14.723875 20.998047 14.171875 L 20.998047 7 L 21 7 L 21 5 C 21 3.895 20.105 3 19 3 L 5 3 z M 7.5 10 C 7.224 10 7 10.224 7 10.5 L 7 11.5 C 7 11.776 7.224 12 7.5 12 L 8.5 12 C 8.776 12 9 11.776 9 11.5 L 9 10.5 C 9 10.224 8.776 10 8.5 10 L 7.5 10 z M 12 10 C 11.448 10 11 10.448 11 11 C 11 11.552 11.448 12 12 12 L 16 12 C 16.552 12 17 11.552 17 11 C 17 10.448 16.552 10 16 10 L 12 10 z M 7.5 14 C 7.224 14 7 14.224 7 14.5 L 7 15.5 C 7 15.776 7.224 16 7.5 16 L 8.5 16 C 8.776 16 9 15.776 9 15.5 L 9 14.5 C 9 14.224 8.776 14 8.5 14 L 7.5 14 z M 12 14 C 11.448 14 11 14.448 11 15 C 11 15.552 11.448 16 12 16 L 13 16 L 13 14 L 12 14 z M 15 15 L 15 17 L 20.146484 22.146484 L 22.146484 20.146484 L 17 15 L 15 15 z M 22.853516 20.853516 L 20.853516 22.853516 L 21.853516 23.853516 C 22.048516 24.048516 22.365547 24.048516 22.560547 23.853516 L 23.853516 22.560547 C 24.048516 22.364547 24.048516 22.048516 23.853516 21.853516 L 22.853516 20.853516 z" fill="#000000"/>
        <span>Chat</span>
    </a>
</div>

<div class="c-tab-content">
    <div class="c-tab__pane  is--active" id="nav-1">
        <p>..Content tab..</p>
    </div>
    <div class="c-tab__pane" id="nav-2">
        <p>..Content tab..</p>
    </div>
    <div class="c-tab__pane" id="nav-3">
        <p>..Content tab..</p>
    </div>
</div>
```

**Justified tab**

To make the tab become wide and taking full horizontal space add `c-tab--justified` to `c-tab`.

```html
<div class="c-tab  c-tab--justified" role="tablist">
    ...
```


### Button tab

Nitro Tab also support button style. Button component already defined as tab dependencies for it to support button style. Add `c-tab--buttons` class to `c-tab`.

```html
<div class="c-tab  c-tab--buttons" role="tablist">
    <a data-toggle="tab" class="c-tab__item  c-btn  c-btn--secondary-outline" href="#sample-tab-content-2-1" role="tab" aria-controls="sample-tab-content-2-1"  aria-selected="false">
        <span>Shortlist</span>
    </a>
    <a data-toggle="tab" class="c-tab__item  c-btn  c-btn--secondary-outline" href="#sample-tab-content-2-2" role="tab" aria-controls="sample-tab-content-2-2"  aria-selected="false">
        <span>Inbox</span>
    </a>
    <a data-toggle="tab" class="c-tab__item is--active  c-btn  c-btn--secondary-outline" href="#sample-tab-content-2-3" role="tab" aria-controls="sample-tab-content-2-3" aria-selected="true">
        <span>Chat</span>
    </a>
</div>

<div class="c-tab-content mb-5">
    <div class="c-tab__pane" id="sample-tab-content-2-1">
        <p>..Content tab..</p>
    </div>
    <div class="c-tab__pane" id="sample-tab-content-2-2">
        <p>..Content tab..</p>
    </div>
    <div class="c-tab__pane is--active" id="sample-tab-content-2-3">
        <p>..Content tab..</p>
    </div>
</div>
```

**Justified Button tab**

To make the tab buttons become wide and taking full horizontal space add `c-tab--justified` to `c-tab`.

```html
<div class="c-tab  c-tab--buttons  c-tab--justified" role="tablist">
    ...
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
