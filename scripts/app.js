// Initial Handshake
console.log('DEBUG - app.js: OK!');

// Initializing necessary global variables
const btnStart = document.getElementById('simon-says_start');
const challengeSeq = [];

btnStart.addEventListener('click', () => {
    console.log('DEBUG - btnStart: Clicked!');
    btnStart.classList.remove('active');

    // Initializing Game properties
    counter = 0;
    start = false;
    win = false;
    fail = false;
    
    // Initializing buttons
    const continueBtn = document.getElementById('simon-says_continue'); 
    const tryAgainBtn = document.getElementById('simon-says_again');
    const buttons = document.querySelectorAll('.simon-says_blocks');
    console.log(buttons);
    
    // Create the challenge
    let difficulty = 4;
    challengeSeq.push(...createChallengeSequence(difficulty));

    // Start Challenge
    startGame(buttons, challengeSeq);

    tryAgainBtn.addEventListener('click', () => {
        startGame(buttons, challengeSeq);
        tryAgainBtn.classList.remove('active');
    })

    // Continue challenge
    continueBtn.addEventListener('click', () => {
        startGame(buttons, challengeSeq);
        continueBtn.classList.remove('active');
        console.log(continueBtn.classList);
    })


    // Add click events to buttons
    for (let button of buttons) {
        console.log('Initializing btn: ', Array.prototype.indexOf.call(buttons, button));
        button.addEventListener('click', () => {
            if (start){
                if (Array.prototype.indexOf.call(buttons, button) === challengeSeq[counter]) {
                    console.log('CORRECT!', challengeSeq[counter]);
                    (counter < challengeSeq.length - 1) ? counter++ : win = true;
                    console.log('DEBUG - COUNTER:', counter);
                    
    
                    if (win) {
                        console.log('YOU WON', 'counter:', counter);
                        // Blink win effect
                        start = false;
                        win = false;
                        continueBtn.classList.add('active');
                        counter = 0;
                        challengeSeq.length = 0;
                        console.log('Empty array', challengeSeq);
                        challengeSeq.push(...createChallengeSequence(++difficulty));
                        // Show Button
                    }
    
                } else {
                    console.log('nopers', Array.prototype.indexOf.call(buttons, button), challengeSeq[counter], 'counter:', counter);
                    fail = true;
                    start = false;
                    counter = 0;
                    console.log('DEBUG - COUNTER:', counter);
                    difficulty = 4;
                    challengeSeq.length = 0;
                    console.log('Empty array', challengeSeq);
                    challengeSeq.push(...createChallengeSequence(difficulty));
                    tryAgainBtn.classList.add('active');
                    continueBtn.classList.remove('active');
                    
                    deactivateButtons(buttons);
                }
            }
        })
    }
});