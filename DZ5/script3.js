// Задание 3
// Дан массив products, необходимо цену каждого продукта уменьшить на 15 % используя метод forEach.

const products = [
    {
        id: 3,
        price: 200,
    },
    {
        id: 4,
        price: 900,
    },
    {
        id: 1,
        price: 1000,
    },
];
// console.log(`Исходный массив:`);
// console.log(products);

products.forEach(products => { products[`price`] = products[`price`] * 0.85 });
// for (const key in products) {
//         products[key][`price`] = (products[key][`price`] * 0.85);
// }
console.log(`Получаем массив, в котором цена каждого продукта уменьшена на 15%: `);
console.log(products);



// --------------для себя---------------
// Первый метод предназначен для клонирования массивов, а второй — объектов.

// let arr = ['hello', 'world'];
// let obj = {
//     greeting: 'hi',
//     name: 'universe'
// };

// let arrClone = Array.from(arr);
// let objClone = Object.assign({}, obj); 