"use strict"

import gallery from './gallery.js';
console.log(gallery);

let body = document.querySelector('body');
let list = document.querySelector('.gallery');
let lightbox = document.querySelector('.lightbox');
let bigImage = document.querySelector('.lightbox__image');
let closeBtn = document.querySelector('.lightbox__button');
let overlay = document.querySelector('.lightbox__content');

const addToGallary = function () {

    for (let i = 0; i < gallery.length; i++) {

        let link = document.createElement('a');
        let item = document.createElement('li');
        let photo = document.createElement('img');

        list.append(item);
        item.append(link);
        link.append(photo);


        link.classList.add('gallery__link');
        link.setAttribute('href', gallery[i].original);

        photo.classList.add('gallery__image');
        photo.setAttribute('src', gallery[i].preview);
        photo.setAttribute('id', i);
        photo.setAttribute('alt', gallery[i].description);
        photo.setAttribute('data-source', gallery[i].original);
        

    }
}

addToGallary()
 


const openModal = function (event) {

    event.preventDefault();

    event.target.nodeName == 'IMG' ? lightbox.classList.add('is-open') :lightbox.classList.remove('is-open');
    bigImage.src = event.target.getAttribute('data-source');
    bigImage.setAttribute('id', event.target.id);


}

list.addEventListener('click', openModal )

closeBtn.addEventListener('click', () => {
    lightbox.classList.remove('is-open')
})

overlay.addEventListener('click', () =>{
    lightbox.classList.remove('is-open');
})

let bigId = +bigImage.id;
body.addEventListener('keydown', () =>{

    event.key == 'Escape' ? lightbox.classList.remove('is-open') : '';

    let gallery__image = document.querySelectorAll('.gallery__image');
    if (event.key == 'ArrowLeft') {

        bigId -= 1;

        bigId < 0 ? bigId = 8 : '';
        bigImage.src = gallery__image[bigId].getAttribute('data-source'); 

        console.log(gallery__image[bigId]);
    };

    if (event.key == 'ArrowRight') {
        bigId += 1
        bigId == 9 ? bigId = 0 : '';

        bigImage.src = gallery__image[bigId].getAttribute('data-source');
    }



console.log(event.key);
});

