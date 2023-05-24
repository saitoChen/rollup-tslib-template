/*
 * @Author: chenjianfeng chenjianfeng9335@gmail.com
 * @Date: 2023-05-16 22:34:43
 * @Description: 
 */
import sum, { SumFn } from './utils/index.js'
export type { SumFn } from './utils/index.js'
export const complexCalculate: SumFn = (num1:number, num2:number) => {
    const sumRes = sum(num1, num2)
    return sumRes + 1
}