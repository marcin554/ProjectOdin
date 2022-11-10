
const rock = "ROCK";
const papper = "PAPPER";
const scissors = "SCISSORS";



function GetComputerChoice(){
    let randomChoice = Math.floor(Math.random() * 3);

    if (randomChoice == 1){
        return rock;
    }
    else if(randomChoice == 2){
        return papper;
    }
    else{
        return scissors;
    }
}

function SingleRound(){
    let playerSelectionPrompt = prompt("Please enter your pick rock/papper or scissors.");
    let playerSelection = playerSelectionPrompt.toUpperCase();

    const computerSelection = GetComputerChoice();
    console.log("Computer= " + computerSelection + " Player= " +  playerSelection);
    
    if( playerSelection  == computerSelection ){
        return "None won.";
    }
    else if(playerSelection == rock && computerSelection == scissors){
        return "Player won!";
    }
    else if(playerSelection == rock && computerSelection == papper){
        return "Player lose!";
    }
    else if(playerSelection == scissors && computerSelection == papper){
        return "Player won!";
    }
    else if(playerSelection == scissors && computerSelection == rock){
        return "Player lose!";
    }
    else if(playerSelection == papper && computerSelection == rock){
        return "Player won!";
    }
    else {
        return "Player lose!";
    }


}

function FiveRounds(){
     let playerWins = 0;
     let computerWins = 0;

for (let i = 0; i < 5; i++) {
    let a = SingleRound();

    if(a == "Player won!"){
        playerWins++;
    }
    else if(a == "Player lose!"){
        computerWins++;
    }
    else{

    }
    
    console.log(playerWins, computerWins)
}

if( playerWins > computerWins){
    return "Player won.";
}
else if(computerWins > playerWins){
    return "Computer won.";
}
else{
    return "None won.";
}



  
}