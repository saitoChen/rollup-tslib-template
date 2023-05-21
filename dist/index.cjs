'use strict';

const sum = (a, b) => a + b;

/*
 * @Author: chenjianfeng chenjianfeng9335@gmail.com
 * @Date: 2023-05-16 22:34:43
 * @Description:
 */
const complexCalculate = (num1, num2) => {
    const sumRes = sum(num1, num2);
    return sumRes + 1;
};

exports.complexCalculate = complexCalculate;
