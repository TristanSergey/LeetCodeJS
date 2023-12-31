﻿// Вам дан целочисленный массив с нулевым индексом nums.Вы должны разбить массив на
// один или несколько смежных подмассивов.
// Назовем разбиение массива действительным, если каждый из полученных подмассивов
// удовлетворяет одному из следующих условий:
// Подмассив состоит ровно из 2 одинаковых элементов.Например, подмассив[2, 2] хорош.
// Подмассив состоит ровно из 3 одинаковых элементов.Например, подмассив[4, 4, 4] хорош.
// Подмассив состоит ровно из 3 последовательных возрастающих элементов, то есть разница
// между соседними элементами равна 1. Например, подмассив[3, 4, 5] хорош, а подмассив[1, 3, 5] — нет.
// Возвращает true, если массив имеет хотя бы один действительный раздел.
// В противном случае вернуть ложь.
// 2369

nums = [4, 4, 4, 5, 6];
//nums = [1, 1, 1, 2];
//nums = [993335, 993336, 993337, 993338, 993339, 993340, 993341];
nums = [579611, 579611, 579611, 731172, 731172, 496074, 496074, 496074, 151416, 151416, 151416]
//nums = [1, 2, 3, 3, 4, 5, 7, 7, 8];
function validPartition(nums) {
    const n = nums.length;
    if (n === 1) return true;
    if (n === 2) return nums[0] === nums[1];

    const dp = new Array(n + 1);

    //boolean[] dp = new boolean[]{ true, false, n > 1 && nums[0] == nums[1] };
    dp[0] = true;
    dp[1] = false;
    dp[2] = nums[0] === nums[1];
    console.log(dp);
    for (let i = 3; i <= n; ++i) {
        console.log(" ------------ ")
        dp[i] =
            (dp[i - 2] && nums[i - 2] === nums[i - 1]) ||
            (dp[i - 3] &&
                ((nums[i - 3] === nums[i - 2] && nums[i - 2] === nums[i - 1]) ||
                    (nums[i - 2] + 1 === nums[i - 1] && nums[i - 3] + 1 === nums[i - 2])));
        console.log(dp);
    }

    return dp[n];
}

console.log(validPartition(nums));




// Я задачу понял таким образом.Весь данный нам массив мы должны разбить на соответствующие 'действительные' подмассивы.
// То есть массив[1, 2, 3, 3, 4, 5, 7, 7, 7] можно разделить на следующие[1, 2, 3], [3, 4, 5], [7, 7, 7] и это будет true.
// А если массив будет[1, 2, 3, 3, 4, 5, 7, 7, 8] то => [1, 2, 3], [3, 4, 5], [7, 7] и 8 у нас не отвечает не одному из условий 'действительных' подмассивов.
// Значит это false.
// И соответственно для примеров из условия[4, 4, 4, 5, 6] делится на[4, 4] и[4, 5, 6]; => true.
// И для[1, 1, 1, 2].Мы можем делить на[1, 1]  и оставшиеся[1], [2] или[1, 2] не отвечают условиям задачи.Или можем поделить на[1, 1, 1] и оставшаяся 2 также не отвечает условиям  'действительных' подмассивов. => false
// Удачи в решении.