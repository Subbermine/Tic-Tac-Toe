class player {
  constructor() {
    this.won = 0;
    this.turn = 0;
  }
}
let player1 = new player();
let player2 = new player();

var cells = [];
function player_turn(a) {
  //player 1
  if (player1.turn == player2.turn) {
    document.getElementById(a).setAttribute("disabled", "");
    document.getElementById(a).innerHTML = "X";
    player1.turn++;
    document.getElementById("header").innerHTML = "Player2 turn";
    cells[a] = "X";
    player1.won = decider("X");
  }
  //player 2
  else {
    document.getElementById(a).setAttribute("disabled", "");
    document.getElementById(a).innerHTML = "O";
    player2.turn++;
    document.getElementById("header").innerHTML = "Player1 turn";
    cells[a] = "O";
    player2.won = decider("O");
  }

  if (player1.won) won("Player1");
  if (player2.won) won("Player2 won!");
  // Draw remaining
}
function decider(str) {
  if (
    (cells[0] == str && cells[1] == str && cells[2] == str) ||
    (cells[0] == str && cells[4] == str && cells[8] == str) ||
    (cells[0] == str && cells[3] == str && cells[6] == str) ||
    (cells[1] == str && cells[4] == str && cells[7] == str) ||
    (cells[2] == str && cells[4] == str && cells[6] == str) ||
    (cells[2] == str && cells[5] == str && cells[8] == str) ||
    (cells[3] == str && cells[4] == str && cells[5] == str) ||
    (cells[6] == str && cells[7] == str && cells[8] == str)
  )
    return true;
}
function won(s) {
  document.getElementById("header").innerHTML = s + " won!";
  for (let index = 0; index < 9; index++) {
    document.getElementById(index).setAttribute("disabled", "");
  }
  document.getElementById("play").style.visibility = "visible";
}
function playagain() {
  window.location.reload();
}
