
const rock = "ROCK";
const papper = "PAPPER";
const scissors = "SCISSORS";

const container = document.querySelector('#container');
const content = document.createElement('div');
    content.classList.add('results');

let playerWins;
let computerWins;
let GameStart = false;


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

function returnResult(computerSelection, playerSelection, string, playerWins, computerWins){
    
    if(playerWins == 5 || computerWins == 5){
        EndGame();
    }
    else{
    content.innerHTML = "<br/>" + "Computer = " + computerSelection + " Player = " +  playerSelection + "<br/>" + string  +  "<br/>" + "<br/>" + "Player points: " + playerWins  + "<br/>" + "Computer points: " +computerWins + "<br/>";

    content.style.backgroundColor = 'lightblue';
    content.style.border = '2px dotted green';
    content.style.margin = '1%';


    container.appendChild(content);
}
}

function EndGame(){
    if(playerWins == 5){
        content.innerHTML = "Player won!";
    }
    else{
        content.innerHTML = "Computer won!";
    }

    if(element = document.getElementById('newGame') == null){
        var btn = document.createElement('button');
        btn.setAttribute("id", "newGame")
        btn.textContent = "New Game";
    }


    btn.addEventListener("click", () => {
        NewGame();


    })

    container.appendChild(content);
    container.appendChild(btn);
}
function Game(playerSelectionPrompt){
   
    const playerSelection = playerSelectionPrompt.toUpperCase();
    const computerSelection = GetComputerChoice();

    console.log("Computer= " + computerSelection + " Player= " +  playerSelection);

 
    if(GameStart == false){
        NewGame();
    }
    else if(playerWins >= 5 || computerWins >= 5){
         EndGame();
    }
    else{
    switch (playerSelection) {
        case 'ROCK':
            if(computerSelection == papper){
                computerWins++;
                returnResult(computerSelection, playerSelection, "Computer won!", playerWins, computerWins);
            }
            else if(computerSelection == scissors){
                 playerWins++;
                 returnResult(computerSelection, playerSelection, "Player won!", playerWins, computerWins);
            }
            else{
                returnResult(computerSelection, playerSelection, "None won!", playerWins, computerWins);
            }
            break;
    
        case 'PAPPER':
            if(computerSelection == scissors){
                computerWins++;
                returnResult(computerSelection, playerSelection, "Computer won!", playerWins, computerWins);
            }
            else if(computerSelection == rock){
                 playerWins++;
                 returnResult(computerSelection, playerSelection, "Player won!", playerWins, computerWins);
            }
            else{
                returnResult(computerSelection, playerSelection, "None won!", playerWins, computerWins);
            }
            break;
        case 'SCISSORS':
            if(computerSelection == rock){
                computerWins++;
                returnResult(computerSelection, playerSelection, "Computer won!", playerWins, computerWins);
            }
            else if(computerSelection == papper){
                 playerWins++;
                 returnResult(computerSelection, playerSelection, "Player won!", playerWins, computerWins);
            }
            else{
              
                returnResult(computerSelection, playerSelection, "None won!", playerWins, computerWins);
            }
            break;
        default:
            break;
    }
}
   
}

function NewGame(){
  
    

    GameStart = true;

    playerWins = 0;
    computerWins = 0;

    content.innerHTML = "<br/>" + "<br/>" + "Player points: " + playerWins  + "<br/>" + "Computer points: " +computerWins + "<br/>";

    container.appendChild(content);
    content.style.backgroundColor = 'lightblue';
    content.style.border = '2px dotted green';
    content.style.margin = '1%';

    console.log("Wwewew")



}





const buttons = document.querySelectorAll('.GameButtons');


// we use the .forEach method to iterate through each button
buttons.forEach((button) => {

  // and for each one we add a 'click' listener
  button.addEventListener('click', () => {
    Game(button.id, playerWins, computerWins);
  });
});