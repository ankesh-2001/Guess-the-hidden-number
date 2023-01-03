'use strict';

// console.log(document.querySelector('.message').textContent);
// console.log(document.querySelector('.message').textContent = 'correct number');

// document.querySelector('.guess').textContent = '13';

//addeventlistner

let secretnumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displaymessage = function (message) {
    document.querySelector('.message').textContent = message;
}

document.querySelector('.check').addEventListener('click', function () {
    const num = Number(document.querySelector('.number').value);
    console.log(num);

    if (!num) {
        //document.querySelector('.message').textContent = 'no number';
        displaymessage('no number');
    } else if (num === secretnumber) {
        // document.querySelector('.message').textContent = '💯correct number👌';
        displaymessage('💯correct number👌');
        document.querySelector('.guess').textContent = secretnumber;

        document.querySelector('body').style.backgroundColor = 'rgb(41, 214, 41)';
        if (score > highscore) {
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }
    } else if (num !== secretnumber) {
        if (score > 1) {
            // document.querySelector('.message').textContent = num > secretnumber ? '📈Too high' : '📉Too Low';
            displaymessage(num > secretnumber ? '📈Too high' : '📉Too Low');
            score--;
            document.querySelector('.score').textContent = score;

        } else {
            //document.querySelector('.message').textContent = '😥You lost the game';
            displaymessage('😥You lost the game');
            document.querySelector('.score').textContent = 0;
        }
    }

    // } else if (num < secretnumber) {
    //     if (score > 1) {
    //         document.querySelector('.message').textContent = '📉Too Low';
    //         score--;
    //         document.querySelector('.score').textContent = score;
    //     }
    //     else {
    //         document.querySelector('.message').textContent = 'You lost the game';
    //         document.querySelector('.score').textContent = 0;
    //     }

    // }
});

document.querySelector('.btnagain').addEventListener('click', function () {
    score = 20;
    secretnumber = Math.trunc(Math.random() * 20) + 1;

    //document.querySelector('.message').textContent = 'Start guessing...';
    displaymessage('Start guessing...');
    document.querySelector('.score').textContent = score;
    document.querySelector('.guess').textContent = '?';
    document.querySelector('.number').textContent = '';
    document.querySelector('body').style.backgroundColor = '#000000';
});
