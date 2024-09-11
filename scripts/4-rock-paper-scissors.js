let computerMove='';

const score ={
    wins:0,
    loss:0,
    tie:0,
}
const resultOutput = document.getElementById("result-output")

function pickComputerMove () {
    let randomNumber = Math.random();
    console.log(randomNumber)
if (randomNumber >= 0 && randomNumber < 1/3) {
   computerMove ='rock'
}
else if (randomNumber >= 1/3 && randomNumber < 2/3 ) {
   computerMove ='paper'
}
else if (randomNumber >= 2/3 && randomNumber < 1) {
   computerMove = 'scissors'
}
return computerMove;
}

let result ='';
function playGame (playerMove) {
   pickComputerMove()
   if(playerMove === 'rock') {
      if (computerMove === 'rock') {
          result= 'Tie';
          score.tie++;
      }
      else if (computerMove === 'paper') {
          result = 'you loose';
          score.loss++
      }
      else if (computerMove=== 'scissors') {
          result = 'You win';
          score.wins++;
      }
      resultOutput.innerHTML= `You picked ${playerMove} 
        and computer picked ${computerMove},${result}
        score: wins : ${score.wins}, loss: ${score.loss}, tie : ${score.tie}   
        `;
   }  else if (playerMove=== "paper") {
      if (computerMove=== 'Rock') {
          result= 'You win';
          score.wins++
      }
      else if (computerMove ==='paper') {
          result= 'Tie';
          score.tie++
      }
      else if (computerMove ==='scissors')
      {
          result= 'You loose'
          score.loss++
      }
      resultOutput.innerHTML= `You picked ${playerMove} 
      and computer picked ${computerMove}, ${result}
      score: wins : ${score.wins}, loss: ${score.loss}, tie : ${score.tie}
      
      `;

   } else if (playerMove==='scissors'){
      if (computerMove==='scissors') {
          result='Tie';
          score.tie++
          
      }
      else if (computerMove==='paper'){
          result='you win'
          score.wins++
      }
      else if (computerMove==='rock') {
          result= 'You loose'
          score.loss++
      }
      resultOutput.innerHTML= `You picked ${playerMove} 
      and computer picked ${computerMove}, ${result}
      score: wins : ${score.wins}, loss: ${score.loss}, tie : ${score.tie}
      
      `;
   }
}


