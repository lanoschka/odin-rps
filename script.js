function getComputerChoice(){
    const choices = ['Rock', 'Paper', 'Scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function getPlayerChoice(){
    let playerSelection;
    do {
        playerSelection = prompt("Enter your choice (Rock, Paper, or Scissors):").toLowerCase();
    } while (!['rock', 'paper', 'scissors'].includes(playerSelection));

    return playerSelection;
}

//test the function
//console.log("Computer's choice: " + getComputerChoice());
function playRound(playerSelection, computerSelection) {
    // playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();

    if (playerSelection === computerSelection) {
        return "It's a tie! Replay the round.";
    } else if (
        (playerSelection === 'rock' && computerSelection === 'scissors') ||
        (playerSelection === 'paper' && computerSelection === 'rock') ||
        (playerSelection === 'scissors' && computerSelection === 'paper')
    ) {
        return 'You win! ' + playerSelection + ' beats ' + computerSelection + '.';
    } else {
        return 'You lose! ' + computerSelection + ' beats ' + playerSelection + '.';
    }
}

function game() {
    let playerScore = 0;
    let computerScore = 0;

    while (playerScore < 3 && computerScore < 3) {
        const playerSelection = getPlayerChoice();
        const computerSelection = getComputerChoice();

        const roundResult = playRound(playerSelection, computerSelection);
        console.log(roundResult);

        if (roundResult.includes('win')) {
            playerScore++;
        } else if (roundResult.includes('lose')) {
            computerScore++;
        }
    }

    if (playerScore > computerScore) {
        return 'You win the game! Final score: ' + playerScore + '-' + computerScore;
    } else if (playerScore < computerScore) {
        return 'You lose the game! Final score: ' + playerScore + '-' + computerScore;
    } else {
        return 'It\'s a tie! Final score: ' + playerScore + '-' + computerScore;
    }
}

// Test the game
console.log(game());