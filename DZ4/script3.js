// Задание 3
// Используя Math.random() вам необходимо генерировать цифры от 0 до 9, 
// и создать массив состоящий из 5 таких элементов
// 1. Рассчитать сумму элементов этого массива
// 2. Найти минимальное число
// 3. Найти есть ли в этом массиве число 3
// ------------------------
// return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
// ------------------------

let arr = [];//let
arr = Array.from({ length: 5 }, () => Math.floor(Math.random() * (9 - 0) + 0));
console.log(arr);

// 1. Рассчитать сумму элементов этого массива
let sum = 0;
for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
};
console.log(`Сумма элементов массива [${arr}] равна ${sum}`);
// 2. Найти минимальное число


const min = Math.min(...arr)
console.log(`Первый способ нахождения минимального числа в массиве: ${min}`);


let minimum = arr[0];
for (let i = 0; i < arr.length; i++) {
    if (i < minimum)
        minimum = i
}
console.log(`Второй способ нахождения минимального числа в массиве: ${min}`);


// 3. Найти есть ли в этом массиве число 3
let count = 0;
for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 3) {
        count++;
    }
}
console.log(`В массиве есть число 3, которое встречается ${count} раз`);
