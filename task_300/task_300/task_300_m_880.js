﻿// Вам дана закодированная строка s. Чтобы декодировать строку на ленту, 
// закодированная строка считывается по одному символу и выполняются следующие шаги:
// Если прочитанный символ представляет собой букву, эта буква записывается на ленту.
// Если прочитанный символ представляет собой цифру d, 
// вся текущая лента повторно записывается d — всего еще 1 раз.
// Учитывая целое число k, верните k - ю букву(с индексом 1) в декодированной строке.
// 880

s = "leet2code3", k = 10
//s = "a2345678999999999999999", k = 1
//s = 'ha22'
//s = "y959q969u3hb22odq595", k = 222280369
var decodeAtIndex = function (s, k) {

    let length = 0;
    let i = 0;

    while (length < k) {
        if (!/[a-z]/.test(s[i])) {

            length *= s[i];
        } else {
            length++;
        }
        i++;
    }

    for (let j = i - 1; j >= 0; j--) {
        if (!/[a-z]/.test(s[j])) {
            console.log(Number(s[j]))
            length /= s[j];
            k %= length;
        } else {
            if (k === 0 || k === length) {
                return s[j];
            }
            length--;
        }
    }

    return "";

};

console.log(decodeAtIndex(s, k))



















// let length = 0; // Инициализируем переменную для отслеживания текущей длины строки
// let answerStr = ''; // Инициализируем пустую декодированную строку

// for (let i = 0; i < s.length; i++) {
//     // const char = s.charAt(i);

//     if (/[a-z]/.test(s[i])) {

//         // Если символ - буква, добавляем его к декодированной строке
//         answerStr += s[i];
//         length++;
//     } else {
//         // Если символ - цифра, умножаем текущую декодированную строку на это число
//         const frequence = parseInt(s[i]);
//         answerStr = answerStr.repeat(frequence);
//         length *= frequence;
//     }

//     // Если текущая длина больше или равна k, завершаем цикл
//     if (length >= k) break;
// }

// // Возвращаем k-ю букву (с индексом 1) из декодированной строки
// return answerStr[k - 1];