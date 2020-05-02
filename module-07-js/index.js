"use strict"
//______________additional_____information____________
// let body = document.querySelector('body')
// let h1 = document.createElement('h1');
// h1.textContent = 'Home sweet home';
// body.append(h1);
// const changeColor = () => h1.style.color = 'red';
// h1.addEventListener('click', changeColor);
// _______________________________________________


// _________________________________Exersice1____________
// let list = document.querySelectorAll('.item');
// console.log(`В списке ${list.length} категорий`);
// let title = [...list].map(el => el.children[0].textContent);
// let elements = [...list].map(el => el.children.length[1]);
// let length = elements.map(el => el.children.length);
// for (let i = 0; i < title.length; i += 1) {
//     console.log(`Категория:${title[i]}, Длина:${length[i]}`)};

//________________Exersice2____
// const ingredients = [
//     'Картошка',
//     'Грибы',
//     'Чеснок',
//     'Помидоры',
//     'Зелень',
//     'Приправы',
//   ];

//   let list = document.querySelector('#ingredients')
//   console.log(list);
//   const addToList = function (array) {
//       for (let i = 0; i < array.length; i++) {
//           let item = document.createElement('li');
//           list append(item);
//           item.textContent = array[i];
//       }
//   }
//   addToList(ingredients);

//_______Ex3______
// const images = [
//   {
//     url:
//       'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
//     alt: 'White and Black Long Fur Cat',
//   },
//   {
//     url:
//       'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
//     alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
//   },
//   {
//     url:
//       'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
//     alt: 'Group of Horses Running',
//   },
// ];

// let ul = document.querySelector('#gallery');
// console.log(ul);

// const addToGallery = function (images) {
//     for (let index = 0; index < images.length; index++) {
// ul.insertAdjacentHTML('afterbegin' , `<li><img src='${images[index].url}' alt='${images[index].alt}' width='400'></li>`)
//     }  
//     ul.style.listStyle = 'none';
//     ul.style.display = 'flex';
//     ul.style.justifyContent = 'space-around';
// }

// addToGallery(images);

//_______________Ex4___________
// let counterValue = 0;
// let incB = document.querySelectorAll('button')[1];
// let decB = document.querySelectorAll('button')[0];
// let value = document.querySelector('#value');

// const onIncrement = function () {
//     counterValue += 1;
//     value.textContent = counterValue;
// }

// const onDecrement = function () {
//     counterValue -= 1;
//     value.textContent = counterValue;
// }

// incB.addEventListener('click', onIncrement);
// decB.addEventListener('click', onDecrement);

//________________Ex5_________
//  let input = document.querySelector('#name-input');
//  let output = document.querySelector("#name-output");
//  console.log(input, output);

// input.addEventListener('input' , () => {
//    input.value ? output.textContent = input.value : output.textContent = 'незнакомец';
//    console.log(input.value);
//  })

//_____Ex6____

//____Ex7____
// let input = document.querySelector('#font-size-control');
// let span = document.querySelector('#text');

// input.addEventListener('input', () => {
//     span.style.fontSize = input.value+'px'
// });
