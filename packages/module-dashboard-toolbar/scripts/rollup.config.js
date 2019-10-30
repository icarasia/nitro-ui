import path from 'path';
import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import external from 'rollup-plugin-peer-deps-external'
import minify from 'rollup-plugin-babel-minify';
import { dependencies } from '../package.json';

const base = path.resolve( __dirname, '..' );
const src = path.resolve( base, 'src' );
const dist = path.resolve( base, 'dist' );
const externals = [ ...Object.keys( dependencies ) ];

export default {
    input: `${src}/js/toolbar.js`,
    external: externals,
    output: [
        {
            file: `${dist}/js/toolbar.cjs.js`,
            format: 'cjs',
            sourcemap: false
        },
        {
            file: `${dist}/js/toolbar.esm.js`,
            format: 'es',
            sourcemap: false
        }
    ],
    plugins: [
        minify(),
        external(),
        resolve( {
            extensions: [ '.js', '.es6' ],
        } ),
        commonjs(),
        babel( {
            exclude: 'node_modules/**',
            runtimeHelpers: true,
            sourceMap: true,
        } )
    ]
}
