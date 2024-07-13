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
        if (computerChoice === "rock") { console.log(`It's a tie! Rock Rock`) }
        if (computerChoice === "paper") { console.log(`You lose! Their ${computerChoice} beats your ${humanChoice}`); computerScore++; }
        if (computerChoice === "scissors") { console.log(`You win! Your ${humanChoice} beats their ${computerChoice}`); playerScore++;}
    }
    else if (humanChoice === "paper") {
        if (computerChoice === "paper") { console.log(`It's a tie! Paper Paper`) }
        if (computerChoice === "scissosrs") { console.log(`You lose! Their ${computerChoice} beats your ${humanChoice}`); computerScore++; }
        if (computerChoice === "rock") { console.log(`You win! Your ${humanChoice} beats their ${computerChoice}`); playerScore++; }
    }
    else if (humanChoice === "scissors") {
        if (computerChoice === "scissors") { console.log(`It's a tie! Scissors Scissors`) }
        if (computerChoice === "rock") { console.log(`You lose! Their ${computerChoice} beats your ${humanChoice}`); computerScore++; }
        if (computerChoice === "paper") { console.log(`You win! Your ${humanChoice} beats their ${computerChoice}`); playerScore++; }
    }
    else {
        console.info("Player choice is invalid");
    }
}

// Human choice
// based on the buttons get rock, paper, or scissors
const choices = document.querySelector('#choices');
choices.addEventListener('click', (e) => {
    let computerSelection = getComputerChoice();
    let humanSelection = e.target.textContent;

    playRound(humanSelection, computerSelection);
});