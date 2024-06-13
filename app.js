/*-------------------------------- Constants --------------------------------*/
const selectors = {
    spacebroGame: '#spacebroGame',
    letter: '.letter',
    reset: '#reset',
    word: '#word',
    message: '#message',
    instructionOverlay: '#instruction-overlay',
    startGame: '#start-game'
}
const words = ['GAINZ', 'PROTEIN', 'FAILURE', 'PUMPED', 'DED'];
const MAX = 6
/*-------------------------------- Variables --------------------------------*/
let selectedWord = '';
let displayedWord = '';
let attempts = 0;
let gameOver = false;
/*------------------------ Cached Element References ------------------------*/

const spacebroGame = document.querySelector(selectors.spacebroGame)
const wordDisplay = document.querySelector(selectors.word)
const messageDisplay = document.querySelector(selectors.message)
const instructionOverlay = document.querySelector(selectors.instructionOverlay);
const startGameButton = document.querySelector(selectors.startGame);

/*----------------------------- Event Listeners -----------------------------*/
startGameButton.addEventListener('click', () => {
    instructionOverlay.style.display = 'none';
    spacebroGame.classList.remove('hidden');
    startGame();
});

spacebroGame.addEventListener('click', (event) => {
    const target = event.target;
    if (target.classList.contains(selectors.letter.slice(1)) && !gameOver) {
        const letter = target.id;
        if (letter) {
            handleLetterGuess(letter);
        }
    }   if (event.target.id === selectors.reset.slice(1)) {
        startGame();
    }
})

/*-------------------------------- Functions --------------------------------*/

function startGame() {
    selectedWord = words[Math.floor(Math.random() * words.length)];
    displayedWord = '_'.repeat(selectedWord.length);
    attempts = 0;
    gameOver = false;
    messageDisplay.textContent = '_';
    updateDisplay();
}


function handleLetterGuess(letter) {
    if (selectedWord.includes(letter)) {
        let displayedArray = displayedWord.split('');
        selectedWord.split('').forEach((char, index) => {
            if (char === letter) {
                displayedArray[index] = letter;
            }
        });
        displayedWord = displayedArray.join('');
    } else {
        attempts++;
    }
    checkGameStatus();
    updateDisplay();
}

function checkGameStatus() {
    if (displayedWord === selectedWord) {
        messageDisplay.textContent = 'Congratulations! You won!';
        gameOver = true;
    } else if (attempts >= MAX) {
        messageDisplay.textContent = `Game Over! The word was ${selectedWord}.`;
        gameOver = true;
    }
}

function updateDisplay() {
    wordDisplay.textContent = displayedWord.split('').join(' ');
    if (!gameOver) {
        messageDisplay.textContent = `Attempts: ${attempts}/${MAX}`;
    }
    // spaceBro()
} 

// function spaceBro() {
//     const stateSpaceBro = [
        
//     ]

// }

startGame()