// Initial Handshake
console.log('DEBUG - app.js: OK!');

// Initializing necessary global variables
const startBtn = document.getElementById('simon-says_start');

// Initializing Game properties
let start = false;
const challengeSeq = [];
let sequencePos = 0; // Position of the sequence in which the player is at currently. It starts from 0

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
    const BASE_DIFFICULTY = 1;
    let difficulty = BASE_DIFFICULTY;
    playGame(colorBtn, challengeSeq, difficulty);
    

    // Add click events to colorBtn
    for (let button of colorBtn) {
        button.addEventListener('click', () => {
            const buttonIdx = Array.prototype.indexOf.call(colorBtn, button);

            // Only activate the colorBtn if the game is started
            if (start){
                if (buttonIdx === challengeSeq[sequencePos]) {
                    console.log('CORRECT!', challengeSeq[sequencePos]);
                    if (sequencePos < challengeSeq.length - 1) {
                        sequencePos++; 
                    } 
                    else {
                        console.log('YOU WON', 'sequencePos:', sequencePos);
                        start = false;
                        toggleAllBtnsOfType(colorBtn, 'off');
                        continueBtn.classList.add('active');
                    }
    
                } else {
                    console.log('nopers', buttonIdx, challengeSeq[sequencePos], 'sequencePos:', sequencePos);
                    start = false;
                    toggleAllBtnsOfType(colorBtn, 'off');
                    tryAgainBtn.classList.add('active');
                }
            }
        })
    }


    // Try Again challenge
    tryAgainBtn.addEventListener('click', () => {
        difficulty = BASE_DIFFICULTY;
        playGame(colorBtn, challengeSeq, difficulty);
        tryAgainBtn.classList.remove('active');
    })

    // Continue challenge
    continueBtn.addEventListener('click', () => {
        playGame(colorBtn, challengeSeq, ++difficulty);
        continueBtn.classList.remove('active');
    })
});