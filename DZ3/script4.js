//------------- Zad4-------------
// Необходимо реализовать четыре функции, каждая функция должна принимать по 
// два числа и выполнять одну из операций (каждая функция выполняет одну из них):
// 1. Сложение
// 2. Разность
// 3. Умножение
// 4. Деление
// Необходимо сделать так, чтобы функция вернула число, например выражение console.log(sum(2, 6));
// должно вывести число 8 в консоль (sum - функция сложения в данном примере, 
// ваши названия функций могут отличаться). Округлять значения, которые возвращают
// функции не нужно, однако, обратите внимание на разность, функция должна вычесть из
// большего числа меньшее, либо вернуть 0, если числа равны. Функциям всегда передаются 
// корректные числа, проверки на NaN, Infinity делать не нужно.


let number1 = Number(prompt(`Введите первое число: `));
let number2 = Number(prompt(`Введите второе число: `));
let operationNumber = Number(prompt(`При вводе определенного числа от 1 до 4 будет выполняться одно из следующих действий
1- сумма чисел: 
2- разность чисел 
3- уножение чисел
4- деление чисел`));

function operation(operationNumber, number1, number2) {
    const summa = (number1, number2) => number1 + number2;
    const difference = (number1, number2) => number1 > number2 ? number1 - number2 : number2 - number1;
    const multiplication = (number1, number2) => number1 * number2;
    const division = (number1, number2) => number2 === 0 ? `Второе число не должен быть равно 0` : number1 / number2;
    switch (operationNumber) {
        case 1:
            return (summa(number1, number2));
            break;
        case 2:
            return (difference(number1, number2));
            break;
        case 3:
            return (multiplication(number1, number2));
            break;
        case 4:
            return (division(number1, number2));
            break;
    }
}
alert(operation(operationNumber, number1, number2));


