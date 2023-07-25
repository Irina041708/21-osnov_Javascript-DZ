//------------- Zad1-------------
// Создайте функцию которая возводит переданное число в куб,
//  необходимо вывести в консоль результат 2^3 степени + 3 ^ 3 степени

// let number = Number(prompt(`Введите число: `))
// function degree(number) {
//     return number**3
// }


const degree = number => number ** 3;
console.log(degree(2) + degree(3));

