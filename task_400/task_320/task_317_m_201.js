﻿// Учитывая два целых числа слева и справа, которые представляют диапазон[лево, право], 
// верните побитовое И всех чисел в этом диапазоне включительно.
// 201


left = 5, right = 7
//left = 5, right = 1000012277
//left = 1, right = 2147483647
var rangeBitwiseAnd = function (left, right) {

    let shift = 0;
    while (left < right) {
        left >>= 1; // Сдвигаем биты вправо на 1
        console.log(left)

        right >>= 1;
        console.log(right)
        shift++;
        console.log(shift)
    }
    console.log(left)
    return left << shift; // Сдвигаем биты обратно влево на shift позиций
};



console.log(rangeBitwiseAnd(left, right))
