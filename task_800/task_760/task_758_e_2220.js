﻿/**
Переворот числа x — это выбор бита в двоичном представлении числа x и его переворачивание с 0 на 1 или с 1 на 0.
Например, для x = 7 двоичное представление равно 111, и мы можем выбрать любой бит (включая любые ведущие нули, которые не показаны) и перевернуть его. Мы можем перевернуть первый бит справа, чтобы получить 110, перевернуть второй бит справа, чтобы получить 101, перевернуть пятый бит справа (ведущий ноль), чтобы получить 10111, и т. д.
Учитывая два целых числа, начало и цель, верните минимальное количество переворотов битов, чтобы преобразовать начало в цель.
 */

let start = 3;
let goal = 4;

let minBitFlips = function (start, goal) {
    const len = Math.max(start.toString(2).length, goal.toString(2).length);
    let cnt = 0;
    start = start.toString(2).padStart(len, '0');
    goal = goal.toString(2).padStart(len, '0');

    for (let i = 0; i < len; i++) {
        if (start[i] !== goal[i]) {
            cnt++;
        }
    }

    return cnt;
};

console.log(minBitFlips(start, goal));
