#!/usr/bin/env bash
set -e

NITRO_VERSION=$(node -p "require('./package.json').version")

echo "Building @nitro-ui/utility-display ${NITRO_VERSION}"
echo ''

# Cleanup
rm -rf dist

echo 'Compile SASS...'
node-sass --include-path=node_modules \
          --source-map=dist/utility-flex.css.map \
          src/utility-flex.scss \
          dist/utility-flex.css
echo 'Done.'
echo ''

echo 'Compile SASS (Compress version)...'
node-sass --include-path=node_modules \
          --output-style=compressed \
          --source-map=dist/utility-flex.css.min.map \
          src/utility-flex.scss \
          dist/utility-flex.min.css
echo 'Done.'
echo ''

echo 'Done building dist.'
