function computerPlay() {
    let choices = ['rock', 'paper', 'scissors'];
    return choices[Math.floor(Math.random() * choices.length)];}


function playround(playerSelection,computerSelection){
    
    if(playerSelection=='rock'&&computerSelection=='paper'){
    console.log("computer won the game");
    } 
    else if (playerSelection=='rock'&&computerSelection=='scissors'){
    console.log("you won the game");
    }
    else if (playerSelection=='rock'&&computerSelection=='rock'){
        console.log("game is draw");
    }
    else if (playerSelection=='paper'&&computerSelection=='paper'){
        console.log("game is draw");
    }
    else if (playerSelection=='paper'&&computerSelection=='scissors'){
        console.log("computer won the game");
    }
    else if (playerSelection=='paper'&&computerSelection=='rock'){
        console.log("you won the game");
    }
    else if (playerSelection=='scissors'&&computerSelection=='scissors'){
        console.log("game is draw");
    }
    else if (playerSelection=='scissors'&&computerSelection=='paper'){
        console.log("you won the game");
    }
    else if (playerSelection=='scissors'&&computerSelection=='rock'){
        console.log("computer won the game");
    }
}

const computerSelection = computerPlay();
console.log(playround(playerSelection,computerSelection));
let n= 5;
for (i=0;i<5;i++){
    var playerSelection = window.prompt('whats your choice').toLowerCase();
    console.log(playround(playerSelection,computerSelection));

}