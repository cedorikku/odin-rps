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

// Human choice
// based on the prompt get rock, paper, or scissors
function getHumanChoice() {
    // 1. Prompt user for answer
    return window.prompt("Rock, Paper, Scissors!");
}

// Round by round gameplay
// tracks score everytime
// has winner announcement
function playRound(humanChoice, computerChoice) {
    // 1. Make player choice case insensitive

    // 2. Initialize score from 0
    // 3. Compare player's answer to computer
    // 4. Show result
    // 5. Update score
}

const computerSelection = getComputerSelection();
const humanSelection = getHumanSelection();

playRound(humanSelection, computerSelection);