var playerScore = 0;
var computerScore = 0;

play = (input) => {
    let outcome = game(input)
    let message = document.getElementById("outputText");
    message.innerHTML = outcome;

    let scoreText = "Player Score = " + playerScore + " || Computer Score = " + computerScore;
    let score = document.getElementById("scores");
    score.innerHTML = scoreText
}

game = (playerInput) => {
    let outcome = "error";
    let computerRandom = Math.floor(Math.random()*3);
    if(outcome===computerRandom) {
        outcome = "Draw";
    } else if (playerInput - computerRandom===1 || playerInput - computerRandom === -2){
        /* because rock = 0, paper = 1, Scissors = 2 || rock beats scissors outcome 0-2 = -2 */
        playerScore += 5;
        outcome = "Win";
    } else {
        computerScore += 5;
        outcome = "Lose";
    }
    let movesArr = ['Rock', 'Paper', 'Scissors'];
    let message = "You chose " + movesArr[playerInput] + "Computer chose " + movesArr[computerRandom] + ". You " + outcome + ".";
    return message;
}
