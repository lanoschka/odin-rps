function getComputerChoice(){
    const choices = ['Rock', 'Paper', 'Scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

//test the function
const computerChoice = getComputerChoice();
console.log("Computer's choice: " + computerChoice);