'use strict';
let score = 20;
const scores =[];
const getLuckyNumber = () => Math.trunc((Math.random() * 20) + 1);
let luckNumber = getLuckyNumber();

const win = function(){
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = luckNumber;
    document.querySelector('.message').textContent = 'You guessed the lucky number 👌';
    scores.push(score);
    scores.sort();
    document.querySelector('.highscore').textContent = scores[(scores.length)-1];
}

const guessEvent = function () {
    var guess = Number(document.querySelector('.guess').value);
    if (guess) {
        if (guess === luckNumber){
            win();
        } 
        else { 
            guess > luckNumber ? document.querySelector('.message').textContent = 'To High! 📈': document.querySelector('.message').textContent = 'To Low! 📉';
            decreaseScore();
        }
    }
}

const againEvent = function(){
    score = 20; 
    document.querySelector('.score').textContent =  score;
    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('.guess').value = '';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
    luckNumber = getLuckyNumber();
    document.querySelector('.number').textContent = '?';

}

const decreaseScore = function () {
    
    if(score > 0) score -= 1;
    else document.querySelector('.message').textContent = 'You lost the game 😭';

    document.querySelector('.score').textContent = score;
}

document.querySelector('.check').addEventListener('click', guessEvent);
document.querySelector('.again').addEventListener('click', againEvent);