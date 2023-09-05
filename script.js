const options = ['rock', 'paper', 'scissors'];
let wins = 0
let lose = 0

const rock = document.querySelector('#rock')
const paper = document.querySelector('#paper')
const scissors = document.querySelector('#scissors')
const round = document.querySelector('#roundResult')
const game = document.querySelector('#gameResult')

function resetScores() {
    wins = 0
    lose = 0
}

function getResult() {
    if (wins === 5 && lose === 5) {
        resetScores()
        return 'It\'s a tie, try again!';
    } else {
        if (wins === 5) {
            resetScores()
            return 'You win the game! Congratulations.';
        }
        else if (lose === 5) {
            resetScores()
            return 'You lose the game, better luck next time!';
        }
    }
}

function showResult(playerSelection, computerChoice = getComputerChoice()) {
    round.textContent = playRound(playerSelection, computerChoice)
    game.textContent = getResult()
}

rock.addEventListener('click', (e) => {
    showResult(options[0])
})

paper.addEventListener('click', (e) => {
    showResult(options[1])
})

scissors.addEventListener('click', (e) => {
    showResult(options[2])
})

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

