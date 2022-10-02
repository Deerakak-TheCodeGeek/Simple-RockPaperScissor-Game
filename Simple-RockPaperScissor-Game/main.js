const totalScore = { 'playerScore': 0, 'computerScore': 0 }
function getComputerChoice() {
    let rspChoice = ['Rock', 'Paper', 'Scissor']
    return rspChoice[Math.floor(Math.random() * rspChoice.length)]
}

function getResult(playerChoice, computerChoice) {
    let score = 0
    if (playerChoice == 'Rock' && computerChoice == 'Scissor') score = 1
    else if (playerChoice == 'Paper' && computerChoice == 'Rock') score = 1
    else if (playerChoice == 'Scissor' && computerChoice == 'Paper') score = 1
    else if (playerChoice == computerChoice) score = 0
    else if (playerChoice == computerChoice) score = 0
    else if (playerChoice == computerChoice) score = 0
    else score = -1
    return score



}

function showResult(score, playerChoice, computerChoice) {
    let playerScoreDiv = document.getElementById("player-score")
    let computerScoreDiv = document.getElementById("computer-score")
    let resultDiv = document.getElementById('result')
    let handsDiv = document.getElementById('hands')

    if (score == -1) {
        resultDiv.innerText = 'You Lose!'
        computerScoreDiv.innerText = 'Computer Score: +1'
    }
    else if (score == 1) {
        resultDiv.innerText = 'You Won!'
        computerScoreDiv.innerText = 'Computer Score: -1'
    }
    else {
        resultDiv.innerText = 'It is a Tie'
        computerScoreDiv.innerText = 'Computer Score: 0'
    }

    handsDiv.innerText = `👱${playerChoice} vs 🤖${computerChoice}`

    playerScoreDiv.innerText = 'Your Score: ' + score
}

function onClickRPS(playerChoice) {
    let computerChoice = getComputerChoice()
    let score = getResult(playerChoice, computerChoice)
    totalScore['playerScore'] += score
    showResult(score, playerChoice, computerChoice)

}

function playGame() {

    let btns = document.querySelectorAll('.rpsButton')

    btns.forEach(btn => {
        btn.onclick = () => onClickRPS(btn.value)
    });

    let endGBtn = document.getElementById('endGameButton')
    endGBtn.onclick = () => endGame()
}


function endGame() {
    totalScore['playerScore'] = 0
    totalScore['computerScore'] = 0

    let playerScoreDiv = document.getElementById("player-score")
    let resultDiv = document.getElementById('result')
    let handsDiv = document.getElementById('hands')
    let computerScoreDiv = document.getElementById("computer-score")

    playerScoreDiv.innerText = ''
    resultDiv.innerText = ''
    handsDiv.innerText = ''
    computerScoreDiv.innerText = ''
}

playGame()