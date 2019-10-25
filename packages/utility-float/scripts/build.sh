#!/usr/bin/env bash
set -e

NITRO_VERSION=$(node -p "require('./package.json').version")
PACKAGE_NAME=$(node -p "require('./package.json').name")
FILE_NAME="float"

echo "Building ${PACKAGE_NAME} ${NITRO_VERSION}"
echo ''

# Cleanup
rm -rf dist

echo 'Compile SASS...'
node-sass --include-path=node_modules \
          --source-map=dist/$FILE_NAME.css.map \
          src/$FILE_NAME.scss \
          dist/$FILE_NAME.css
echo 'Done.'
echo ''

echo 'Compile SASS (Compress version)...'
node-sass --include-path=node_modules \
          --output-style=compressed \
          --source-map=dist/$FILE_NAME.css.min.map \
          src/$FILE_NAME.scss \
          dist/$FILE_NAME.min.css
echo 'Done.'
echo ''

echo 'Done building dist.'
