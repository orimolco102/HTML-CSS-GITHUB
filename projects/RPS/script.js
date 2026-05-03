const score = {
  Wins: 0,
  Losses: 0,
  Ties: 0,
};

function PickComputerMove() {
  const randomNumber = Math.random();
  let computerMove = "";

  if (randomNumber >= 0 && randomNumber < 1 / 3) {
    computerMove = "Rock";
  } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
    computerMove = "Paper";
  } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
    computerMove = "Scissors";
  }

  return computerMove;
}

function res(ButtonID) {
  const computerMove = PickComputerMove();
  let result = "";
  const PlayerChoice = ButtonID;

  console.log(PlayerChoice);
  console.log(computerMove);
  console.log(PlayerChoice == computerMove);

  if (PlayerChoice === computerMove) {
    result = "Tie";
    score.Ties += 1;
  } else if (
    (PlayerChoice === "Rock" && computerMove === "Scissors") ||
    (PlayerChoice === "Paper" && computerMove === "Rock") ||
    (PlayerChoice === "Scissors" && computerMove === "Paper")
  ) {
    result = "You Win";
    score.Wins += 1;
  } else  {
    result = "You Lose"
    score.Losses += 1;
  }


  alert(`Computer picked: ${computerMove} result: ${result}
    Wins: ${score.Wins}, Losses: ${score.Losses}, Ties: ${score.Ties}
    `);
}
