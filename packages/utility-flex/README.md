# Nitro UI: Utility Flex

Utility Flex component for Nitro UI. Quickly manage the layout, alignment, and sizing of grid columns, navigation, components, and more with a full suite of responsive flexbox utilities. For more complex implementations, custom CSS may be necessary.

## Getting Started

Get latest version by installing via [NPM @nitro-ui/utility-flex](https://www.npmjs.com/package/@nitro-ui/utility-spacing):

```sh
npm install @nitro-ui/utility-flex
```

### Enable Flex behaviors

To make the flexbox enable apply `u-flex` class to create a flexbox container and transform direct child elements into flex items.

Note that the modifier that applied to Flex parent there will be 2x dashed `--`.
Note that the modifier that applied to Flex child  there will be 2x underscore `__`.

```html
<div class="u-flex">I am a flexbox container</div>
```

```html
<div class="u-inline-flex">I am an inline flexbox container</div>
```

Responsive variations class also exist for display `u-flex` and `u-inline-flex`

```html
.u-flex@desktop
.u-flex@portable
.u-flex@tablet
.u-flex@mobile

.u-inline-flex@desktop
.u-inline-flex@portable
.u-inline-flex@tablet
.u-inline-flex@mobile
```

### Direction

Use `.u-flex--row` or `u-direction-row` to set a horizontal direction (the browser default), or `.u-flex--row-reverse` or `u-direction-row-reverse` to start the horizontal direction from the opposite side.

```html
<div class="u-flex  u-flex--row">
  <div>Flex item 1</div>
  <div>Flex item 2</div>
  <div>Flex item 3</div>
</div>
<div class="u-flex  u-flex--row-reverse">
  <div>Flex item 1</div>
  <div>Flex item 2</div>
  <div>Flex item 3</div>
</div>
```

Use `.u-flex--column` or `.u-direction-column`  to set a vertical direction, or `.u-flex--column-reverse` or `u-direction-column-reverse` to start the vertical direction from the opposite side.

```html
<div class="u-flex  u-flex--column">
  <div>Flex item 1</div>
  <div>Flex item 2</div>
  <div>Flex item 3</div>
</div>
<div class="u-flex  u-flex--column-reverse">
  <div>Flex item 1</div>
  <div>Flex item 2</div>
  <div>Flex item 3</div>
</div>
```

Responsive variations also exist for flex direction.

```html
.u-flex--row / .u-direction-row
.u-flex--row@desktop / .u-direction-row@desktop
.u-flex--row@portable / .u-direction-row@portable
.u-flex--row@tablet / .u-direction-row@tablet
.u-flex--row@mobile / .u-direction-row@mobile

.u-flex--row-reverse / .u-direction-row-reverse
.u-flex--row-reverse@desktop / .u-direction-row-reverse@desktop
.u-flex--row-reverse@portable / .u-direction-row-reverse@portable
.u-flex--row-reverse@tablet / .u-direction-row-reverse@tablet
.u-flex--row-reverse@mobile / .u-direction-row-reverse@mobile

.u-flex--column / .u-direction-column
.u-flex--column@desktop / .u-direction-column@desktop
.u-flex--column@portable / .u-direction-column@portable
.u-flex--column@tablet / .u-direction-column@tablet
.u-flex--column@mobile / .u-direction-column@mobile

.u-flex--column-reverse / .u-direction-column-reverse
.u-flex--column-reverse@desktop / .u-direction-column-reverse@desktop
.u-flex--column-reverse@portable / .u-direction-column-reverse@portable
.u-flex--column-reverse@tablet / .u-direction-column-reverse@tablet
.u-flex--column-reverse@mobile / .u-direction-column-reverse@mobile
```

### Wrap

Change how flex items wrap in a flex container. Choose from no wrapping at all (the browser default) with `.u-flex--nowrap` or `.u-nowrap`, wrapping with `.u-flex--wrap` or `u-wrap`, or reverse wrapping with `.u-flex--wrap-reverse` or `u-wrap-reverse`.

```html
<div class="u-flex  u-flex--nowrap">
    ...
</div>
<div class="u-flex  u-flex--wrap">
    ...
</div>
<div class="u-flex  u-flex--wrap-reverse">
    ...
</div>
```

or

```html
<div class="u-flex  u-nowrap">
    ...
</div>
<div class="u-flex  u-wrap">
    ...
</div>
<div class="u-flex  u-wrap-reverse">
    ...
</div>
```

Responsive variations also exist for `flex-wrap`.

```html
.u-flex--nowrap / .u-nowrap
.u-flex--nowrap@desktop / .u-nowrap@desktop
.u-flex--nowrap@portable / .u-nowrap@portable
.u-flex--nowrap@tablet / .u-nowrap@tablet
.u-flex--nowrap@mobile / .u-nowrap@mobile

.u-flex--wrap / .u-wrap
.u-flex--wrap@desktop / .u-wrap@desktop
.u-flex--wrap@portable / .u-wrap@portable
.u-flex--wrap@tablet / .u-wrap@tablet
.u-flex--wrap@mobile / .u-wrap@mobile

.u-flex--wrap-reverse / .u-wrap-reverse
.u-flex--wrap-reverse@desktop / .u-wrap-reverse@desktop
.u-flex--wrap-reverse@portable / .u-wrap-reverse@portable
.u-flex--wrap-reverse@tablet / .u-wrap-reverse@tablet
.u-flex--wrap-reverse@mobile / .u-wrap-reverse@mobile

```

### Justify content

Use `u-flex--justify` utilities on flexbox containers to change the alignment of flex items on the main axis (the x-axis to start, y-axis if `flex-direction: column`). Choose from `start` (browser default), `end`, `center`, `between`, `around` or `evenly`.

```html
<div class="u-flex  u-flex--justify-start">...</div>
<div class="u-flex  u-flex--justify-end">...</div>
<div class="u-flex  u-flex--justify-center">...</div>
<div class="u-flex  u-flex--justify-between">...</div>
<div class="u-flex  u-flex--justify-around">...</div>
```
or

```html
<div class="u-flex  u-justify-start">...</div>
<div class="u-flex  u-justify-end">...</div>
<div class="u-flex  u-justify-center">...</div>
<div class="u-flex  u-justify-between">...</div>
<div class="u-flex  u-justify-around">...</div>
```

Responsive variations also exist for `u-flex--justify`.

```html
.u-flex--justify-start / .u-justify-content-start
.u-flex--justify-start@desktop / .u-justify-content-start@desktop
.u-flex--justify-start@portable / .u-justify-content-start@portable
.u-flex--justify-start@tablet / .u-justify-content-start@tablet
.u-flex--justify-start@mobile / .u-justify-content-start@mobile

.u-flex--justify-end / .u-direction-justify-end
.u-flex--justify-end@desktop / .u-justify-content-end@desktop
.u-flex--justify-end@portable / .u-justify-content-end@portable
.u-flex--justify-end@tablet / .u-justify-content-end@tablet
.u-flex--justify-end@mobile / .u-justify-content-end@mobile

.u-flex--justify-center / .u-justify-content-center
.u-flex--justify-center@desktop / .u-justify-content-center@desktop
.u-flex--justify-center@portable / .u-justify-content-center@portable
.u-flex--justify-center@tablet / .u-justify-content-center@tablet
.u-flex--justify-center@mobile / .u-justify-content-center@mobile

.u-flex--justify-between / .u-justify-content-between
.u-flex--justify-between@desktop / .u-justify-content-between@desktop
.u-flex--justify-between@portable / .u-justify-content-between@portable
.u-flex--justify-between@tablet / .u-justify-content-between@tablet
.u-flex--justify-between@mobile / .u-justify-content-between@mobile

.u-flex--justify-around / .u-justify-content-around
.u-flex--justify-around@desktop / .u-justify-content-around@desktop
.u-flex--justify-around@portable / .u-justify-content-around@portable
.u-flex--justify-around@tablet / .u-justify-content-around@tablet
.u-flex--justify-around@mobile / .u-justify-content-around@mobile

.u-flex--justify-evenly / .u-justify-content-evenly
.u-flex--justify-evenly@desktop / .u-justify-content-evenly@desktop
.u-flex--justify-evenly@portable / .u-justify-content-evenly@portable
.u-flex--justify-evenly@tablet / .u-justify-content-evenly@tablet
.u-flex--justify-evenly@mobile / .u-justify-content-evenly@mobile
```

### Align items

Use `u-flex--items` utilities on flexbox containers to change the alignment of flex items on the cross axis (the y-axis to start, x-axis if flex-direction: column). Choose from `start`, `end`, `center`, `baseline`, or `stretch` (browser default).

```html
<div class="u-flex  u-flex--items-start">...</div>
<div class="u-flex  u-flex--items-end">...</div>
<div class="u-flex  u-flex--items-center">...</div>
<div class="u-flex  u-flex--items-baseline">...</div>
<div class="u-flex  u-flex--items-stretch">...</div>
```

or

```html
<div class="u-flex  u-align-items-start">...</div>
<div class="u-flex  u-align-items-end">...</div>
<div class="u-flex  u-align-items-center">...</div>
<div class="u-flex  u-align-items-baseline">...</div>
<div class="u-flex  u-align-items-stretch">...</div>
```

Responsive variations also exist for `u-flex--items`.

```html
.u-flex--items-start / .u-align-items-start
.u-flex--items-start@desktop / .u-align-items-start@desktop
.u-flex--items-start@portable / .u-align-items-start@portable
.u-flex--items-start@tablet / .u-align-items-start@tablet
.u-flex--items-start@mobile / .u-align-items-start@mobile

.u-flex--items-end / .u-align-items-end
.u-flex--items-end@desktop / .u-align-items-end@desktop
.u-flex--items-end@portable / .u-align-items-end@portable
.u-flex--items-end@tablet / .u-align-items-end@tablet
.u-flex--items-end@mobile / .u-align-items-end@mobile

.u-flex--items-center / .u-align-items-center
.u-flex--items-center@desktop / .u-align-items-center@desktop
.u-flex--items-center@portable / .u-align-items-center@portable
.u-flex--items-center@tablet / .u-align-items-center@tablet
.u-flex--items-center@mobile / .u-align-items-center@mobile

.u-flex--items-baseline / .u-align-items-baseline
.u-flex--items-baseline@desktop / .u-align-items-baseline@desktop
.u-flex--items-baseline@portable / .u-align-items-baseline@portable
.u-flex--items-baseline@tablet / .u-align-items-baseline@tablet
.u-flex--items-baseline@mobile / .u-align-items-baseline@mobile

.u-flex--items-stretch / .u-align-items-stretch
.u-flex--items-stretch@desktop / .u-align-items-stretch@desktop
.u-flex--items-stretch@portable / .u-align-items-stretch@portable
.u-flex--items-stretch@tablet / .u-align-items-stretch@tablet
.u-flex--items-stretch@mobile / .u-align-items-stretch@mobile
```

### Align content

Use `u-flex--content-*` or `u-align-content-*` utilities on flexbox containers to align flex items together on the cross axis. Choose *  from `start` (browser default), `end`, `center`, `between`, `around`, or `stretch`. In order to see it, require `flex-wrap: wrap;` and increase the number of flex items.

Heads up! This property has no effect on single rows of flex items.

```html
<div class="u-flex u-flex--content-start  u-flex--wrap">
  ...
</div>

<div class="u-flex u-flex--content-end  u-flex--wrap">
  ...
</div>

<div class="u-flex u-flex--content-center  u-flex--wrap">
  ...
</div>

<div class="u-flex u-flex--content-between  u-flex--wrap">
  ...
</div>

<div class="u-flex u-flex--content-around  u-flex--wrap">
  ...
</div>

<div class="u-flex u-flex--content-stretch  u-flex--wrap">
  ...
</div>
```

or

```html
<div class="u-flex u-align-content-start  u-flex--wrap">
  ...
</div>

<div class="u-flex u-align-content-end  u-flex--wrap">
  ...
</div>

<div class="u-flex u-align-content-center  u-flex--wrap">
  ...
</div>

<div class="u-flex u-align-content-between  u-flex--wrap">
  ...
</div>

<div class="u-flex u-align-content-around  u-flex--wrap">
  ...
</div>

<div class="u-flex u-align-content-stretch  u-flex--wrap">
  ...
</div>
```

## Flex Child items utilities

### Align self

Use `u-flex__self` utilities on flexbox items to individually change their alignment on the cross axis (the y-axis to start, x-axis if `flex-direction: column`). Choose from the same options as align-items: `auto`, `start`, `end`, `center`, `baseline`, or `stretch` (browser default). Align self is a utilities class that apply to the Flex children thus the class modifier will be using `__`

The implementations
```html
<div class="u-flex">
    <div class="u-flex__self-end">Aligned end self</div>
</div>
```

```html
<div class="u-flex__self-auto">...</div>
<div class="u-flex__self-start">...</div>
<div class="u-flex__self-end">...</div>
<div class="u-flex__self-center">...</div>
<div class="u-flex__self-baseline">...</div>
<div class="u-flex__self-stretch">...</div>
```

or

```html
<div class="u-self-auto">...</div>
<div class="u-self-start">...</div>
<div class="u-self-end">...</div>
<div class="u-self-center">...</div>
<div class="u-self-baseline">...</div>
<div class="u-self-stretch">...</div>
```

Responsive variations also exist for `u-flex__self`.

```html
.u-flex__self-auto / .u-self-auto
.u-flex__self-auto@desktop / .u-self-auto@desktop
.u-flex__self-auto@portable / .u-self-auto@portable
.u-flex__self-auto@tablet / .u-self-auto@tablet
.u-flex__self-auto@mobile / .u-self-auto@mobile

.u-flex__self-start / .u-self-start
.u-flex__self-start@desktop / .u-self-start@desktop
.u-flex__self-start@portable / .u-self-start@portable
.u-flex__self-start@tablet / .u-self-start@tablet
.u-flex__self-start@mobile / .u-self-start@mobile

.u-flex__self-end / .u-self-end
.u-flex__self-end@desktop / .u-self-end@desktop
.u-flex__self-end@portable / .u-self-end@portable
.u-flex__self-end@tablet / .u-self-end@tablet
.u-flex__self-end@mobile / .u-self-end@mobile

.u-flex__self-center / .u-self-center
.u-flex__self-center@desktop / .u-self-center@desktop
.u-flex__self-center@portable / .u-self-center@portable
.u-flex__self-center@tablet / .u-self-center@tablet
.u-flex__self-center@mobile / .u-self-center@mobile

.u-flex__self-baseline / .u-self-baseline
.u-flex__self-baseline@desktop / .u-self-baseline@desktop
.u-flex__self-baseline@portable / .u-self-baseline@portable
.u-flex__self-baseline@tablet / .u-self-baseline@tablet
.u-flex__self-baseline@mobile / .u-self-baseline@mobile

.u-flex__self-stretch / .u-self-stretch
.u-flex__self-stretch@desktop / .u-self-stretch@desktop
.u-flex__self-stretch@portable / .u-self-stretch@portable
.u-flex__self-stretch@tablet / .u-self-stretch@tablet
.u-flex__self-stretch@mobile / .u-self-stretch@mobile
```

### Fill

Use the `.u-flex__fill` or `u-fill` class on a series of sibling elements to force them into widths equal to their content (or equal widths if their content does not surpass their border-boxes) while taking up all available horizontal space.

```html
<div class="u-flex bd-highlight">
  <div class="u-flex__fill">Flex item with a lot of content</div>
  <div class="u-flex__fill">Flex item</div>
  <div class="u-flex__fill">Flex item</div>
</div>
```

Responsive variations also exist for `u-flex__fill`.

```html
.u-flex__fill / .u-fill
.u-flex__fill@desktop / .u-fill@desktop
.u-flex__fill@portable / .u-fill@portable
.u-flex__fill@tablet / .u-fill@tablet
.u-flex__fill@mobile / .u-fill@mobile
```

### Grow and shrink

Use `.u-flex__grow-*` or `u-grow-*` utilities to toggle a flex item’s ability to grow to fill available space. In the example of 3 flex items, using `.u-flex__grow-1` elements for one item will take all available space it can while allowing the remaining two flex items their necessary space. Using `u-flex__grow-1` to all child elements will grow the width evenly. Available option is `1` and `0`.

```html
<div class="u-flex">
    <div class="u-flex__grow-1">Flex item</div>
    <div>Flex item</div>
    <div>Third flex item</div>
</div>
```

or

```html
<div class="u-flex">
  <div class="u-grow-1">Flex item</div>
  <div>Flex item</div>
  <div>Third flex item</div>
</div>
```

Use `.u-flex__shrink-*` or `u-shrink-*` utilities to toggle a flex item’s ability to shrink if necessary.

```html
<div class="u-flex">
    <div class="u-width-1">Flex item</div>
    <div class="u-flex__shrink-1">Flex item</div>  
</div>
```

or

```html
<div class="u-flex">
    <div class="u-width-1">Flex item</div>
    <div class="u-shrink-1">Flex item</div>  
</div>
```

Responsive variations also exist for `u-flex__grow` and `u-flex__shrink`.

```html
.u-flex__{grow|shrink}-1 / .u-{grow|shrink}-1
.u-flex__{grow|shrink}-1@desktop / .u-{grow|shrink}-1@desktop
.u-flex__{grow|shrink}-1@portable / .u-{grow|shrink}-1@portable
.u-flex__{grow|shrink}-1@tablet / .u-{grow|shrink}-1@tablet
.u-flex__{grow|shrink}-1@mobile / .u-{grow|shrink}-1@mobile

.u-flex__{grow|shrink}-0 / .u-{grow|shrink}-0
.u-flex__{grow|shrink}-0@desktop / .u-{grow|shrink}-0@desktop
.u-flex__{grow|shrink}-0@portable / .u-{grow|shrink}-0@portable
.u-flex__{grow|shrink}-0@tablet / .u-{grow|shrink}-0@tablet
.u-flex__{grow|shrink}-0@mobile / .u-{grow|shrink}-0@mobile
```

### Auto Margins

Flexbox can do some pretty awesome things when you mix flex alignments with `auto margins`. For more available properties for Nitro auto margins can check out [auto margins](https://www.npmjs.com/package/@nitro-ui/utility-spacing) and it supports responsive too.

Unfortunately, **IE10** and **IE11** do not properly support auto margins on flex items whose parent has a non-default justify-content value. See this [StackOverflow answer](https://stackoverflow.com/a/37535548) for more details.

```html
<div class="u-flex">
  <div class="u-margin-right-auto">Flex item</div>
  <div>Flex item</div>
  <div>Flex item</div>
</div>
```

### Order

Change the visual order of specific flex items with a handful of `order` utilities. We only provide options for making an item first or last, as well as a reset to use the DOM order. As order takes any integer value (e.g., 5), add custom CSS for any additional values needed. Choose from `0` to `12` or `first` and `last`.

```html
<div class="u-flex  u-flex--nowrap">
  <div class="u-order-3">First flex item</div>
  <div class="u-order-2">Second flex item</div>
  <div class="u-order-1">Third flex item</div>
</div>
```

Responsive variations also exist for `order`.

```html
.u-order-first
.u-order-last
.u-order-1
.u-order-2
.u-order-3
.u-order-4
.u-order-5
.u-order-6
.u-order-7
.u-order-8
.u-order-9
.u-order-10
.u-order-11
.u-order-12

.u-order-first@desktop
.u-order-last@desktop
.u-order-1@desktop
.u-order-2@desktop
.u-order-3@desktop
.u-order-4@desktop
.u-order-5@desktop
.u-order-6@desktop
.u-order-7@desktop
.u-order-8@desktop
.u-order-9@desktop
.u-order-10@desktop
.u-order-11@desktop
.u-order-12@desktop

.u-order-first@portable
.u-order-last@portable
.u-order-1@portable
.u-order-2@portable
.u-order-3@portable
.u-order-4@portable
.u-order-5@portable
.u-order-6@portable
.u-order-7@portable
.u-order-8@portable
.u-order-9@portable
.u-order-10@portable
.u-order-11@portable
.u-order-12@portable

.u-order-first@tablet
.u-order-last@tablet
.u-order-1@tablet
.u-order-2@tablet
.u-order-3@tablet
.u-order-4@tablet
.u-order-5@tablet
.u-order-6@tablet
.u-order-7@tablet
.u-order-8@tablet
.u-order-9@tablet
.u-order-10@tablet
.u-order-11@tablet
.u-order-12@tablet

.u-order-first@mobile
.u-order-last@mobile
.u-order-1@mobile
.u-order-2@mobile
.u-order-3@mobile
.u-order-4@mobile
.u-order-5@mobile
.u-order-6@mobile
.u-order-7@mobile
.u-order-8@mobile
.u-order-9@mobile
.u-order-10@mobile
.u-order-11@mobile
.u-order-12@mobile
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

## [0.0.0-beta] - 2019-08-23
### Added
- Initial setup for spacing
