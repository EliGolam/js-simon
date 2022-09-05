// Initial Handshake
console.log('DEBUG - script.js: OK!');

// Initializing necessary global variables
const btnStart = document.getElementById('simon-says_start');

btnStart.addEventListener('click', () => {
    console.log('DEBUG - btnStart: Clicked!');
    
    // Initializing variables when the game is started
    const topLeft = document.getElementById('ss-topLeft');
    const topRight = document.getElementById('ss-topRight');
    const bottomRight = document.getElementById('ss-bottomRight');
    const bottomLeft = document.getElementById('ss-bottomLeft');
    
    let difficulty = 4;
    const challengeArr = [];
    
    while(challengeArr.length < difficulty) {
        challengeArr.push(Math.ceil(Math.random() * 4));
    }
    console.log(challengeArr);

    for(let i = 0; i < challengeArr.length; i++) {
        switch(true) {
            case (challengeArr[i] === 1): {
                btnActive(topLeft, i);
                break;
            }
            case (challengeArr[i] === 2): {
                btnActive(topRight, i);
                break;
            }
            case (challengeArr[i] === 3): {
                btnActive(bottomRight, i);
                break;
            }
            case (challengeArr[i] === 4): {
                btnActive(bottomLeft, i);
                break;
            }
        }
    }
    

    topLeft.addEventListener('click', btnClicked);
    topRight.addEventListener('click', btnClicked);
    bottomRight.addEventListener('click', btnClicked);
    bottomLeft.addEventListener('click', btnClicked);
})

// FUNCTIONS
// function btnClicked(button) {
//     console.log('DEBUG - Simon Says btn: Clicked!', button.target.getAttribute('id'));
//     button.target.classList.add('active');
// }

function btnClicked () {
    console.log('DEBUG - Simon Says btn: Clicked!', this.getAttribute('id'));
    this.classList.add('active');
}

function btnActive (button, index) {
    setTimeout(function () {
        console.log('Activating button', button.getAttribute('id'));
        button.classList.add('active')
    }, index * 1200);
    setTimeout(function () {
        console.log('Deactivating button', button.getAttribute('id'));
        button.classList.remove('active')
    }, (index*1200 + 1000))
}