//function getComputerChoice(){
  //const computerOptions = ['rock', 'paper', 'scissors'];
  //const computerSelection = computerOptions[Math.floor(Math.random() * computerOptions.length)];
  //return computerSelection;
//}
//global Variables
let draw = "You tied!";
let winner = "You win!"
let loser = "You lose!"
let playerScore = 0;
let computerScore = 0;

//play a single round

//Create three buttons, one for each selection. Add an event listener to the buttons that call your playRound function with the correct playerSelection every time a button is clicked. (you can keep the console.logs for this step)


buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    playerSelection = button.id;
    console.log(playerSelection);

    const computerOptions = ['rock', 'paper', 'scissors'];
    const computerSelection = computerOptions[Math.floor(Math.random() * computerOptions.length)];
    console.log(computerSelection);

    function playRound(){
      if(playerSelection === "rock" && computerSelection === "paper" || playerSelection === "paper" && computerSelection === "scissors" || playerSelection === "scissors" && computerSelection === "rock"){
        computerScore++;
        return loser;
      }else if(playerSelection === "rock" && computerSelection === "scissors" || playerSelection === "paper" && computerSelection === "rock" || playerSelection === "scissors" && computerSelection === "paper"){
        playerScore++;
        return winner;
      }else{
        return draw;
      }

  }const results = document.createTextNode(playRound());
  const resultDiv = document.createElement("div");
  resultDiv.appendChild(results);
  document.body.appendChild(resultDiv);
  });
  });
  

  const buttonsDiv = document.getElementById("buttons");

  //const resultDiv = document.createElement("div");
  //const results = document.createTextNode("This is the test for the results div!");
  //resultDiv.appendChild(results);
  //document.body.appendChild(resultDiv);




//function playRound(){
  //  if(playerSelection === "rock" && computerSelection === "paper" || playerSelection === "paper" && computerSelection === "scissors" || playerSelection === "scissors" && computerSelection === "rock"){
  //    return loser;
  //  }else if(playerSelection === "rock" && computerSelection === "scissors" || playerSelection === "paper" && computerSelection === "rock" || playerSelection === "scissors" && computerSelection === "paper"){
   //   return winner;
 //   }else{
  //    return draw;
  //  }
//}

//play five rounds
//function game(){
  //for (i = 0; i < 5; i++)
 // {
  //let playerSelection = prompt("rock, paper, or scissors?");
  //let computerSelection = getComputerChoice();
 // playRound(playerSelection, computerSelection);
   // if((playRound(playerSelection, computerSelection)) === draw){
  //    }else if ((playRound(playerSelection, computerSelection)) === loser){
  //      computerScore++;
 //     }else{
   //     playerScore++;
     // }
  //}if(playerScore > computerScore){
    //added these alerts to create breaks between rounds -- change to console.log (or return?) when time to GUI
    //alert("IT'S OVER! You win! Your final score is " + playerScore + " and the computer's score is " + computerScore);
//  }else if(computerScore > playerScore){
  //  alert("IT'S OVER! You lose! Your final score is " + playerScore + " and the computer's score is " + computerScore);
  //}else{
    //alert("IT'S OVER! It was a draw...");
  //}
//}

//console.log(game());