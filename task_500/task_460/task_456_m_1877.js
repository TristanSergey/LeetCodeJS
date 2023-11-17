﻿// Парная сумма пары(a, b) равна a + b.
// Максимальная сумма пары — это наибольшая сумма пары в списке пар.
// Например, если у нас есть пары(1, 5), (2, 3) и(4, 4), 
// максимальная сумма пар будет равна max(1 + 5, 2 + 3, 4 + 4) = max(6, 5, 8) = 8.
// Учитывая массив nums четной длины n, разделите элементы nums на n / 2 пары так, чтобы:
// Каждый элемент nums находится ровно в одной паре, и максимальная сумма пары минимизируется.
// Верните минимизированную максимальную сумму пары после оптимального соединения элементов в пары.
// 1877

nums = [3, 5, 4, 2, 4, 6]
nums = [3, 5, 2, 3]

var minPairSum = function (nums) {

    nums.sort((a, b) => a - b);
    console.log(nums)
    let left = 0;
    let right = nums.length - 1;
    let answer = 0;

    while (left < right) answer = Math.max(answer, nums[left++] + nums[right--]);
    //left++;
    //right--;


    return answer;
};

console.log(minPairSum(nums))