

const choices = ["rock","paper", "scissors"];
const playerDisplay = document.getElementById("playerChoice");
const computerDisplay = document.getElementById("computerChoice");
const resultDisplay = document.getElementById("resultDisplay");

let playerScore = 0;
let computerScore = 0;



function choosen(playerChoice){

    const computerChoice = choices[Math.floor(Math.random()*3)];
    let result = '';

    if(playerChoice === computerChoice){
        result = "its a tie"
    }else{
        switch(playerChoice){
            case "rock":result = (computerChoice === "scissors") ? "you win" : "you loose";
            break
            case "paper":result = (computerChoice === "rock") ? "you win" : "you loose";
            break
            case "scissors":result = (computerChoice === "paper") ? "you win" : "you loose";
            break

        }
    }

    playerDisplay.textContent = `Player : ${playerChoice}`;
    computerDisplay.textContent = `computer : ${computerChoice}`;
    resultDisplay.textContent = `Result : ${result}`


    switch(result){
        case "you win" : 
        playerScore++;
        document.getElementById("scoreDisplayPlayer").textContent = `player: ${playerScore}`;
        break
        case "you loose" : 
        computerScore++
        document.getElementById("scoreDisplayComputer").textContent = `computer: ${computerScore}`;
        break
    }
}