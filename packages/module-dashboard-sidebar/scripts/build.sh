#!/usr/bin/env bash
set -e

NITRO_VERSION=$(node -p "require('./package.json').version")
PACKAGE_NAME=$(node -p "require('./package.json').name")
FILE_NAME="sidebar"

echo "Building ${PACKAGE_NAME} ${NITRO_VERSION}"
echo ''

echo 'Cleanup (remove dist and build-temp dir)...'
rm -rf dist
rm -rf build-temp
echo 'Done.'
echo ''

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

echo 'Rolling up...'
rollup -c scripts/rollup.config.js
echo 'Done.'
echo ''

echo 'Build Bundle JS...'
node scripts/build-bundle.js;
cp build-temp/$FILE_NAME-bundle.js dist/js/$FILE_NAME-bundle.js
echo 'Done.'
echo ''

echo 'Minify BUNDLE JS...'
terser dist/js/$FILE_NAME-bundle.js \
       --compress typeofs=false \
       --mangle --comments "/^!/" \
       --output dist/js/$FILE_NAME-bundle.min.js
echo 'Done.'
echo ''

echo 'Minify CJS JS...'
terser dist/js/$FILE_NAME.cjs.js \
       --compress typeofs=false \
       --mangle --comments "/^!/" \
       --output dist/js/$FILE_NAME.cjs.min.js
echo 'Done.'
echo ''

echo 'Minify ESM JS...'
terser dist/js/$FILE_NAME.esm.js \
       --compress typeofs=false \
       --mangle --comments "/^!/" \
       --output dist/js/$FILE_NAME.esm.min.js
echo 'Done.'
echo ''

echo 'Done building dist.'
