"use strict"

// let name = document.querySelector('.name');
// let icon = document.querySelector('.icon');
// let moves = document.querySelector('.moves');

// fetch('https://pokeapi.co/api/v2/pokemon/pikachu')
// .then(response => response.json())
// .then(data => {
//     name.textContent = data.forms[0].name;
//     icon.setAttribute('src', data.sprites.back_default);

//     for(let i = 0; i < data.moves.length; i++){
//         moves.innerHTML += `<li>${data.moves[i].move.name}</li>`
//     }
// })


// _________________________________Exersice1____________

let input = document.querySelector('.input');
let list = document.querySelector('.list');

const createCountryList = function() {
    if (input.value.length >= 2)  {
        setTimeout(() => {
            fetch(`https://restcountries.eu/rest/v2/name/${input.value}`)
            .then(response => response.json())
            .then(data => {
                let names = data.map(el => el.name);
                console.log(names)
                if (names.length < 10) {
                    for(let el of names) {
                        list.innerHTML += `<li class="result-name">${el}</li>`
                    }
                }
            })
        }, 2000)
    }
}

input.addEventListener('input', createCountryList);

