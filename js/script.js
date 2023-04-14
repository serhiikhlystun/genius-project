// Якщо змінна більше нуля - виведіть true, менше - false
//Перевірте це на варіантах  1, 0, -3.

// let number = -3;

// if (number > 0) {
//     console.log(true);
// } else if (number < 0) {
//     console.log(false);
// }

// Якщо змінна ="test" - виведіть true,
//Перевірте це на варіантах  'test', "qwerty", true

// const test = 'true';

// if (test === 'test') {
//     console.log(true);
// }

// Якщо змінна більше 10 -  відніміть 5,
//менше - додайте 5, результат виведіть в консоль
//Перевірте це на варіантах  1, 10, 13.

// let number = 13;

// if (number > 10) {
//     number -= 5;
// } else if (number < 10) {
//     number += 5;
// }
// console.log(number);

//Зробіть сервіс який отримує число від 1 до 12
// виведіть місяць який дорівнює числу

// const number = Number(prompt('Введіть число від 1 до 12'));

// switch (number) {
//     case 1:
//         console.log('Січень');
//         break;
//     case 2:
//         console.log('Лютий');
//         break;
//     case 3:
//         console.log('Березень');
//         break;
//     case 4:
//         console.log('Квітень');
//         break;
//     case 5:
//         console.log('Травень');
//         break;
//     case 6:
//         console.log('Червень');
//         break;
//     case 7:
//         console.log('Липень');
//         break;
//     case 8:
//         console.log('Серпень');
//         break;
//     case 9:
//         console.log('Вересень');
//         break;
//     case 10:
//         console.log('Жовтень');
//         break;
//     case 11:
//         console.log('Листопад');
//         break;
//     case 12:
//         console.log('Грудень');
//         break;
// }

//Зробіть сервіс який отримує тризначне число
//Поверніть користувачу сумму цих чисел

// let number = prompt('Введіть тризначне число');
// let checkNumber = Number(number);
// let sum = 0;

// if (Number.isNaN(checkNumber)) {
//     alert('Введене значення не число!');
// } else if (number.length < 3) {
//     alert('Число має бути тризначним.');
// } else {
//     for (element in number) {
//         sum += Number(number[element]);
//     }
//     console.log(sum);
// }