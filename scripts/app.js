// Initial Handshake
console.log('DEBUG - app.js: OK!');

// Initializing necessary global variables
const btnStart = document.getElementById('simon-says_start');

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
    const buttons = document.querySelectorAll('.simon-says_blocks');
    console.log(buttons);
    
    // Create the challenge
    let difficulty = 4;
    let challengeSeq = createChallengeSequence(difficulty);

    // Start Challenge
    startGame(buttons, challengeSeq);

    // Continue challenge
    continueBtn.addEventListener('click', () => {
        startGame(buttons, challengeSeq);
        continueBtn.classList.remove('active');
    })


    // Add click events to buttons
    for (let button of buttons) {
        console.log('Initializing btn: ', Array.prototype.indexOf.call(buttons, button));
        button.addEventListener('click', () => {
            if (start){
                if (Array.prototype.indexOf.call(buttons, button) === challengeSeq[counter]) {
                    console.log('CORRECT!', challengeSeq[counter]);
                    (counter < challengeSeq.length - 1) ? counter++ : win = true;
    
                    if (win) {
                        console.log('YOU WON', 'counter:', counter);
                        // Blink win effect
                        start = false;
                        win = false;
                        continueBtn.classList.add('active');
                        counter = 0;
                        challengeSeq = createChallengeSequence(++difficulty);
                        // Show Button
                    }
    
                } else {
                    console.log('nopers', Array.prototype.indexOf.call(buttons, button), challengeSeq[counter], 'counter:', counter);
                    fail = true;
                    start = false;
                    counter = 0;
                    btnStart.classList.add('active');
                    deactivateButtons(buttons);
                }
            }
        })
    }
});