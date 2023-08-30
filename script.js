const options = ['rock', 'paper', 'scissors'];
let wins = 0
let lose = 0

function getComputerChoice() {
    const idx = Math.floor(Math.random() * 3);
    return options[idx];
}

function playRound(playerChoice, computerChoice) {
    const playerOption = playerChoice.toLowerCase();
    const rock = options[0];
    const paper = options[1];
    const scissors = options[2];

    if (playerOption === rock) {
        if (computerChoice === playerOption) {
            return 'It\'s a tie! Try again.';
        }
        else if (computerChoice === scissors) {
            wins++;
            return 'You win! Rock beats scissors.';
        }
        else if (computerChoice === paper) {
            lose++;
            return 'You lose! Paper beats rock.';
        }
    }
    else if (playerOption === paper) {
        if (computerChoice === playerOption) {
            return 'It\'s a tie! Try again.';
        }
        else if (computerChoice === scissors) {
            lose++;
            return 'You lose! Scissors beats paper.';
        }
        else if (computerChoice === rock) {
            wins++;
            return 'You win! Paper beats rock.';
        }

    }
    else if (playerOption === scissors) {
        if (computerChoice === playerOption) {
            return 'It\'s a tie! Try again.';
        }
        else if (computerChoice === paper) {
            wins++;
            return 'You win! Scissors beats paper.';
        }
        else if (computerChoice === rock) {
            lose++;
            return 'You lose! Rock beats scissors.';
        }
    }
}

const playerChoice = 'rock';


function game() {
    for(i = 1; i <= 5; i++) {
        const round = playRound(playerChoice, getComputerChoice());
        console.log(`Round ${i}:`, round);
    }

    if (wins > lose) {
        console.log('You win the game! Congratulations.');
    }
    else if (lose > wins) {
        console.log('You lose the game, better luck next time!');
    } else {
        console.log('It\'s a tie, try again!')
    }
}

game();
