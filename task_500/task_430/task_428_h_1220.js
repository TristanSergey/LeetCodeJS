﻿// Учитывая целое число n, ваша задача — посчитать, 
// сколько строк длины n можно образовать по следующим правилам:
// Каждый символ представляет собой строчную гласную(«a», «e», «i», «o», «u»).
// За каждой гласной «а» может следовать только «е».
// За каждой гласной «е» может следовать только «а» или «i».
// За каждой гласной «i» не может следовать другая «i».
// За каждой гласной «о» может следовать только «i» или «u».
// За каждой гласной «у» может следовать только «а».
// Поскольку ответ может быть слишком большим, верните его по модулю 10 ^ 9 + 7.
// 1220


n = 3;

var countVowelPermutation = function (n) {
    const MOD = 1000 * 1000 * 1000 + 7;
    const dp = Array.from({ length: n + 1 }, () => Array(5).fill(0));

    // Инициализируем базовые случаи.
    dp[1][0] = 1; // Строка длины 1, заканчивающаяся на 'a'.
    dp[1][1] = 1; // Строка длины 1, заканчивающаяся на 'e'.
    dp[1][2] = 1; // Строка длины 1, заканчивающаяся на 'i'.
    dp[1][3] = 1; // Строка длины 1, заканчивающаяся на 'o'.
    dp[1][4] = 1; // Строка длины 1, заканчивающаяся на 'u'.

    // Заполняем dp для строк длины больше 1.

    for (let i = 2; i <= n; i++) {
        dp[i][0] = (dp[i - 1][1] + dp[i - 1][2] + dp[i - 1][4]) % MOD;
        dp[i][1] = (dp[i - 1][0] + dp[i - 1][2]) % MOD;
        dp[i][2] = (dp[i - 1][1] + dp[i - 1][3]) % MOD;
        dp[i][3] = (dp[i - 1][2]) % MOD;
        dp[i][4] = (dp[i - 1][2] + dp[i - 1][3]) % MOD;
    }


    // Суммируем количество строк длины n, заканчивающихся на каждую гласную.
    let answer = 0;
    for (let j = 0; j < 5; j++) {
        answer = (answer + dp[n][j]) % MOD;
    }

    return answer;
};

console.log(countVowelPermutation(n))