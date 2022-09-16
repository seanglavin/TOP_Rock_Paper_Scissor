

function playRound(playerSelection, computerSelection) {
    if (playerSelection == "rock" && computerSelection == "scissor") {
        alert(`You win! ${playerSelection} beats ${computerSelection}`)
        let winLoseDraw = "WIN"
        return winLoseDraw
    }
    if (playerSelection == "paper" && computerSelection == "rock") {
        alert(`You win! ${playerSelection} beats ${computerSelection}`)
        let winLoseDraw = "WIN"
        return winLoseDraw
    }
    if (playerSelection == "scissor" && computerSelection == "paper") {
        alert(`You win! ${playerSelection} beats ${computerSelection}`)
        let winLoseDraw = "WIN"
        return winLoseDraw
    }
    if (playerSelection == "rock" && computerSelection == "paper") {
        alert(`You lose! ${playerSelection} loses to ${computerSelection}`)
        let winLoseDraw = "LOSE"
        return winLoseDraw
    }
    if (playerSelection == "paper" && computerSelection == "scissor") {
        alert(`You lose! ${playerSelection} loses to ${computerSelection}`)
        let winLoseDraw = "LOSE"
        return winLoseDraw
    }
    if (playerSelection == "scissor" && computerSelection == "rock") {
        alert(`You lose! ${playerSelection} loses to ${computerSelection}`)
        let winLoseDraw = "LOSE"
        return winLoseDraw
    }
    if (playerSelection == "rock" && computerSelection == "rock") {
        alert(`You draw! ${playerSelection} is same as ${computerSelection}`)
        let winLoseDraw = "DRAW"
        return winLoseDraw
    }
    if (playerSelection == "scissor" && computerSelection == "scissor") {
        alert(`You draw! ${playerSelection} is same as ${computerSelection}`)
        let winLoseDraw = "DRAW"
        return winLoseDraw
    }
    if (playerSelection == "paper" && computerSelection == "paper") {
        alert(`You draw! ${playerSelection} is same as ${computerSelection}`)
        let winLoseDraw = "DRAW"
        return winLoseDraw
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


// good function, unused so far
function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}


let winCount = 0;
let compWinCount = 0;
let gameCount = 0;


// choiceButtons is a node list 
const choiceButtons = document.querySelectorAll('div.buttonContainer>button')

choiceButtons.forEach((button) => {
    button.addEventListener('click', () => {
        playerSelection = button.textContent.toLocaleLowerCase()



        let choices = ["rock","paper","scissor"]
        computerSelection = choices[Math.floor(Math.random() * choices.length)]
        let winLoseDraw = playRound(playerSelection, computerSelection)
        gameCount += 1;
        if (winLoseDraw == "WIN") {
            winCount += 1;
        }
        if (winLoseDraw == "LOSE") {
            compWinCount += 1;
        }

        // console.log(winLoseDraw)
        // console.log(playerSelection)
        // console.log(computerSelection)

        const resultContent = document.querySelectorAll("div.resultContentText, div.winLoseResult, div.countContentText")
        resultContent.forEach(result => {
            result.remove();
        })

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

        const winLoseResult = document.querySelector("#winLoseDrawText")
        const winLoseContent = document.createElement("div")
        winLoseContent.classList.add("winLoseResult")
        winLoseContent.textContent = `${winLoseDraw}`
        winLoseResult.appendChild(winLoseContent)

        const footerWinsCounter = document.querySelector("#winsCount")
        const footerWinsCounterContent = document.createElement("div")
        footerWinsCounterContent.classList.add("countContentText")
        footerWinsCounterContent.textContent = `${winCount}`
        footerWinsCounter.appendChild(footerWinsCounterContent)

        const footerCompWinsCounter = document.querySelector("#compWinsCount")
        const footerCompWinsCounterContent = document.createElement("div")
        footerCompWinsCounterContent.classList.add("countContentText")
        footerCompWinsCounterContent.textContent = `${compWinCount}`
        footerCompWinsCounter.appendChild(footerCompWinsCounterContent)

        const footerGamesCounter = document.querySelector("#gamesCount")
        const footerGamesCounterContent = document.createElement("div")
        footerGamesCounterContent.classList.add("countContentText")
        footerGamesCounterContent.textContent = `${gameCount}`
        footerGamesCounter.appendChild(footerGamesCounterContent)

    })
})

function theReseter() {
    if (winCount == 5 || compWinCount == 5) {
        if (winCount == 5) {
            alert(`You win!!! you were first to 5 in ${gameCount} games!`)
        }
        if (compWinCount == 5) {
            alert(`You lose!!! Computer was first to 5 in ${gameCount} games!`)
        }
        winCount = 0;
        compWinCount = 0;
        gameCount = 0;
    }
    console.log("hello")
}

setInterval(theReseter, 1000)
