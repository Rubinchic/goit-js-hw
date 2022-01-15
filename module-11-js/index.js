"use strict"

// _________________________________Exersice1____________

const colors = [
    '#2196F3',
    '#4CAF50',
    '#FF9800',
    '#009688',
    '#795548',
];

let body = document.querySelector('body');

let start = document.querySelector('.start');

let stop = document.querySelector('.stop');

function ChangeColor() {
    body.style.backgroundColor = colors[Math.floor(Math.random()*5)]
}

let StartInt;

start.addEventListener('click', () => StartInt ? "" : StartInt = setInterval(ChangeColor, 900));

stop.addEventListener('click', () => clearInterval(StartInt));

// _________________________________Exersice2____________

// const delay = ms => {
//     let promise = new Promise((resolve, reject) => 
//     {
//         setTimeout(() => {
//             resolve(ms);
//         }, ms);
//     }
//     )
//     return promise;
//   };
  
//   const logger = time => console.log(`Resolved after ${time}ms`);
  
//   // Вызовы функции для проверки
//   delay(2000).then(logger); // Resolved after 2000ms
//   delay(1000).then(logger); // Resolved after 1000ms
//   delay(1500).then(logger); // Resolved after 1500ms

// _________________________________Exersice3____________

const users = [
    { name: 'Mango', active: true },
    { name: 'Poly', active: false },
    { name: 'Ajax', active: true },
    { name: 'Lux', active: false },
  ];
  
  const toggleUserState = (allUsers, userName) => {
      let changeState = new Promise((res, rej) => {
          
          const newArr = allUsers.map(user => user.name == userName ? {...userName, active : !user.active} : user);

          res(newArr);
      })

      return changeState;
   };
  
  const logger = updatedUsers => console.table(updatedUsers);
  
  /*
   * Должно работать так
   */
  toggleUserState(users, 'Mango').then(logger);
  toggleUserState(users, 'Lux').then(logger);

// _________________________________Exersice4____________

// _________________________________Exersice5____________

























//______________________________________________





// let randomColor1;
// let randomColor2;
// let randomColor3;

// setInterval(() => {
//     randomColor1 = Math.floor(Math.random()*255);
//     randomColor2 = Math.floor(Math.random()*255);
//     randomColor3 = Math.floor(Math.random()*255);

// },1000);




//  let h1Creater = setInterval(() => {
//     let h1 = document.createElement('h1');
//     let body = document.querySelector('body');
//     body.append(h1);
//     h1.style.color = 
//     `rgb(${randomColor1},${randomColor2},${randomColor3})`;



//     h1.textContent = 'Hello world';
// }, 1500);

// setTimeout(() => {
//     clearInterval(h1Creater);
// }, 5000);

// console.log(navigator);