"use strict"


// узнать номер клавиши____________________________
function keyPress(e) {
    let keyNum;
    if (window.event) {
        keyNum = window.event.keyCode;
    }
    else if (e) {
        keyNum = e.which;
    }
    console.log(keyNum);
}
document.onkeydown = keyPress;
// ________________________________

// добавить функцию на клавишу_______________
document.onkeydown = function(e){
    switch (e.keyCode) {
        case 49: //номер клавиши
            console.log('Нажата единица');//функция
            break;//остановка
        case 50:
            console.log('Нажата двойка');

        default:
            console.log(e.keyCode);
    }
};
// __________________



document.body.onload = function(){
document.getElementById('button1').onclick = function(){
    console.log('button 1 click');
}
    document.getElementById('button2').onclick = function(){
        console.log('button 2 click');
        //функция для кнопки
    }
    document.getElementById('button3').onclick = function(){
        console.log('button 3 click');
        //функция для кнопки
    }
    document.getElementById('button4').onclick = function(){
        console.log('button 4 click');
        //функция для кнопки
    }
    document.getElementById('button5').onclick = function(){
        console.log('button 5 click');
        //функция для кнопки
    }
    document.getElementById('button6').onclick = function(){
        console.log('button 6 click');
        //функция для кнопки
    }
    document.getElementById('button7').onclick = function(){
        console.log('button 7 click');
        //функция для кнопки
    }
    document.getElementById('button8').onclick = function(){
        console.log('button 8 click');
        //функция для кнопки
    }
    document.getElementById('button9').onclick = function(){
        console.log('button 9 click');
        //функция для кнопки
    }
}