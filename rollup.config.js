import { readFileSync } from 'fs'
import commonjs from '@rollup/plugin-commonjs' 
import ts from "@rollup/plugin-typescript"
import resolve from '@rollup/plugin-node-resolve'
import json from '@rollup/plugin-json'
import { outputFn } from './config.js'

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
        commonjs(),
        resolve(),
        ts({
            declaration: true,
            declarationDir: "./dist"
        })
    ]
}