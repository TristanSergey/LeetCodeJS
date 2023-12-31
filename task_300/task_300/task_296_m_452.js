﻿// К плоской стене, представляющей плоскость XY, приклеено несколько сферических воздушных шаров.
// Выноски представлены в виде двумерного целочисленного массива точек, 
// гдеpoints[i] = [xstart, xend] обозначает выноску, горизонтальный диаметр которой простирается 
// между xstart и xend.Вы не знаете точных координат Y воздушных шаров.
// Стрелки можно стрелять прямо вертикально(в положительном направлении Y) из разных точек вдоль оси X.
// Воздушный шар с xstart и xend разрывается стрелой, выпущенной в x, если xstart <= x <= xend.
// Нет ограничений на количество выпущенных стрел.Выпущенная стрела продолжает двигаться вверх бесконечно, 
// разрывая все воздушные шары на своем пути.
// Учитывая точки массива, верните минимальное количество стрел, которое необходимо выпустить, 
// чтобы лопнуть все воздушные шары.
// 452

points = [[10, 16], [2, 8], [1, 6], [7, 12]];

var findMinArrowShots = function (points) {
    if (points.length === 0) {
        return 0;
    }
    let answer = 1;
    // Сортируем шарики по правым границам (xend)
    points.sort((a, b) => a[1] - b[1]);
    let endX = points[0][1];

    console.log(endX)
    for (let i = 1; i < points.length; i++) {
        console.log(points[i])
        if (points[i][0] > endX) {
            // Требуется новая стрела
            endX = points[i][1];
            answer++;

            console.log(endX)
        }
        // Иначе шарик может быть лопнут текущей стрелой
    }

    return answer;


};


console.log(findMinArrowShots(points))
