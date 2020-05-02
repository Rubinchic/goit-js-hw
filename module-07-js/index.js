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

//________________Exersice2____

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
