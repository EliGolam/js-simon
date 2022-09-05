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
    console.log(topLeft.getAttribute('id'));

    topLeft.addEventListener('click', btnClicked, topLeft);
    topRight.addEventListener('click', btnClicked, topRight);
    bottomRight.addEventListener('click', btnClicked, bottomRight);
    bottomLeft.addEventListener('click', btnClicked, bottomLeft);
})

// FUNCTIONS
function btnClicked(button) {
    console.log('DEBUG - Simon Says btn: Clicked!', button);
}