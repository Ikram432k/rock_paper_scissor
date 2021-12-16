let humanCount = 0;
let systemCount = 0;


    const value = document.querySelectorAll(".things");
    const finalResult = document.querySelector('#finalResult');
    const computerScore = document.querySelector('#computerScore');
    const playerScore = document.querySelector('#playerScore');

function computerPlay() {
    let choices = ['rock', 'paper', 'scissors'];
    return choices[Math.floor(Math.random() * choices.length)];}

function playround(playerSelection){
    const computerSelection = computerPlay(); 
    
    if(playerSelection=='rock'&&computerSelection=='paper'){
        systemCount++;
        computerScore.textContent=systemCount;
        finalResult.textContent="computer won the game";

    } 
    else if (playerSelection=='rock'&&computerSelection=='scissors'){
        humanCount++;
        playerScore.textContent=humanCount;
        finalResult.textContent="you won the game";

    }
    else if (playerSelection=='rock'&&computerSelection=='rock'){
        finalResult.textContent="game is draw";
    }
    else if (playerSelection=='paper'&&computerSelection=='paper'){
        finalResult.textContent="game is draw";
    }
    else if (playerSelection=='paper'&&computerSelection=='scissors'){
        systemCount++;
        computerScore.textContent=systemCount;
        finalResult.textContent="computer won the game";
    }
    else if (playerSelection=='paper'&&computerSelection=='rock'){
        humanCount++;
        playerScore.textContent=humanCount;
        finalResult.textContent="you won the game";

    }
    else if (playerSelection=='scissor'&&computerSelection=='scissor'){
        finalResult.textContent="game is draw";
    }
    else if (playerSelection=='scissor'&&computerSelection=='paper'){
        humanCount++;
        playerScore.textContent=humanCount;
        finalResult.textContent="you won the game";

    }
    else if (playerSelection=='scissor'&&computerSelection=='rock'){
        systemCount++;
        computerScore.textContent=systemCount;
        finalResult.textContent="computer won the game";

    }
}

/*
//console.log(playround(playerSelection,computerSelection));
/*let n= 5;
for (i=0;i<5;i++){
}
var playerSelection = window.prompt('whats your choice rock,paper or scissors').toLowerCase();
console.log(playround(playerSelection,computerSelection));
*/
value.forEach((button)=>{
    button.addEventListener('click',()=>{
        if(humanCount>=5||systemCount>=5){
            final();
        }
        else{
  
        playround(button.dataset.rps);
        }
    });
    });
function final(){
    if(humanCount>systemCount)
    finalResult.textContent="you win";
    else if(humanCount<systemCount)
    finalResult.textContent="you lose";
    else
    finalResult.textContent="match draw";

}
