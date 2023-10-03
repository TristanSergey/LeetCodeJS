﻿// Учитывая строковый путь, который представляет собой абсолютный 
// путь(начинающийся с косой черты «/») к файлу или каталогу в 
// файловой системе в стиле Unix, преобразуйте его в упрощенный канонический путь.
// В файловой системе в стиле Unix точка '.' относится к текущему каталогу, 
// двойная точка «..» относится к каталогу более высокого уровня, 
// а любые несколько последовательных косых черт(например, 
//     «//») рассматриваются как одиночная косая черта «/». 
// Для этой проблемы любой другой формат точек, например «...», 
// рассматривается как имя файла или каталога.
// Канонический путь должен иметь следующий формат:
// Путь начинается с одинарной косой черты «/».
// Любые два каталога разделяются одной косой чертой «/».
// Путь не заканчивается завершающим символом «/».
// Путь содержит только каталоги на пути от корневого каталога до целевого файла 
// или каталога(т.е.без точки «.» или двойной точки «..»)
// Верните упрощенный канонический путь.
// 71

path = "/home/" // "/home"
path = "/home//foo/" // "/home/foo"
path = "/../" // "/"
path = "/home/user/Documents/../../../usr/local/bin" //  "/usr/local/bin"


var simplifyPath = function (path) {


    const stack = [];
    const directory = path.split("/");
    console.log(directory)
    for (const item of directory) {
        if (item === "." || !item) {
            continue;
        } else if (item === "..") {
            if (stack.length > 0) {
                stack.pop();
            }
        } else {
            stack.push(item);
        }
    }
    return "/" + stack.join("/");


};


console.log(simplifyPath(path))

