﻿/**
 В аудитории n мест и n студентов. Вам задан массив seats длиной n, где seats[i] - позиция i-го места. Вам также задан массив students длиной n, где students[j] - позиция j-го студента.
Вы можете выполнять следующий ход любое количество раз:
Увеличивать или уменьшать позицию i-го ученика на 1 (т.е. перемещать i-го ученика с позиции x на позицию x + 1 или x - 1).
Верните минимальное количество ходов, необходимое для перемещения каждого учащегося на место таким образом, чтобы на одном и том же месте не было двух учащихся.
Обратите внимание, что в начале может быть несколько мест или учащиеся могут занимать одну и ту же позицию.
 */

let seats = [3, 1, 5];
let students = [2, 7, 4];

let minMovesToSeat = function (seats, students) {
    seats.sort((a, b) => a - b);
    students.sort((a, b) => a - b);
    let answer = 0;
    for (let i = 0; i < seats.length; i++) {
        answer += Math.abs(seats[i] - students[i]);
    }
    return answer;
};

console.log(minMovesToSeat(seats, students));