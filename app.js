const winner = document.querySelector('.winner');
const winnerContent = document.querySelector('.winnerContent');
const playerSelection = document.querySelector('.playerResult');
const playerAttempt = document.querySelector('.playerAttempt');
const computerSelection = document.querySelector('.computerResult');
const computerAttempt = document.querySelector('.computerAttempt');
const paper = document.querySelector('.papper');
const rock = document.querySelector('.rock');
const scissors = document.querySelector('.scissors');
const resetBtn = document.querySelector('.reset');

let attempt1 = 0;
let attempt2 = 0;
let gameOver = false;

function randomNumber() {
    return Math.floor(Math.random() * 3)
};

function handleClick(event) {
    if (!gameOver) {

        let player = event.target.textContent;
        playerSelection.textContent = player;
        const options = [rock, paper, scissors];
        const randomIndex = randomNumber();
        let computer = options[randomIndex].textContent;
        computerSelection.textContent = computer;
        let result = determineWinner(player, computer);
        winner.textContent = result;
        if (result === 'Tie') {
            winnerContent.textContent = '';
        }
        else {
            switch (result) {
                case "Player win":
                    winnerContent.textContent = getWinningMessage(player, computer);
                    attempt1++;
                    playerAttempt.textContent = attempt1;
                    break;
                case "Computer win":
                    winnerContent.textContent = getWinningMessage(computer, player);
                    attempt2++;
                    computerAttempt.textContent = attempt2;
                    break;
            }

        }
        if (attempt1 === 5 || attempt2 === 5) {
            gameOver = true
        }
    }
};

function getWinningMessage(winningChoice, losingChoice) {
    switch (winningChoice) {
        case "✊":
            return "Rock crushes scissors";
        case "✋":
            return "Paper covers rock";
        case "✌":
            return "Scissors cuts paper";
    }
}

function determineWinner(player, computer) {
    switch (player + computer) {
        case "✊✊":
        case "✋✋":
        case "✌✌":
            return "Tie";
        case "✊✌":
            return "Computer win";
        case "✊✋":
            return "Player win";
        case "✋✊":
            return "Computer win";
        case "✋✌":
            return "Player win";
        case "✌✊":
            return "Player win";
        case "✌✋":
            return "Computer win";
    }
}

function reset() {
    winner.textContent = '';
    attempt1 = 0;
    attempt2 = 0;
    playerAttempt.textContent = attempt1;
    computerAttempt.textContent = attempt2;
    gameOver = false;
};

resetBtn.addEventListener('click', function () {
    reset()
})

rock.addEventListener('click', handleClick);
paper.addEventListener('click', handleClick);
scissors.addEventListener('click', handleClick);

