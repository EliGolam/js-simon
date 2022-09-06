// Initial Handshake
console.log('DEBUG - app.js: OK!');

// Initializing necessary global variables
const btnStart = document.getElementById('simon-says_start');
const challengeSeq = [];
let start = false;

btnStart.addEventListener('click', () => {
    console.log('DEBUG - btnStart: Clicked!');
    btnStart.classList.remove('active');

    // Initializing Game properties
    let counter = 0;
    let win = false;
    
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

    // Try Again
    tryAgainBtn.addEventListener('click', () => {
        startGame(buttons, challengeSeq);
        tryAgainBtn.classList.remove('active');
    })

    // Continue challenge
    continueBtn.addEventListener('click', () => {
        startGame(buttons, challengeSeq);
        continueBtn.classList.remove('active');
    })


    // Add click events to buttons
    for (let button of buttons) {
        button.addEventListener('click', () => {
            // Only activate the buttons if the game is started
            const buttonIdx = Array.prototype.indexOf.call(buttons, button);
            if (start){
                if (buttonIdx === challengeSeq[counter]) {
                    (counter < challengeSeq.length - 1) ? counter++ : win = true;
                    
    
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
                        deactivateButtons(buttons);
                    }
    
                } else {
                    console.log('nopers', buttonIdx, challengeSeq[counter], 'counter:', counter);
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