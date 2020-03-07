"use strict"

// ______________Exercise1______________
// let name = 'Генератор защитого поля';
// let price = 1000;
// price = 2000;
// console.log(`Выбран ${name}, цена за штуку ${price} кредитов` );

// ____________________Exercise2________________
// let total = 40;
// let order = 20;
// let order = 80;
// let order = 130;
// if (order <= total)
// console.log ('Заказ оформылен, с вами свяжется менеджер')
// else console.log ('На складе недостаточно твоаров!');

// ____________________Exercise3________________
// let message;
// const ADMIN_PASSWORD = 'jqueryisnyjam';

// let q = prompt('Enter:');
// console.log(q);
// if (q===null) {
//     message = "Canselled";
// }else if (q === ADMIN_PASSWORD)
//     {message = "Welcome";}
//     else {message = "Wrong password"}
// alert (message);

// ____________________Exercise4________________

// let credits = 23580;
// let pricePerDroid = 3000;
// let q = prompt('Сколько дроидов вы хотите купить?');
// let totalprice = q * pricePerDroid;
// let message;

// if (q == null) {
//     message = 'Отменено пользователем!';
//     alert (message);
// }
// else if (totalprice >= credits) {
//     message = 'Недостаточно средств на счету!';
//     alert (message);
// }else {
//     credits = (credits - totalprice);
//     message = `Вы купили ${q} дроидов, на счету осталось ${credits} кредитов.`;
//     alert (message);
// }

// ____________________Exercise5________________
// let userChoise;
// let country;
// let credits;
// const countries = ['китай',
// 'индия',
// 'ямайка',
// 'чили',
// 'австралия'];

// let pr = prompt("Enter your country: ");

// userChoise = pr.toLowerCase();

// switch (userChoise) {
//     case 'china':
//         country = "china";
//         credits = 100;
//         alert(`You choise ${country}, cost ${credits}`);
//         break;

//     case 'india':
//         country = "india";
//         credits = 80;
//         alert(`You choise ${country}, cost ${credits}`);
//         break;

//     default:
//         alert("Вашей страны нету в списке доступных стран");
//         break;

// };

// ____________________Exercise6________________
// let number;
// let total = 0;

// do{
// number = prompt("write number");
// total += +number;
// }while (number != undefined);
// alert(total);