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
    updateImage('player', playerMove);
    run(playerMove);
});

let playerScoreDisplay = document.querySelector("#player-score");
let computerScoreDisplay = document.querySelector("#computer-score");
function changeColour(colourOf, colour) {
    const className = "." + colourOf;
    const box = document.querySelector(className);
    const attribute = "border : 2px solid " + colour + ";";
    box.setAttribute("style", attribute);
}

function updatePlayerScore() {
    playerScore++;
    playerScoreDisplay.textContent = playerScore;
}

function updateComputerScore() {
    computerScore++;
    computerScoreDisplay.textContent = computerScore;
}

function updateImage(moveOf, move) {
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
    updateImage('computer', computerMove);
    return computerMove;
}

function compare(player, comp) {
    let r = "rock";
    let p = "paper";
    let s = "scissors";
    player = player.toLowerCase();
    if (player == comp) {
        changeColour("player", "#cf9313");
        changeColour("computer", "#cf9313");
        return "draw";
    }
    else {
        if ((player === r && comp === s) || (player === s && comp === p) || (player === p && comp === r)) {
            changeColour("player", "green");
            changeColour("computer", "red");
            updatePlayerScore();
            return "player";

        }
        else {
            changeColour("player", "red");
            changeColour("computer", "green");
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




