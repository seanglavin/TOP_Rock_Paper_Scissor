# TOP_Rock_Paper_Scissor
Javascript rock paper scissor game.  Practice project for The Odin project


We will make a game where the user plays RPS (rock paper scissor) against a computer.

PseudoCode:

function playRound(playerSelection, computerSelection) {
    Compare both selections;
    return result win or lose;
}

function getPlayerSelection(user text input){
    prompt user for input to choose RPS;
    clean the selection of case sensitivity;
    return result as playerSelection; 
}

function getComputerSelection(){
    randomly generate one of 3 options, RPS;
    return result as computerSelection;
}

function playGame(playRound) {
    play 5 rounds in a loop and output the results
}