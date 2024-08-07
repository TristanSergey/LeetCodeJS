﻿/**
В очереди от 1 до n стоят n человек. Сначала первый человек в очереди держит подушку. Каждую секунду человек, держащий подушку, передает ее следующему человеку, стоящему в очереди. Как только подушка достигает конца очереди, направление меняется, и люди продолжают передавать подушку в противоположном направлении.
Например, как только подушка доходит до n-го человека, он передает ее n-1-му человеку, затем n-2-му человеку и так далее.
Учитывая два положительных целых числа n и время, верните индекс человека, держащего подушку, через несколько секунд.
 */

let n = 5;
let time = 9;
let passThePillow = function (n, time) {
    const temp = Math.floor(time / (n - 1));
    if (temp % 2 === 0) {
        return (time % (n - 1)) + 1;
    } else {
        return n - (time % (n - 1));
    }
};

console.log(passThePillow(n, time));
