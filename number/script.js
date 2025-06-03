let randomNumber=parseInt(Math.random()*100+1)
// console.log(randomNumber);
const submit=document.querySelector("#subt")
const userInput=document.querySelector("#guessfield")
const gussesslot=document.querySelector(".guesses")
const remaining=document.querySelector(".lastResult")
const loworhigh=document.querySelector(".loworhigh")
const startover=document.querySelector(".resultparas")
const p=document.createElement("p")

let preygame=[]
let numguess=1
let playgame=true

if (playgame) {
    submit.addEventListener( "click",function (e) {
          e.preventDefault()
          const guess=parseInt(userInput.value)
          console.log(guess);
          
          validateguess(guess)
        
    })
    
}
function validateguess(guess) {
    if (isNaN(guess)) {
        alert("please enter a valid number")
        console.log("you enter an alphebt ");
        
        
    } else if (guess<1) {
        alert("please enter a number greater than 1")
        
    } else if (guess>100) {
        alert("please enter a number less than 100")
        
    } else {
        preygame.push(guess)

        if (numguess===11) {
            displayGuess(guess)
            displayMassage(`game over the random number was ${randomNumber}`)
            endgame()
            
        }else{
            displayGuess(guess)
            checkguess(guess)
        }
    }
}

function checkguess(guess) {
    console.log(guess);
    
    if (guess===randomNumber) {
        displayMassage("your guess is right")
        console.log("your guess is right");
        
        gameEnd()
        
    } else if (guess<randomNumber) {
         displayMassage("your guess is Too low")
         console.log("your guess is Too low");
         
    }else if (guess> randomNumber) {
         displayMassage("your guess is Too high")
         console.log("your guess is Too high");
         
    }
    
}

function displayGuess(guess) {
    userInput.value=""
    gussesslot.innerHTML +=`${guess} ,`
    numguess++
    remaining.innerHTML = `${11-numguess}`
}

function displayMassage(massage) {
    loworhigh.innerHTML =`<h2>${massage}</h2>`
}

function gameEnd() {
    userInput.value=""
    userInput.setAttribute("disabled","true")
    p.classList.add="button"
    p.innerHTML=`<h1 id="newgame">start-new-game</h1>`
    startover.appendChild(p)
    playgame=false
    Newgame()
}
function Newgame() {
    const newgame=document.querySelector("#newgame")
    newgame.addEventListener("click",(e)=>{
        randomNumber=parseInt(Math.random()*100+1)
        preygame=[]
        numguess=1
        gussesslot.innerHTML=""
       remaining.innerHTML = `${11-numguess}`
       userInput.removeAttribute("disabled")
       startover.removeChild=(p)
        playgame=true
    })
}