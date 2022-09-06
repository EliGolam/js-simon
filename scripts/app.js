// Initial Handshake
console.log('DEBUG - app.js: OK!');

// Initializing necessary global variables
const startBtn = document.getElementById('simon-says_start');
const challengeSeq = [];

// Initializing Game properties
let sequencePos = 0; // Position of the sequence in which the player is at currently. It starts from 0
let start = false;
const BASE_DIFFICULTY = 4;

/* **************************************************************************************** */
// Game is started by the click of the button Start
startBtn.addEventListener('click', () => {
    console.log('DEBUG - startBtn: Clicked!');
    startBtn.classList.remove('active'); // Remove the start buttons once the game is started

    // Initializing buttons
    const continueBtn = document.getElementById('simon-says_continue'); 
    const tryAgainBtn = document.getElementById('simon-says_again');
    const colorBtn = document.querySelectorAll('.simon-says_blocks');
    
    // Create the challenge and Start the game
    let difficulty = BASE_DIFFICULTY;
    challengeSeq.push(...createChallengeSequence(difficulty));
    playGame(colorBtn, challengeSeq);
    


    // Add click events to colorBtn
    for (let button of colorBtn) {
        button.addEventListener('click', () => {
            // Only activate the colorBtn if the game is started
            const buttonIdx = Array.prototype.indexOf.call(colorBtn, button);
            
            if (start){
                if (buttonIdx === challengeSeq[sequencePos]) {
                    console.log('CORRECT!', challengeSeq[sequencePos]);
                    if (sequencePos < challengeSeq.length - 1) {
                        sequencePos++; 
                    } 
                    else {
                        console.log('YOU WON', 'sequencePos:', sequencePos);
                        deactivateAllBtnsOfType(colorBtn);
                        continueBtn.classList.add('active');
                    }
    
                } else {
                    console.log('nopers', buttonIdx, challengeSeq[sequencePos], 'sequencePos:', sequencePos);
                    deactivateAllBtnsOfType(colorBtn);
                    tryAgainBtn.classList.add('active');
                }
            }
        })
    }


    // Try Again challenge
    tryAgainBtn.addEventListener('click', () => {
        difficulty = BASE_DIFFICULTY;
        challengeSeq.length = 0;       
        challengeSeq.push(...createChallengeSequence(difficulty));

        playGame(colorBtn, challengeSeq);
        tryAgainBtn.classList.remove('active');
    })

    // Continue challenge
    continueBtn.addEventListener('click', () => {
        challengeSeq.length = 0;
        challengeSeq.push(...createChallengeSequence(++difficulty));
        
        playGame(colorBtn, challengeSeq);
        continueBtn.classList.remove('active');
    })
});