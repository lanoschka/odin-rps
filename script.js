function getComputerChoice(){
    const choices = ['Rock', 'Paper', 'Scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

//test the function
//console.log("Computer's choice: " + getComputerChoice());
function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
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
        const playerSelection = prompt("Enter your choice (Rock, Paper, or Scissors):");
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
        console.log('You win the game! Final score: ' + playerScore + '-' + computerScore);
    } else if (playerScore < computerScore) {
        console.log('You lose the game! Final score: ' + playerScore + '-' + computerScore);
    } else {
        console.log('It\'s a tie! Final score: ' + playerScore + '-' + computerScore);
    }
}

// Test the game
game();