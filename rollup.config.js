/*
 * @Author: chenjianfeng chenjianfeng9335@gmail.com
 * @Date: 2023-05-16 22:30:31
 * @Description: 
 */
import { readFileSync } from 'fs'
import commonjs from '@rollup/plugin-commonjs' 
import ts from "@rollup/plugin-typescript"
import resolve from '@rollup/plugin-node-resolve'
import json from '@rollup/plugin-json'
import { outputFn } from '/config.ts'

const pkg = JSON.parse(
    readFileSync('./package.json', { encoding: 'utf-8' }),
)

const output = outputFn()

export default {
    input: 'src/index.ts',
    output: output,
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