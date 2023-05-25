import { readFileSync } from 'fs'
import commonjs from '@rollup/plugin-commonjs' 
import ts from "@rollup/plugin-typescript"
import resolve from '@rollup/plugin-node-resolve'
import json from '@rollup/plugin-json'
import { outputFn } from './config.js'
import terser from '@rollup/plugin-terser';
import { babel } from '@rollup/plugin-babel';

const pkg = JSON.parse(
    readFileSync('./package.json', { encoding: 'utf-8' }),
)

const opts = { cjs: true, esm: true, umd: false }
const output = outputFn(opts)

export default {
    input: 'src/index.ts',
    output: output(),
    plugins: [
        json(),
        // commonjs must before rollup/plugin-babel
        commonjs(),
        resolve(),
        ts({
            declaration: true,
            declarationMap: true,
            isolatedModules: true,
            filterRoot: process.cwd(),
            tsconfig: './tsconfig.json',
        }),
        babel({
            babelHelpers: 'runtime',
            exclude: 'node_modules/**',
            extensions: [
                '.ts',
            ],
        }),
        terser()
    ]
}