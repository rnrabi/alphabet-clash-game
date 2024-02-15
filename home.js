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



function playNow() {
    const letter = getARandomAlphabet();
    hideElementById('home');
    showElementById('keyboard');
    setTextElementValueById('displayY', letter);
    setBackgroundColorById(letter);
}

document.addEventListener('keyup', function (event) {
    const currentAlphabet = getElementTextById('displayY');
    if (currentAlphabet === event.key) {
        removeBackgroundColorById(currentAlphabet);
        playNow();
        const currentScore = getTextElementValueById('gameScore');
        const newScore = currentScore + 1;
        setTextElementValueById('gameScore', newScore);
    }
    else {
        const currentLifeScore = getTextElementValueById('lifeScore');
        const newLifeScore = currentLifeScore - 1;
        setTextElementValueById('lifeScore', newLifeScore);
        if (newLifeScore === 0) {
            gameOver();
            removeBackgroundColorById(currentAlphabet);
            const currentScore = getTextElementValueById('gameScore');
            setTextElementValueById('final-score', currentScore);
        }
    }

})

