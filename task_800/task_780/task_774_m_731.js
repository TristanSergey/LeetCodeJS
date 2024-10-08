﻿/**
Вы реализуете программу, которая будет использоваться в качестве календаря. Мы можем добавить новое мероприятие, если добавление мероприятия не приведет к тройному бронированию.
Тройное резервирование происходит, когда три события имеют некоторое непустое пересечение (т. е. некоторый момент является общим для всех трех событий).
Событие можно представить в виде пары целых чисел start и end, которая представляет бронирование на полуоткрытом интервале [start, end), диапазоне действительных чисел x, таких, что start <= x < end.
Реализуйте класс MyCalendarTwo:
MyCalendarTwo() Инициализирует объект календаря.
boolean book(int start, int end) Возвращает true, если событие можно успешно добавить в календарь, не вызывая тройного резервирования. В противном случае верните false и не добавляйте событие в календарь.
 */

let MyCalendarTwo = function () {
    this.events = [];
};

MyCalendar.prototype.book = function (start, end) {
    let delta = []; // Массив для хранения изменений активности событий

    // Добавляем в delta изменение на +1 для начала события и -1 для конца
    delta.push([start, 1]);
    delta.push([end, -1]);

    // Проверим все текущие события
    for (let [s, e] of this.events) {
        if (start < e && end > s) {
            // Проверяем пересечение событий
            delta.push([Math.max(start, s), 1]); // Начало пересечения
            delta.push([Math.min(end, e), -1]); // Конец пересечения
        }
    }

    // Сортируем точки времени для правильной обработки
    delta.sort((a, b) => a[0] - b[0] || a[1] - b[1]);

    // Подсчет активных событий
    let active = 0;
    for (let [_, change] of delta) {
        active += change;
        if (active >= 3) {
            // Если в какой-то момент времени 3 активных события
            return false; // Тройное бронирование — отмена добавления
        }
    }

    // Если добавление успешно, фиксируем событие
    this.events.push([start, end]);
    return true;
};
