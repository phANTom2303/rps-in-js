let playerScore = 0;
let computerScore = 0;


function getComputeMove() {
    let number = Math.floor((Math.random() * 3) + 1);
    switch (number) {
        case 1:
            return "rock";
        case 2:
            return "paper";
        case 3:
            return "scissors";
    }

    return NaN;
}

function getPlayerMove() {
    return prompt("Enter either rock or paper or scissor");

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
            playerScore++;
            return "player";

        }
        else {
            computerScore++;
            return "computer";

        }
    }
}

function displayScore() {
    console.log("Player score is at : " + playerScore);
    console.log("Computer score is at : " + computerScore);
}

function run() {
    let rounds = parseInt(prompt("Enter Number of rounds"));
    for (let i = 1; i <= rounds; i++) {
        console.log("Round :  " + i);
        let player = getPlayerMove();
        let comp = getComputeMove();
        compare(player,comp);
        console.log("computer move = " + comp);
        console.log("Player move = " + player);
        displayScore();
        console.log("---------------------------------");
    }

    if (playerScore > computerScore)
        console.log("Player won");
    else if (computerScore > playerScore)
        console.log("Computer won");
    else
        console.log("Draw");
}

run();




