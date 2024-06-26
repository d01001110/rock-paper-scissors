let humanScore = 0;
let computerScore = 0;

let humanRock = 0;
let humanPaper = 0;
let humanScissors = 0;

let computerRock = 0;
let computerPaper = 0;
let computerScissors = 0;


function getComputerChoice() {
    return Math.floor(Math.random()*3)
}


function updateStats() {
    document.getElementById("humanScore").textContent = ("Score: " + humanScore);
    document.getElementById("computerScore").textContent = ("Score: " + computerScore);

    document.getElementById("humanRock").textContent = ("Rock: " + humanRock);
    document.getElementById("humanPaper").textContent = ("Paper " + humanPaper);
    document.getElementById("humanScissors").textContent = ("Scissors " + humanScissors);

    document.getElementById("computerRock").textContent = ("Rock: " + computerRock);
    document.getElementById("computerPaper").textContent = ("Paper " + computerPaper);
    document.getElementById("computerScissors").textContent = ("Scissors " + computerScissors);

    return;
}


function winner(human, computer) {
    if (((human + 1) % 3) === computer) {
        computerScore++;
        return (toString(computer) + " beats " + toString(human)) ;
    } else if (human === computer) {
        return "Draw";
    } else {
        humanScore++;
        return (toString(human) + " beats " + toString(computer)) ;
    }
}

function toString(choice) {
    switch (choice) {
        case 0:
            return "Rock"
        case 1:
            return "Paper"
        case 2:
            return "Scissors"
        default:
            alert("thats not supposed to happen");
            break;        
    }
}

function playRound(choice) {

    switch (choice) {
        case 0:
            humanRock++;
            break;
        case 1:
            humanPaper++;
            break;
        case 2:
            humanScissors++;
            break;
        default:
            alert("thats not supposed to happen");
            break;
    }

    const computerChoice = getComputerChoice();

    switch (computerChoice) {
        case 0:
            computerRock++;
            break;
        case 1:
            computerPaper++;
            break;
        case 2:
            computerScissors++;
            break;
        default:
            alert("thats not supposed to happen");
            break;
    }

    document.getElementById("humanChoice").src = ("images/" + toString(choice).toLowerCase() + ".png");
    document.getElementById("computerChoice").src = ("images/" + toString(computerChoice).toLowerCase() + ".png");

    

    document.getElementById("outcome").textContent= winner(choice, computerChoice);
    updateStats();
    return;
}