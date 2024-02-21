function hideElementById(elementId) {
    const element = document.getElementById(elementId);
    element.classList.add('hidden');
}

function showElementById(elementId) {
    const element = document.getElementById(elementId);
    element.classList.remove('hidden');
}

function setBackgroundColorById(elementId) {
    const element = document.getElementById(elementId);
    element.classList.add('bg-orange-400');
}

function removeBackgroundColorById(elementId) {
    const element = document.getElementById(elementId);
    element.classList.remove('bg-orange-400');
}

function getTextElementValueById(elementId) {
    const element = document.getElementById(elementId);
    const textValue = element.innerText;
    const value = parseInt(textValue);
    return value;
}

function setTextElementValueById(elementId, value) {
    const element = document.getElementById(elementId);
    element.innerText = value;
}

function getElementTextById(elementId) {
    const element = document.getElementById(elementId);
    const text = element.innerText;
    return text;
}

function getARandomAlphabet() {
    const alphabetsString = 'abcdefghijklmnopqrstuvwxyz';
    const alphabets = alphabetsString.split('');
    const index = Math.round(Math.random() * 25);
    const alphabet = alphabets[index];
    return alphabet;
}

function gameOver() {
    hideElementById('home');
    hideElementById('keyboard');
    showElementById('score');
    isGamePlay = false;

}

function playGround() {
    hideElementById('score')
   playNow();
   const currentScoreNull = document.getElementById('gameScore');
   currentScoreNull.innerText = 0;
   const currentLifeNull = document.getElementById('lifeScore');
   currentLifeNull.innerText = 5;

}

