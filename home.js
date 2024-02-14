document.getElementById('home').addEventListener('click', function () {
    const homeScreen = document.getElementById('home');
    const keyBoard = document.getElementById('keyboard');
    homeScreen.classList.add('hidden');
    keyBoard.classList.remove('hidden');
    randomLetter();

})

const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
function randomLetter() {
    const displayLetter = document.getElementById('displayY');
    const letterIndex = Math.round(Math.random()*25);
    const letter = alphabet[letterIndex];
    displayLetter.innerText = letter.toUpperCase();
    const keyBoardColor = document.getElementById(letter);
    keyBoardColor.style.background = 'yellow';
}