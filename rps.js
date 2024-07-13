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
let playerScore, computerScore;

window.addEventListener('DOMContentLoaded', resetScore);

function resetScore() {
    playerScore = 0; 
    computerScore = 0;
    updateScore("reset");
}

const scores = document.getElementsByTagName('span');

function updateScore(action) {
    switch(action) {
        case "reset":
            scores[0].textContent = 0;
            scores[1].textContent = 0;
            break;
        case "win":
            scores[0].textContent = ++playerScore;
            break;
        case "lose":
            scores[1].textContent = ++computerScore;
            break;
        default:
            console.error("ERROR! Something went wrong.");
            break;
    }
}

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
        else if (computerChoice === "paper") { showLose(humanChoice, computerChoice); updateScore("lose"); }
        else if (computerChoice === "scissors") { showWin(humanChoice, computerChoice); updateScore("win"); }
    }
    else if (humanChoice === "paper") {
        if (computerChoice === "paper") { showTie(humanChoice); }
        else if (computerChoice === "scissors") { showLose(humanChoice, computerChoice); updateScore("lose"); }
        else if (computerChoice === "rock") { showWin(humanChoice, computerChoice); updateScore("win"); }
    }
    else if (humanChoice === "scissors") {
        if (computerChoice === "scissors") { showTie(humanChoice); }
        else if (computerChoice === "rock") { showLose(humanChoice, computerChoice); updateScore("lose"); }
        else if (computerChoice === "paper") { showWin(humanChoice, computerChoice); updateScore("win"); }
    }
    else {
        console.error("ERROR! Something went wrong.");
    }
}

// Display round result
const result = document.querySelector('#result');
let lastTimeout;
function showLose(humanChoice, computerChoice) {
    clearTimeout(lastTimeout);
    result.textContent = `You lose! Their ${computerChoice} beats your ${humanChoice}`;
    clearResult();
}

function showWin(humanChoice, computerChoice) {
    clearTimeout(lastTimeout);
    result.textContent = `You win! Your ${humanChoice} beats their ${computerChoice}`;
    clearResult();
}

function showTie(selection) {
    clearTimeout(lastTimeout);
    result.textContent = `It's a tie! ${selection} ${selection}`;
    clearResult();
}

function clearResult() {
    lastTimeout = setTimeout( () => {
        result.textContent = '';
    }, 2400);
}

// Human choice
// based on the buttons get rock, paper, or scissors
const choices = document.querySelector('#choices');
choices.addEventListener('click', (e) => {
    let computerSelection = getComputerChoice();
    let humanSelection = e.target.textContent;

    playRound(humanSelection, computerSelection);
});