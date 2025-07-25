let userScore=0
let compScore=0

const choices=document.querySelectorAll(".choice")
const msg= document.querySelector("#msg")

const userScorePara=document.querySelector("#userScore")
const compScorePara=document.querySelector("#compScore")

const genCompChoice=()=>{
    const options=["rock","paper","scissors"]
    // to generate random whole number between 0 to 3: Math.floor(Math.random()*3)
    const randIdx= Math.floor(Math.random()*3)
    return options[randIdx]
}

const drawGame=()=>{
    msg.innerText="Game draw"
    msg.style.backgroundColor=" #081b31"
}

const showWinner=(userWin, userChoice,compChoice)=>{
    if(userWin){
        userScore++
        userScorePara.innerText= userScore
        msg.innerText=`You win! Your ${userChoice} beats ${compChoice}`
        msg.style.backgroundColor="green"
    } else{
        compScore++
        compScorePara.innerText= compScore
        msg.innerText=`You lose! ${compChoice} beats your ${userChoice}`
        msg.style.backgroundColor="red"
    }
}


const playGame=(userChoice)=>{
    // Generate computer choice
    const compChoice= genCompChoice()
    

    if(userChoice===compChoice){
        //Draw Game
        drawGame()
    } else{
        let userWin= true
        if(userChoice==="rock"){
            // scissors,paper
            userWin=compChoice==="paper" ? false: true;
        } else if(userChoice==="paper"){
            //rock,scissors
            userWin=compChoice==="scissors" ? false:true;
        } else{
            //rock,paper
            userWin=compChoice==="rock" ? false:true
        }
        showWinner(userWin,userChoice,compChoice)
    }
}

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id")
        playGame(userChoice)
    })
})