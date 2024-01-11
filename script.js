
// Buttons
const paperBtn = document.querySelector('#paper-btn');
const rockBtn = document.querySelector('#rock-btn');
const scissorBtn = document.querySelector('#scissor-btn');
const resetGameBtn = document.querySelector('#resetGameBtn');
// Info
const resultbox = document.querySelector('#infobox');
const pName = document.querySelector('#name');
const win = document.querySelector('#win');
const lose = document.querySelector('#lose');
const tie = document.querySelector('#tie');


// Player/Computer hands
const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissor = document.querySelector('#scissor');
const computerrock = document.querySelector('#computerrock');
const computerpaper = document.querySelector('#computerpaper');
const computerscissor = document.querySelector('#computerscissor');
const playerAnimation = document.querySelector('#playerHand');
const computerAnimation = document.querySelector('#computerHand');

let playerName = window.prompt('Ange ditt namn: ');
pName.innerHTML = `${playerName}`;

let wins = 0;
let loses = 0;
let ties = 0;

win.innerHTML = `Wins: ${wins}`;
lose.innerHTML = `loses: ${loses}`;
tie.innerHTML = `Ties: ${ties}`;

let playerChoise = 0;
let computerChoise = Math.floor(Math.random() * 3 + 1);
let gameRestarted = true;

paperBtn.addEventListener("click", () => {
    playerChoise = 1;
})
rockBtn.addEventListener("click", () => {
    playerChoise = 2;
})
scissorBtn.addEventListener("click", () => {
    playerChoise = 3;
})


function play() {
    if (gameRestarted) {
        playerAnimation.style.animationName = `playerAnimation`;
        computerAnimation.style.animationName = `computerAnimation`;

        setTimeout(() => {
            playerAnimation.style.display = "none";
            computerAnimation.style.display = "none";

            displayPlayerHand(playerChoise);
            displayComputerHand(computerChoise);
            result(playerChoise, computerChoise);
            info();

        }, 2000)
    } else {
        return;
    }
}

function displayPlayerHand(player) {
    if (player === 1) {
        paper.style.display = 'block';
    } else if (player === 2) {
        rock.style.display = 'block';
    } else {
        scissor.style.display = 'block';
    }
}

function displayComputerHand(computer) {
    if (computer === 1) {
        computerpaper.style.display = 'block';
    } else if (computer === 2) {
        computerrock.style.display = 'block';
    } else {
        computerscissor.style.display = 'block';
    }
}

function info() {
    resultbox.classList.remove('hidden');
    resultbox.classList.add('show');
    resetGameBtn.classList.remove('hidden');
    resetGameBtn.classList.add('show');
}

function resetGame() {
    computerAnimation.style.animationName = 'none';
    playerAnimation.style.animationName = 'none';

    resultbox.classList.remove('show');
    resultbox.classList.add('hidden');
    resetGameBtn.classList.remove('show');
    resetGameBtn.classList.add('hidden');

    paper.style.display = 'none';
    scissor.style.display = 'none';
    rock.style.display = 'none';
    computerpaper.style.display = 'none';
    computerrock.style.display = 'none';
    computerscissor.style.display = 'none';

    playerAnimation.style.display = 'block';
    computerAnimation.style.display = 'block';

    computerChoise = Math.floor(Math.random() * 3 + 1);
    gameRestarted = true;
}

function result(player, computer) {
    if (player === 1 && computer === 1) {
        resultbox.innerHTML = 'Tie...';
        ties++;
    } else if (player === 1 && computer === 2) {
        resultbox.innerHTML = 'You are a winner!';
        wins++;
    } else if (player === 1 && computer === 3) {
        resultbox.innerHTML = 'You lost...';
        loses++;
    }

    if (player === 2 && computer === 1) {
        resultbox.innerHTML = 'You lost...';
        loses++;
    } else if (player === 2 && computer === 2) {
        resultbox.innerHTML = 'Tie...';
        ties++;
    } else if (player === 2 && computer === 3) {
        resultbox.innerHTML = 'You are a winner!';
        wins++;
    }

    if (player === 3 && computer === 1) {
        resultbox.innerHTML = 'You are a winner!';
        wins++;
    } else if (player === 3 && computer === 2) {
        resultbox.innerHTML = 'You lost...';
        loses++;
    } else if (player === 3 && computer === 3) {
        resultbox.innerHTML = 'Tie...';
        ties++;
    }
    win.innerHTML = `Wins: ${wins}`;
    lose.innerHTML = `loses: ${loses}`;
    tie.innerHTML = `Ties: ${ties}`;
}










