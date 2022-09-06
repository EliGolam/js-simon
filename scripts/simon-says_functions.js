// Initial Handshake
console.log('DEBUG - simon-says_functions.js: OK!');

// FUNCTIONS
/* Function to create the challenge. It returns the array representing the sequence to follow */
function createChallengeSequence(difficulty) {
    arr = []
    console.log('Current Difficulty:', difficulty);
    while(arr.length < difficulty) {
        arr.push(Math.floor(Math.random() * 4));
    }
    console.log('Simon Says Sequence', arr);
    return arr;
}


/* Function that runs the game. Resets necessary variables and automatically launches the blink sequence animation*/
function playGame (buttons, sequence, difficulty) {
    sequencePos = 0;
    challengeSeq.length = 0;
    challengeSeq.push(...createChallengeSequence(difficulty));
    
    // Illuminate the sequence
    for(let i = 0; i < sequence.length; i++) {
        console.log(buttons[sequence[i]]);
        blinkColorBtn(buttons[sequence[i]], i);
    }

    // Activate continue btn once the blinking animation is over
    setTimeout(function(){
        start = true;
        // Activate the buttons for the user
        toggleAllBtnsOfType(buttons, 'on');
        console.log('Game Started!');
    }, 1200 * sequence.length);
}

/* Blinking animation to show the sequence */
function blinkColorBtn (button, delay) {
    setTimeout(function () {
        console.log('Activating button', button.getAttribute('id'));
        button.classList.add('active')
    }, delay * 1200);

    setTimeout(function () {
        console.log('Deactivating button', button.getAttribute('id'));
        button.classList.remove('active')
    }, (delay*1200 + 1000));
}

/* Toggle the buttons: on or off */
function toggleAllBtnsOfType (buttons, command) {
    if (command === 'on') {
        for (let button of buttons) {
            button.classList.add('started');
        }
    }
    else if(command === 'off') {
        for (let button of buttons) {
            button.classList.remove('started');
        }   
    }
}



