'use strict';

const luckNumber = Math.trunc((Math.random() * 20)+1);
console.log(luckNumber);


const guessEvent = function () {
    var guess = Number(document.querySelector('.guess').value);
    if(guess){
        if(guess === luckNumber) console.log('You guessed the lucky number 👌');
    }else console.log('Try again 💩')
}

document.querySelector('.check').addEventListener('click', guessEvent);