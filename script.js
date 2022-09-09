

function playRound(playerSelection, computerSelection) {
    if (playerSelection == "rock" && computerSelection == "scissor") {
        alert(`You win! ${playerSelection} beats ${computerSelection}`)
        return true
    }
    if (playerSelection == "paper" && computerSelection == "rock") {
        alert(`You win! ${playerSelection} beats ${computerSelection}`)
        return true
    }
    if (playerSelection == "scissor" && computerSelection == "paper") {
        alert(`You win! ${playerSelection} beats ${computerSelection}`)
        return true
    }
    if (playerSelection == "rock" && computerSelection == "paper") {
        alert(`You lose! ${playerSelection} loses to ${computerSelection}`)
        return false
    }
    if (playerSelection == "paper" && computerSelection == "scissor") {
        alert(`You lose! ${playerSelection} loses to ${computerSelection}`)
        return false
    }
    if (playerSelection == "scissor" && computerSelection == "rock") {
        alert(`You lose! ${playerSelection} loses to ${computerSelection}`)
        return false
    }
    if (playerSelection == "rock" && computerSelection == "rock") {
        alert(`You draw! ${playerSelection} is same as ${computerSelection}`)
        return false
    }
    if (playerSelection == "scissor" && computerSelection == "scissor") {
        alert(`You draw! ${playerSelection} is same as ${computerSelection}`)
        return false
    }
    if (playerSelection == "paper" && computerSelection == "paper") {
        alert(`You draw! ${playerSelection} is same as ${computerSelection}`)
        return false
    }
    
}

function playGame() {
    let wins = 0;
    for (let i = 0; i < 5; i++) {
        if (playRound(getPlayerSelection(), getComputerSelection())) {
            wins++
        }
    }
    alert(`You won ${wins} of 5 rounds `)
}

function getPlayerSelection() {
    let playerInput = prompt("What is your choice?")
    playerSelection = playerInput.toLowerCase()
    return playerSelection
}


function getComputerSelection() {
    let choices = ["rock","paper","scissor"]
    let computerSelection = choices[Math.floor(Math.random() * choices.length)]
    return computerSelection;
}


// choiceButtons is a node list 
const choiceButtons = document.querySelectorAll('div.buttonContainer>button')



choiceButtons.forEach((button) => {
    button.addEventListener('click', () => {
        playerSelection = button.textContent.toLocaleLowerCase()

        let choices = ["rock","paper","scissor"]
        computerSelection = choices[Math.floor(Math.random() * choices.length)]
        playRound(playerSelection, computerSelection)
        console.log(playerSelection)
        console.log(computerSelection)

        const playerRoundResults = document.querySelector("#playerResult")
        const playerResultContent = document.createElement("div")
        playerResultContent.classList.add("resultContentText")
        playerResultContent.textContent = `${playerSelection}`
        playerRoundResults.appendChild(playerResultContent)

        const computerRoundResults = document.querySelector("#computerResult")
        const computerResultContent = document.createElement("div")
        computerResultContent.classList.add("resultContentText")
        computerResultContent.textContent = `${computerSelection}`
        computerRoundResults.appendChild(computerResultContent)


    })
})
