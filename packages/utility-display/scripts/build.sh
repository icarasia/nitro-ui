#!/usr/bin/env bash
set -e

NITRO_VERSION=$(node -p "require('./package.json').version")

echo "Building @nitro-ui/utility-display ${NITRO_VERSION}"
echo ''

# Cleanup
rm -rf dist

echo 'Compile SASS...'
node-sass --include-path=node_modules \
          --source-map=dist/utility-display.css.map \
          src/utility-display.scss \
          dist/utility-display.css
echo 'Done.'
echo ''

echo 'Compile SASS (Compress version)...'
node-sass --include-path=node_modules \
          --output-style=compressed \
          --source-map=dist/utility-display.css.min.map \
          src/utility-display.scss \
          dist/utility-display.min.css
echo 'Done.'
echo ''

echo 'Done building dist.'
