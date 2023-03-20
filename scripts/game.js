/* JavaScript Structure
newGame()
- reset score to zero
- clear the playerMoves array
- clear the currentGame array
addTurn()
showTurns()
lightsOn()
playerTurn()
showScore()
*/

let game = {
    score: 0,
    currentGame: [],
    playerMoves: [],
    choices: ["button1", "button2", "button3", "button4"],
}

function newGame() {
    game.playerMoves = [];
    game.currentGame = [];
    game.score = 0;
    showScore();
    addTurn();
}

function addTurn() {
    game.playerMoves = [];
    game.currentGame.push(game.choices[(Math.floor(Math.random() * 4))]);
    // showTurns();
}

function showScore() {
    document.getElementById("score").innerText = game.score;
}

module.exports = { game, newGame, showScore, addTurn };