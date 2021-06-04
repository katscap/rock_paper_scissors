function userInput() {
  return window.prompt("Rock, Paper, Scissors?",)
}

function computerPlay() {
  let randomNumber = generateRandomNumber()
  if (randomNumber === 1) {
    return 'rock';
  } else if ( randomNumber === 2) {
    return 'paper';
  } else {
    return 'scissors';
  }

}

function generateRandomNumber() {
  return Math.floor( Math.random() * 3 + 1 )
}

function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();

  let move = ['rock','paper','scissors'];

  if ( move.indexOf(playerSelection) === -1 ) {
    return "Invalid move. Game reset. Please summon rock, paper, or scissors."
  }
  if ( playerSelection === computerSelection ) {
    return "Tie!"
  }

  let wins = {
    'rock':'scissors',
    'paper':'rock',
    'scissors': 'paper'
  };

  if ( wins[playerSelection] === computerSelection ) {
    return `You win! ${playerSelection} beats ${computerSelection}`
  } else {
    return `You lose! ${computerSelection} beats ${playerSelection}`
  }

}

function game() {
  let playerScore = 0;
  let computerScore = 0;

  for ( let i = 1; i <= 5; i++ ) {
    let outcome = playRound(userInput(),computerPlay());
    console.log(outcome)
    if ( outcome.indexOf('Invalid') !== -1 ) {
      i = 0;
      playerScore = 0;
      computerSelection = 0; // if there is an invalid input, starts the game over
    }
    if ( outcome === "Tie!" ) {
      continue;
    } else if ( outcome.indexOf('win') !== -1 ) {
      playerScore+=1;

    } else if ( outcome.indexOf('lose') !== -1 ) {
      computerScore+=1;
    }
  }

  console.log(`Your score: ${playerScore} | Computer score: ${computerScore}`)

  if (playerScore > computerScore) {
    return 'You won the game!';
  } else {
    return 'You lost the game!';
  }
}

console.log(game())

