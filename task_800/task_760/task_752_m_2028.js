﻿/**
У вас есть наблюдения за n + m бросками шестигранных игральных костей, каждая грань которых пронумерована от 1 до 6. n наблюдений пропали, и у вас есть наблюдения только за m бросками. К счастью, вы также рассчитали среднее значение n + m бросков.
Вам дан целочисленный массив Rolls длиной m, где Rolls[i] — значение i-го наблюдения. Вам также даны два целых числа: среднее значение и n.
Возвращает массив длины n, содержащий недостающие наблюдения, такой, что среднее значение n + m рулонов является точно средним. Если существует несколько правильных ответов, верните любой из них. Если такого массива не существует, верните пустой массив.
Среднее значение набора из k чисел — это сумма чисел, разделенная на k.
Обратите внимание, что среднее значение является целым числом, поэтому сумма бросков n + m должна делиться на n + m.
 */

let rolls = [3, 2, 3, 4];
let mean = 4;
let n = 2;

let missingRolls = function (rolls, mean, n) {
    const sum = rolls.reduce((acc, item) => acc + item, 0);
    const len = rolls.length;
    const k = len + n;
    const x = mean * k - sum;

    if (x < n || n * 6 < x) return [];

    let base = Math.floor(x / n);
    let remainder = x % n;

    let result = new Array(n).fill(base);
    for (let i = 0; i < remainder; i++) {
        result[i] += 1;
    }

    return result;
};

console.log(missingRolls(rolls, mean, n));
