﻿// Складываем стаканы в пирамидку, где в первом ряду 1 стакан, 
// во втором ряду 2 стакана и так до 100 - го ряда.
// Каждый бокал вмещает одну чашку шампанского.
// Затем в первый верхний бокал наливают немного шампанского.
// Когда самый верхний стакан полон, вся вылитая лишняя жидкость 
// одинаково упадет в стакан сразу слева и справа от него.
// Когда эти бокалы наполнятся, излишки шампанского упадут 
// поровну слева и справа от этих бокалов и так далее. 
// (Из бокала в нижнем ряду излишки шампанского упали на пол.)
// Например, после того, как налита одна чашка шампанского, 
// самый верхний бокал оказывается полным.После того как налиты 
// две чашки шампанского, два бокала второго ряда оказываются 
// наполовину полными.После того, как будут налиты три чашки 
// шампанского, эти две чашки наполняются — всего теперь осталось 
// 3 полных бокала.После того, как налиты четыре чашки шампанского, 
// в третьем ряду средний бокал оказывается наполовину полным, 
// а два внешних бокала — на четверть, как показано на рисунке ниже.
// Теперь, налив несколько чашек шампанского с неотрицательным целым числом, 
// верните, насколько полон j - й бокал в i - й строке(оба i и j имеют индекс 0).
// 799

poured = 1, query_row = 1, query_glass = 1
//poured = 2, query_row = 1, query_glass = 1
//poured = 100000009, query_row = 33, query_glass = 17
poured = 1000000000, query_row = 99, query_glass = 99 //0
poured = 200, query_row = 61, query_glass = 17

var champagneTower = function (poured, query_row, query_glass) {

    // Создаем двумерный массив для представления бокалов
    //const pyramid = new Array.from({ length: 101 })(() => array(101).fill(0));
    const pyramid = Array.from({ length: 101 }, () => Array(101).fill(0));
    //const dp = Array.from({ length:  }).fill();
    // Начинаем с первого бокала в первом ряду
    pyramid[0][0] = poured;
    //if (query_glass > 50) query_glass = Math.floor(query_glass / 2) + 1
    //if (query_row > 50) query_row = Math.floor(query_row / 2) + 1
    // Заполняем бокалы согласно правилам
    for (let i = 0; i < 100; i++) {
        for (let j = 0; j <= i; j++) {
            const leaked = (pyramid[i][j] - 1) / 2; // Излишек, который уходит влево и вправо
            if (leaked > 0) {
                pyramid[i + 1][j] += leaked;
                pyramid[i + 1][j + 1] += leaked;
            }
        }
    }

    // Возвращаем значение j-го бокала в i-й строке
    return Math.min(1, pyramid[query_row][query_glass]);


};


console.log(champagneTower(poured, query_row, query_glass))