const computeChoiceEl = document.getElementById("compute-choice");
const yourChoiceEl = document.getElementById("your-choice");
const resultEl = document.getElementById("result");

const posibleChoices = document.querySelectorAll("button");

let userChoice ;
let computeChoice ; 
let result ;


posibleChoices.forEach(possiblechoc => possiblechoc.addEventListener("click" , (e)=>{
    userChoice = e.target.id;
    yourChoiceEl.innerHTML = userChoice
    generateComputerChice();
    getresult();
}))

function generateComputerChice(){
    const randomNumber = Math.floor(Math.random() * posibleChoices.length + 1);
    if(randomNumber === 1 ){
        computeChoice = "rock" 
    }else if(randomNumber === 2 ){
        computeChoice = "paper" 
    } else{
        computeChoice = "scissors" 
    }
    computeChoiceEl.innerHTML = computeChoice
}

function getresult(){
if(computeChoice == userChoice){
    result = 'it is a draw'
}
if(computeChoice == "rock" && userChoice == "paper"){
    result = 'you Win'
}
if(computeChoice == "rock" && userChoice == "scissors"){
    result = 'you Lose'
}
if(computeChoice == "paper" && userChoice == "scissors"){
    result = 'you Win'
}
if(computeChoice == "paper" && userChoice == "rock"){
    result = 'you lose'
}
if(computeChoice == "scissors" && userChoice == "rock"){
    result = 'you Win'
}
if(computeChoice == "scissors" && userChoice == "paper"){
    result = 'you lose'
}

resultEl.innerHTML = result
}


