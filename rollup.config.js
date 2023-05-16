import path from 'path' 
import { readFileSync } from 'fs'
import commonjs from '@rollup/plugin-commonjs' 
import resolve from '@rollup/plugin-node-resolve'
import json from '@rollup/plugin-json'

const pkg = JSON.parse(
    readFileSync('./package.json', { encoding: 'utf-8' }),
)

export default {
    input: 'src/index.ts',
    output: [
        {
            file: pkg.main,
            format: 'cjs'
        }
    ],
    plugins: [
        json(),
        commonjs(),
        resolve()
    ]
}