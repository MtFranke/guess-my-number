'use strict';
let score = 20;
const luckNumber = Math.trunc((Math.random() * 20) + 1);
document.querySelector('.number').textContent = luckNumber;


const guessEvent = function () {
    var guess = Number(document.querySelector('.guess').value);
    if (guess) {
        if (guess === luckNumber) document.querySelector('.message').textContent = 'You guessed the lucky number 👌';
        else { 
            guess > luckNumber ? document.querySelector('.message').textContent = 'To High! 📈': document.querySelector('.message').textContent = 'To Low! 📉';
            decreaseScore();
        }
    }
}

const decreaseScore = function () {
    
    if(score > 0) score -= 1;
    else document.querySelector('.message').textContent = 'You lost the game 😭';
    document.querySelector('.score').textContent = score;
}

document.querySelector('.check').addEventListener('click', guessEvent);