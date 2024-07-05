let playerScore = 0;
let computerScore = 0;

let playerChoices = document.querySelector(".player-choices");
playerChoices.addEventListener('click', (playerClicked) => {
    let whichButton = playerClicked.target;
    let playerMove;
    switch (whichButton.id) {
        case 'rock':
        case 'rockImg':
            playerMove = 'Rock';
            break;

        case 'paper':
        case 'paperImg':
            playerMove = 'Paper';
            break;

        case 'scissors':
        case 'scisImg':
            playerMove = 'Scissors';
            break;

    }
    updateImage('player',playerMove);
    run(playerMove);
});

let playerScoreDisplay = document.querySelector("#player-score");
let computerScoreDisplay = document.querySelector("#computer-score");

function updatePlayerScore()
{
    playerScore++;
    playerScoreDisplay.textContent = playerScore;
}

function updateComputerScore()
{
    computerScore++;
    computerScoreDisplay.textContent = computerScore;
}

function updateImage(moveOf, move)
{
    let classSelector = '.' + moveOf + '-selection';
    // console.log(classSelector);
    let container = document.querySelector(classSelector);
    move = move.toLowerCase();
    let filePath = './assets/' + move + '.png';
    // console.log(filePath);
    container.src = filePath;
}

function getComputeMove() {
    let number = Math.floor((Math.random() * 3) + 1);
    let computerMove;
    switch (number) {
        case 1:
            computerMove = "rock";
            break;
        case 2:
            computerMove = "paper";
            break;
        case 3:
            computerMove = "scissors";
            break;
    }
    updateImage('computer',computerMove);
    return computerMove;
}

function compare(player, comp) {
    let r = "rock";
    let p = "paper";
    let s = "scissors";
    player = player.toLowerCase();
    if (player == comp)
        return "draw";
    else {
        if ((player === r && comp === s) || (player === s && comp === p) || (player === p && comp === r)) {
            
            updatePlayerScore();
            return "player";

        }
        else {
            updateComputerScore();
            return "computer";

        }
    }
}

function run(playerMove) {
    let comp = getComputeMove();
    compare(playerMove, comp);
}

// run();




