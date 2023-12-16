function getComputerChoice(){
    const choices = ['Rock', 'Paper', 'Scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

//test the function
console.log("Computer's choice: " + getComputerChoice());

const playerSelection = prompt("Select Rock, Paper or Scissors").toLowerCase();
const computerSelection = getComputerChoice().toLowerCase();

function playRound(playerSelection, computerSelection){

    if(playerSelection === computerSelection){
       
        return "It's a tie! Replay the round.";
        
    }else if(
        (playerSelection === 'rock' && computerSelection === 'scissors') ||
        (playerSelection === 'paper' && computerSelection === 'rock') ||
        (playerSelection === 'scissors' && computerSelection === 'paper')
    ){
        return 'You win! ' + playerSelection + ' beats ' + computerSelection + '.';
    }else {
        return 'You lose! ' + computerSelection + ' beats ' + playerSelection + '.';
    }
   

}

//test the functiomn
console.log(playRound(playerSelection, computerSelection));
