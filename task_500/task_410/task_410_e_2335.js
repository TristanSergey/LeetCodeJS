﻿// У вас есть кулер для воды, который может подавать холодную, 
// теплую и горячую воду.Каждую секунду вы можете наполнять 2 
// чашки воды разного типа или 1 чашку воды любого типа.
// Вам дан массив целых чисел с индексом 0 и длиной 3, 
// где количество[0], количество[1] и количество[2] обозначают 
// количество чашек с холодной, теплой и горячей водой, 
// которые вам необходимо заполнить соответственно.
// Возвращает минимальное количество секунд, необходимое 
// для заполнения всех чашек.
// 2335


amount = [5, 4, 4]

var fillCups = function (amount) {
    let answer = 0;
    amount.sort((a, b) => a - b)
    while (amount[1] && amount[2]) {
        amount[1]--;
        amount[2]--;
        amount.sort((a, b) => a - b)
        answer++;
    }
    return answer += amount[2]
};


console.log(fillCups(amount))