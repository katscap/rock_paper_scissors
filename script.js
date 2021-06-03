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
  // input player and computer selection.
  // if paper vs. rock, wins, log you win!
  let move = ['rock','paper','scissors'];
  if ( move.indexOf(playerSelection) === -1 ) {
    console.log( "Invalid move. Please summon rock, paper, or scissors" )
  }
  if ( playerSelection === computerSelection ) {
    return "Tie!"
  }

  if ( playerSelection === 'rock' && computerSelection === 'paper' ) {
    return "You lose! Paper beats rock"
  }

  if ( playerSelection === 'rock' && computerSelection === 'scissors' ) {
    return "You win! Rock beats scissors"
  }

  if ( playerSelection === 'paper' && computerSelection === 'scissors' ) {
    return "You lose! Scissors beats paper"
  }

  if ( playerSelection === 'paper' && computerSelection === 'rock' ) {
    return "You win! Paper beats rock"
  }

  if ( playerSelection === 'scissors' && computerSelection === 'paper' ) {
    return "You win! Scissors beats paper"
  }

  if ( playerSelection === 'scissors' && computerSelection === 'rock' ) {
    return "You lose! Rock beats paper"
  }

}




function game() {
  let playerScore = 0;
  let computerScore = 0;

  for ( var i = 1; i <= 5; i++ ) {
    var outcome = playRound(userInput(),computerPlay());
    console.log(outcome)
    if ( outcome === "Tie!" ) {
      continue;
    } else if ( outcome.indexOf('win') !== -1 ) {
      playerScore+=1;

    } else if ( outcome.indexOf('lose') !== -1 ) {
      computerScore+=1;
    }

  }

  console.log(playerScore,computerScore);

  if (playerScore > computerScore) {
    return 'You won the game!';
  } else {
    return 'You lost the game!';
  }
}


console.log(game())

