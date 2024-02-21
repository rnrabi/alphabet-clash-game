// document.getElementById('home').addEventListener('click', function () {
//     const homeScreen = document.getElementById('home');
//     const keyBoard = document.getElementById('keyboard');
//     homeScreen.classList.add('hidden');
//     keyBoard.classList.remove('hidden');
//     randomLetter();

// })

// const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
// function randomLetter() {
//     const displayLetter = document.getElementById('displayY');
//     const letterIndex = Math.round(Math.random()*25);
//     const letter = alphabet[letterIndex];
//     displayLetter.innerText = letter.toUpperCase();
//     const keyBoardColor = document.getElementById(letter);
//     keyBoardColor.style.background = 'yellow';
// }

const audio = new Audio();
let isGamePlay = false;

function playNow() {
    isGamePlay = true;
    const letter = getARandomAlphabet();
    hideElementById('home');
    showElementById('keyboard');
    setTextElementValueById('displayY', letter);
    setBackgroundColorById(letter);
}

document.addEventListener('keyup', function (event) {
    if(isGamePlay === false) return;
    const currentAlphabet = getElementTextById('displayY');
    if (event.key === 'Escape') {
        console.log(event.key)
        gameOver();
        const currentScore = getTextElementValueById('gameScore');
        setTextElementValueById('final-score', currentScore);
        removeBackgroundColorById(currentAlphabet);
    }
    if (currentAlphabet === event.key) {
        removeBackgroundColorById(currentAlphabet);
        playNow();
        const currentScore = getTextElementValueById('gameScore');
        const newScore = currentScore + 1;
        setTextElementValueById('gameScore', newScore);
        audio.src = 'audio/success.mp3';
        audio.play();
        
    }
    else {
        const currentLifeScore = getTextElementValueById('lifeScore');
        const newLifeScore = currentLifeScore - 1;
        setTextElementValueById('lifeScore', newLifeScore);
        audio.src = 'audio/wrong.mp3';
        audio.play();
        const percent = (newLifeScore/5)*100;
        document.getElementById('artboard').style.background = `linear-gradient(#ffffff ${percent}%,red)`

        if (newLifeScore === 0) {
            gameOver();
            removeBackgroundColorById(currentAlphabet);
            const currentScore = getTextElementValueById('gameScore');
            setTextElementValueById('final-score', currentScore);
            document.getElementById('artboard').style.background = `linear-gradient(#ffffff 100%,red)`;
        }
    }

})

const modalBox = document.getElementById('modal-container');
function openModal(event){
    // console.log(event.clientY)
    if(event.clientY < 20){
        modalBox.style.display = "flex";
    }

}

document.body.onmousemove = openModal;


document.getElementById('close').addEventListener('click' , function(event){
// console.log(event.target.parentNode.parentNode);
event.target.parentNode.parentNode.style.display = 'none';
})