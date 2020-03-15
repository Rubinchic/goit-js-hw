"use strict"

// ________Exercise1_____________
// const logItems = (array) => {
//     for (let i = 0; i < array.length; i++){
// console.log(`${logItems}`);
//     };
// };
// const logItems = ['Mango', 'Poly', 'Ajax', 'Lux', 'Jay', 'Kong'];
// const numbers = [[5, 10, 15, 20, 25, 30, 35, 40, 45, 50];

// ________Exercise2_____________
// const calculateEngravingPrice = function(message, pricePerWord) {return(message.split(" ").length*pricePerWord)};
  
// console.log(
//     calculateEngravingPrice(
//       'Proin sociis natoque et magnis parturient montes mus',
//       10,
//     ),
//   ); 
  
//   console.log(
//     calculateEngravingPrice(
//       'Proin sociis natoque et magnis parturient montes mus',
//       20,
//     ),
//   );

//   console.log(
//     calculateEngravingPrice('Donec orci lectus aliquam est magnis', 40),
//   );

//   console.log(
//     calculateEngravingPrice('Donec orci lectus aliquam est magnis', 20),
//   );
// ________Exercise3_____________
// const findLongestWord = function (string) {
// let array = string.split(' ');

// let longestWord = 0;
// let word;
// for (let i = 0; i < array.length; i++) {
//     if (array[i].length > longestWord){
//         longestWord = array[i].length;
//         word = array[i];
//     }
// }
// return word;
// };

// console.log(findLongestWord('The quick brown fox jumped over the lazy dog'));
// console.log(findLongestWord('Google do a roll'));
// console.log(findLongestWord('May the force be with you'));

// ________Exercise4_____________
// const formatString = function(string) {
// if (string.length > 40) {
//    const newstring = string.substr(0, 40) + '...';
//     return newstring;
// } else return(string);
// };

// (string.length > 40) ? (console.log(string.split("").splice(0, 40).join('') + '...')) : console.log(string);

// console.log(formatString('FAGDSRGTFBVfdgbyhjjughngfbvdssrgthyjxfdftgvchdrdfg'));


// ________Exercise5_____________
// const checkForSpam = function (message) {
//     let newMess = message.toLowerCase().split(" ").join("");
//     return newMess.includes("spam") || newMess.includes("sale");
// };


//  console.log(checkForSpam('Latest technology news'));

//  console.log(checkForSpam('JavaScript weekly newsletter'));

//  console.log(checkForSpam('Get best sale offers now!'));

// console.log(checkForSpam('[SPAM] How to earn fast money?'));

// ________Exercise6_____________
// let input;
// const numbers = [];
// let total = 0;

// while (input !== null) {
//     input = prompt('Введите число');
//     if (Number.isNaN(+input)){
//         alert("Было введено не чесло, попробуйте ещё раз");
//     }else{
//         numbers.push(+input);
//     }
// }
// for (const integer of numbers) {
//     total += +integer;
// }
// console.log(`Общая суммв чисел равна ${total}`);
 