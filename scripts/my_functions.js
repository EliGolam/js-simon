// FUNCTIONS
function createChallengeSequence (difficulty) {
    arr = []
    console.log('Current Difficulty:', difficulty);
    while(arr.length < difficulty) {
        arr.push(Math.floor(Math.random() * 4));
    }
    console.log('Simon Says Sequence', arr);
    return arr;
}


function btnActive (button, delay) {
    setTimeout(function () {
        console.log('Activating button', button.getAttribute('id'));
        button.classList.add('active')
    }, delay * 1200);

    setTimeout(function () {
        console.log('Deactivating button', button.getAttribute('id'));
        button.classList.remove('active')
    }, (delay*1200 + 1000));
}


function startGame (buttons, challengeSeq) {
    // Illuminate the sequence
    for(let i = 0; i < challengeSeq.length; i++) {
        console.log(buttons[challengeSeq[i]]);
        btnActive(buttons[challengeSeq[i]], i);
    }

    // Activate continue btn
    setTimeout(function(){
        start = true;
        for (let button of buttons) {
            button.classList.add('started');
        }
        console.log('Game Started!');
    }, 1200 * challengeSeq.length);
}

function deactivateButtons(buttons) {
    for (let button of buttons) {
        button.classList.remove('started');
    }
}



function clickedButton(button, option) {
    button.addEventListener('click', function(){
        const choice = activateBtn(button);
        if (choice === option) {
            console.log(choice, challengeArr, 'WIN');
            return true;
        } else {
            console.log(choice, challengeArr, 'NOPE');
            return false;
        }
    });
}


function activateBtn(button) {
    console.log('DEBUG - Simon Says btn: Clicked!', button.getAttribute('id'));
    button.classList.add('active');

    setTimeout(function () {
        console.log('Deactivating button', button.getAttribute('id'));
        button.classList.remove('active')
    }, 1000)

    return button.getAttribute('id');
}


/* function activateBtn () {
    console.log('DEBUG - Simon Says btn: Clicked!', this.getAttribute('id'));
    this.classList.add('active');

    setTimeout(() => {
        this.classList.remove('active');
        console.log('DEBUG - Simon Says btn: Deactivating', this.getAttribute('id'));
    }, 500)

    return this.getAttribute('id');
} */

