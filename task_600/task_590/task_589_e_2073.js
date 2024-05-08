﻿// В очереди за покупкой билетов стоят n человек, 
// причем 0 - й человек стоит в начале очереди, 
// а (n - 1) - й человек стоит в конце очереди.
// Вам дан целочисленный массив Tickets с нулевым индексом длиной n, 
// где число билетов, которое i - й человек хотел бы купить, равно Tickets[i].
// Каждому человеку требуется ровно 1 секунда, чтобы купить билет.
// Человек может купить только 1 билет за раз и должен вернуться в конец 
// очереди(что происходит мгновенно), чтобы купить больше билетов.
// Если у человека не осталось билетов для покупки, он покинет очередь.
// Возвращает время, затраченное человеком на позиции k(с индексом 0), 
// чтобы закончить покупку билетов.

// 2073


tickets = [2, 3, 2], k = 2
// tickets = [5, 1, 1, 1], k = 0

var timeRequiredToBuy = function (tickets, k) {


    const len = tickets.length - 1;
    let pointer = 0;
    let count = 0;


    while (tickets[k] !== 0) {

        if (tickets[pointer] !== 0) {
            tickets[pointer]--
            count++
        }


        if (pointer === len) {
            pointer = 0;
        } else {
            pointer++;
        }
        console.log(tickets)
    }

    return count;
};


console.log(timeRequiredToBuy(tickets, k))