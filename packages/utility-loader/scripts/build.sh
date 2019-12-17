#!/usr/bin/env bash
set -e

NITRO_VERSION=$(node -p "require('./package.json').version")
PACKAGE_NAME=$(node -p "require('./package.json').name")
FILE_NAME="loader"

echo "Building ${PACKAGE_NAME} ${NITRO_VERSION}"
echo ''

# Cleanup
rm -rf dist

echo 'Compile SASS...'
node-sass --include-path=node_modules \
          --source-map=dist/css/$FILE_NAME.css.map \
          src/scss/$FILE_NAME.scss \
          dist/css/$FILE_NAME.css
echo 'Done.'
echo ''

echo 'Compile SASS (Compress version)...'
node-sass --include-path=node_modules \
          --output-style=compressed \
          --source-map=dist/css/$FILE_NAME.css.min.map \
          src/scss/$FILE_NAME.scss \
          dist/css/$FILE_NAME.min.css
echo 'Done.'
echo ''

echo 'Done building dist.'
