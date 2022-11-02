
// GAME


const showComputerChoice = document.getElementById("computerchoice")
const showUserChoice = document.getElementById("userchoice")
const showResult = document.getElementById("result")
const buttons = document.querySelectorAll(".btn")
let userChoice // Gobal
let computerChoice
let result

buttons.forEach(buttons => buttons.addEventListener('click', (event) => { // For each button assign an event listener for click and create an event
    userChoice = event.target.id // event saves the button id to userchoice and saves it above to make global
    showUserChoice.innerHTML = userChoice //Prints out in html
    console.log("user choice:", userChoice)
    generateComputerChoice() // Now to create a new function for computers choice
    compareChoice()
}))

// CREATE RANDOM NUMBER
function generateComputerChoice() {
    const randomNum = Math.floor(Math.random() * buttons.length) //math floor = rounded number (* 3 +1) takes it from 0-2 - 1-3
    console.log("ComputerChoice nr:", randomNum)


if (randomNum === 0) {
    computerChoice = 'rock'
}

if (randomNum === 1) {
    computerChoice = 'paper'
}

if (randomNum === 2) {
    computerChoice = 'scissors'
}

showComputerChoice.innerHTML = computerChoice
console.log("computerchoice name:", computerChoice)
}

function compareChoice() {
        if (userChoice === computerChoice) {
            result = "Its a draw!" 
        }
        if (userChoice === "rock" && computerChoice === "scissors")
        {
            result = "You win!"
        }
        if (userChoice === "rock" && computerChoice === "paper")
        {
            result = "You lose!"
        }
        if (userChoice === "paper" && computerChoice === "scissors")
        {
            result = "You lose!"
        }
        if (userChoice === "paper" && computerChoice === "rock")
        {
            result = "You win!"
        }
        if (userChoice === "scissors" && computerChoice === "paper")
        {
            result = "You win!"
        }
        if (userChoice === "scissors" && computerChoice === "rock")
        {
            result = "You lose!"
        }

        showResult.innerHTML = result
        console.log(showResult)
    }
       
    







// // Emanuel


// // const options = document.querySelectorAll(".btn");
// //  let pScore = 0;
// //  let cScore = 0;
 
// //  options.forEach((option) => {
// //    option.addEventListener("click", function () {
// //      const pInput = this.textContent;
// //      const cOptions = ["Rock", "Paper", "Scissors"];
// //      const cInput = cOptions[Math.floor(Math.random() * 3)];
// //      compareInputs(pInput, cInput);
// //      updateScore();
// //      if (checkWinner()) {
// //        pScore = cScore = 0;
// //        updateScore();
// //      }
// //    });
// //  });
// //  function compareInputs(pInput, cInput) {
// //    const currentMatch = `${pInput} vs ${cInput}`;
// //    if (pInput === cInput) {
// //      alert(`${currentMatch} is a Tie`);
// //      return;
// //    }
// //    if (pInput === "Rock") {
// //      if (cInput === "Scissors") {
// //        alert(`${currentMatch} = You Win`);
// //        pScore++;
// //      } else {
// //        (`${currentMatch} = Computer Wins`);
// //        cScore++;
// //      }
// //    }
// //    //Check for Paper
// //    else if (pInput === "Paper") {
// //      if (cInput === "Rock") {
// //        alert(`${currentMatch} = You Win`);
// //        pScore++;
// //      } else {
// //        alert(`${currentMatch} = Computer Wins`);
// //        cScore++;
// //      }
// //    }
// //    //Check for Scissors
// //    else {
// //      if (cInput === "Paper") {
// //        alert(`${currentMatch} = You Win`);
// //        pScore++;
// //      } else {
// //        alert(`${currentMatch} = Computer Wins`);
// //        cScore++;
// //      }
// //    }
// //  }
// //  function updateScore() {
// //    document.getElementById("p-score").textContent = pScore;
// //    document.getElementById("c-score").textContent = cScore;
// //  }
// //  function checkWinner() {
// //    if (pScore === 5 || cScore === 5) {
// //      const winner =
// //        pScore === 5
// //          ? "You win the game! Congratulations!"
// //          : "Computer wins the game! Try again next time!";
// //      alert(winner);
// //      return true;
// //    }
// //    return false;
// //  }