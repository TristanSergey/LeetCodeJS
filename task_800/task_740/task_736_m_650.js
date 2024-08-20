﻿/**
На экране блокнота есть только одна буква «А». Вы можете выполнить одну из двух операций в этом блокноте для каждого шага:
Копировать все: вы можете скопировать все символы, присутствующие на экране (частичное копирование не допускается).
Вставить: Вы можете вставить символы, скопированные в последний раз.
Учитывая целое число n, верните минимальное количество операций, чтобы символ «А» появился на экране ровно n раз.
 */

n = 3;

let minSteps = function (n) {
    const dp = Array.from({ length: n + 1 }).fill(1000);
    dp[1] = 0;
    for (let i = 2; i <= n; i++) {
        for (let j = 1; j <= i / 2; j++) {
            if (i % j == 0) {
                dp[i] = Math.min(dp[i], dp[j] + i / j);
            }
        }
    }

    return dp[n];
};

console.log(minSteps(n));
