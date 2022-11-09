
// GAME


const showComputerChoice = document.getElementById("computerchoice")
const showUserChoice = document.getElementById("userchoice")
const showResult = document.getElementById("result")
const buttons = document.querySelectorAll(".btn")
let userChoice // Gobal
let computerChoice
let result

// function buttonsClick (){
// forEach.buttons.addEventListener('click', (e) ) // For each button assign an event listener for click and create an event
//     userChoice = e.target.id // event saves the button id to userchoice and saved above to make global
//     showUserChoice.innerHTML = userChoice //Prints out in html
//     console.log("user choice:", userChoice)
//     generateComputerChoice() // create a new function for computers choice
//     compareChoice() // create a new function for compare choice
// }

buttons.forEach(buttons => buttons.addEventListener('click', (event) => { // For each button assign an event listener for click and create an event
    userChoice = event.target.id // event saves the button id to userchoice and saved above to make global
    showUserChoice.innerHTML = userChoice //Prints out in html
    console.log("user choice:", userChoice)
    generateComputerChoice() // create a new function for computers choice
    compareChoice() // create a new function for compare choice
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
       
    