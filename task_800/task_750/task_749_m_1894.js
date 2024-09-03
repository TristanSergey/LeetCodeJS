﻿/**
В классе есть n учеников, пронумерованных от 0 до n - 1. Учитель дает каждому ученику задачу, начиная с ученика под номером 0, затем с ученика под номером 1 и так далее, пока учитель не дойдет до ученика под номером n - 1. После этого учитель снова начинает процесс, начиная с ученика под номером 0.
Вам дан целочисленный массив мела с индексом 0 и целое число k. Изначально имеется k кусочков мела. Когда ученику под номером i дается задача для решения, он будет использовать куски мела[i] для решения этой задачи. Однако если текущее количество кусочков мела строго меньше, чем chalk[i], то ученику с номером i будет предложено заменить мел.
Верните индекс ученика, который заменит кусочки мела.
 */

let chalk = [5, 1, 5];
let k = 22;

let chalkReplacer = function (chalk, k) {
    let sum = chalk.reduce((acc, item) => acc + item, 0);
    let rem = k % sum;
    let i = 0;
    sum = 0;
    while (rem >= sum) {
        sum += chalk[i];
        i++;
    }
    return i - 1;
};

console.log(chalkReplacer(chalk, k));
