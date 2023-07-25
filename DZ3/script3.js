//------------- Zad3-------------
// Пользователь с клавиатуры вводит 3 числа, необходимо 
// создать функцию, которая определяет максимальное значение среди этих чисел
let number1 = Number(prompt(`Введите первое число: `));
let number2 = Number(prompt(`Введите второе число: `));
let number3 = Number(prompt(`Введите третье число: `));

function maxNumber(number1, number2, number3) {
    if (number1 >= number2 && number1 >= number3) {
        console.log(`Максимальное значение среди этих чисел: ${number1}`);
    }
    else if (number2 >= number1 && number2 >= number3) {
        console.log(`Максимальное значение среди этих чисел: ${number2}`);
    }
    else if (number3 >= number1 && number3 >= number2) {
        console.log(`Максимальное значение среди этих чисел: ${number3}`);
    }
}

maxNumber(number1, number2, number3);