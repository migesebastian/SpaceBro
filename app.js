/*-------------------------------- Constants --------------------------------*/
const selectors = {
    spacebroGame: '#spacebroGame',
    letter: '.letter',
    reset: '#reset',
    word: '#word',
    message: '#message'
}
const words = ['GAINZ', 'PROTEIN', 'FAILURE', 'PUMPED', 'DED']
const randomIndex = (words.length);
const selectedWords = words[randomIndex];
const MAX = 6
/*-------------------------------- Variables --------------------------------*/
let selectedWord = '';
let displayedWord = '';
let attempts = 0;
/*------------------------ Cached Element References ------------------------*/

const spacebroGame = document.querySelector(selectors.spacebroGame)
const wordDisplay = document.querySelector(selectors.word)
const messageDisplay = document.querySelector(selectors.message)
const resetGame = document.querySelector(selectors.reset)

/*----------------------------- Event Listeners -----------------------------*/


spacebroGame.addEventListener('click', (event) => {
    if (event.target.classList.contains(selectors.letter.slice(1))) {
        handleLetterGuess(event.target.dataset.letter);
    } if (event.target.id === selectors.reset.slice(1)) {
        resetGame();
    }
})

/*-------------------------------- Functions --------------------------------*/

function startGame() {
    selectedWord = words[Math.floor(Math.random() * words.length)];
    displayedWord = '_'.repeat(selectedWord.length);
    attempts = 0;
    messageDisplay.textContent = '_';
    updateDisplay();
}

function handleLetterGuess(letter){
    let displayedArray = displayedWord.split('');
    if (selectedWord.includes(letter)) {

    }
}
// function handleLetterGuess(letter) {
//     if (selectedWord.includes(letter)) {
//         let displayedArray = displayedWord.split('');
//         selectedWord.split('').forEach((character, index) => {
//             if (character === letter) {
//                 displayedArray[index] = letter;
//             }
//         });
//         displayedWord = displayedArray.join('');
//     } else {
//         attempts++;
//     }
//     console.log(displayedArray)
//     checkGameStatus();
//     updateDisplay();
// }

function checkGameStatus() {
    if (displayedWord === selectedWord) {
        messageDisplay.textContent = 'Congratulations! You won!';
    } else if (attempts >= MAX) {
        messageDisplay.textContent = `Game Over! The word was ${selectedWord}.`;
    }
}

function updateDisplay() {
    wordDisplay.textContent = displayedWord.split('').join(' ');
    messageDisplay.textContent = `Attempts: ${attempts}/${MAX}`;
}

function reset() {

}

startGame()