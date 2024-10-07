﻿/*
Учитывая целое число n, верните все числа в диапазоне [1, n], отсортированные в лексикографическом порядке.
Вы должны написать алгоритм, который работает за время O(n) и использует дополнительное пространство O(1).
*/
let n = 13;
let lexicalOrder = function (n) {
    const result = [];
    let current = 1;

    for (let i = 0; i < n; i++) {
        result.push(current);

        // Пробуем двигаться к следующему "дочернему" числу (например, от 1 к 10)
        if (current * 10 <= n) {
            current *= 10;
        } else {
            // Если не можем перейти к "дочернему" числу, увеличиваем текущее число
            // Если последнее число оканчивается на 9 или следующее число превышает n,
            // поднимаемся на уровень выше.
            while (current % 10 === 9 || current + 1 > n) {
                current = Math.floor(current / 10);
            }
            current++;
        }
    }

    return result;
};

console.log(lexicalOrder(n));