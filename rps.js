console.log("hello world!");
console.clear();

// Random number between 1-3
// based on the number get rock, paper, or scissors
function getComputerChoice() {
    // 1. RANDOMIZE rand (1-3)
    let rand = Math.floor((Math.random() * 3) + 1);
    // 2. CHOOSE decision based on random value
    switch(rand) {
        case 1:
            return "rock";
        case 2:
            return "paper";
        case 3:
            return "scissors";
        default:
            console.error("Something went wrong!");
    }
}

// Initialize score from 0
let playerScore = 0; 
let computerScore = 0;

// Round by round gameplay
// tracks score everytime
// has winner announcement
function playRound(humanChoice, computerChoice) {
    // 1. Make player choice case insensitive
    humanChoice = humanChoice.toLowerCase();
    // 2. Compare player's answer to computer
    // 3. Show result
    // 4. Update score
    if (humanChoice === "rock") {
        if (computerChoice === "rock") { showTie(humanChoice); }
        else if (computerChoice === "paper") { showLose(humanChoice, computerChoice); computerScore++; }
        else if (computerChoice === "scissors") { showWin(humanChoice, computerChoice); playerScore++; }
    }
    else if (humanChoice === "paper") {
        if (computerChoice === "paper") { showTie(humanChoice); }
        else if (computerChoice === "scissors") { showLose(humanChoice, computerChoice); computerScore++; }
        else if (computerChoice === "rock") { showWin(humanChoice, computerChoice); playerScore++; }
    }
    else if (humanChoice === "scissors") {
        if (computerChoice === "scissors") { showTie(humanChoice); }
        else if (computerChoice === "rock") { showLose(humanChoice, computerChoice); computerScore++; }
        else if (computerChoice === "paper") { showWin(humanChoice, computerChoice); playerScore++; }
    }
    else {
        console.error("ERROR! Something went wrong.");
    }
}

// Display round result
const result = document.querySelector('#result');
function showLose(humanChoice, computerChoice) {
    result.textContent = `You lose! Their ${computerChoice} beats your ${humanChoice}`;
    clearResult();
}

function showWin(humanChoice, computerChoice) {
    result.textContent = `You win! Your ${humanChoice} beats their ${computerChoice}`;
    clearResult();
}

function showTie(selection) {
    result.textContent = `It's a tie! ${selection} ${selection}`;
    clearResult();
}

function clearResult() {
    setTimeout( () => {
        result.textContent = '';
    }, 2500);
}

// Human choice
// based on the buttons get rock, paper, or scissors
const choices = document.querySelector('#choices');
choices.addEventListener('click', (e) => {
    let computerSelection = getComputerChoice();
    let humanSelection = e.target.textContent;

    playRound(humanSelection, computerSelection);
});