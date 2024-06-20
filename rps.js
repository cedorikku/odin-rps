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

let computerChoice = getComputerChoice();

// Human choice
// based on the prompt get rock, paper, or scissors
function getHumanChoice() {
    // 1. Prompt user for answer
    return window.prompt("Rock, Paper, Scissors!");
}

let humanChoice = getHumanChoice();