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
            console.error("ERROR! Computer's choice went wrong!");
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
function playRound(playerChoice, computerChoice) {
    // 1. Make player choice case insensitive
    playerChoice = playerChoice.toLowerCase();
    // 2. Compare player's answer to computer
    // 3. Show result
    // 4. Update score
    if (playerChoice === computerChoice) { showTie(); }
    else if (playerChoice === "rock") {
        if (computerChoice === "paper") { showLose(playerChoice, computerChoice); updateScore("lose"); }
        else { showWin(playerChoice, computerChoice); updateScore("win"); }
    }
    else if (playerChoice === "paper") {
        if (computerChoice === "scissors") { showLose(playerChoice, computerChoice); updateScore("lose"); }
        else { showWin(playerChoice, computerChoice); updateScore("win"); }
    }
    else if (playerChoice === "scissors") {
        if (computerChoice === "rock") { showLose(playerChoice, computerChoice); updateScore("lose"); }
        else { showWin(playerChoice, computerChoice); updateScore("win"); }
    }
    else {
        console.error("ERROR! Choice went wrong.");
        console.log(playerChoice);
        console.log(computerChoice);
    }
}

// Display round result
const result = document.querySelector('#result');
let lastTimeout;
function showLose(playerChoice, computerChoice) {
    clearTimeout(lastTimeout);
    result.textContent = `You lose! Their ${computerChoice} beats your ${playerChoice}`;
    clearResult();
}

function showWin(playerChoice, computerChoice) {
    clearTimeout(lastTimeout);
    result.textContent = `You win! Your ${playerChoice} beats their ${computerChoice}`;
    clearResult();
}

function showTie() {
    clearTimeout(lastTimeout);
    result.textContent = `It's a tie!`;
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
    let humanSelection = e.target.getAttribute("data-gesture");

    playRound(humanSelection, computerSelection);
});