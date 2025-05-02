const randomNumber = (Math.floor(Math.random() * 100)+1);
console.log(randomNumber);
const attempts = 10;
let guessCount = 0;

const guess = document.getElementById("form");
const form  = document.getElementById("guessingform");

// console.log(guess, form);
const hint = document.getElementById("hint");
const attemptsEl = document.getElementById("attempts");
const history = document.getElementById("history");
const reset  = document.getElementById("reset");
const submit = document.getElementById("submit")
const text = document.getElementById("text")

let guessHistory = [];

form.addEventListener("submit",function(event){
    event.preventDefault();
    guessValue = parseInt(guess.value);
     checkGuess(guessValue);
     guess.value ='';
    
// console.log(`${randomNumber < guessValue} + randomNumber < guess`);    
// console.log(`${randomNumber > guessValue} + randomNumber > guess`);     
// console.log(`${randomNumber == guessValue} + randomNumber = guess`);    
    
});

reset.addEventListener("click",function(){
    location.reload();
}) 

function checkGuess(guessValue){
    guessCount++;
    guessHistory.push(guessValue);
    attemptsEl.textContent=`Attempts left: ${attempts-guessCount}`

    if(guessValue === randomNumber){
        // console.log('match');
        guess.style.display='none';
        hint.textContent ='You guessed the correct number!';
        attemptsEl.textContent=`You took ${guessCount} attempt to guess the number.`;
        history.textContent=`Your guess history: ${guessHistory.join(',')}`
        reset.style.display='none';
        submit.style.display='none';
        text.style.display='none';
    } 

    else if(guessValue < randomNumber){
        // console.log('guessValue < randomNumber');
        hint.textContent ='Too low! Try again...';
        history.textContent=`Your guess history: ${guessHistory.join(',')}`
    } 

    else if(guessValue > randomNumber){
        // console.log('guessValue > randomNumber');
        hint.textContent ='Too High! Try again...';
        history.textContent=`Your guess history: ${guessHistory.join(',')}`
    }
    
    
    if(guessCount === attempts){
        history.textContent='You have used all your attempts! Refresh the page to try again.';
        guess.style.display='none'; 
        reset.style.display='none';
        submit.style.display='none';
        text.style.display='none';
    }

    else if(guessValue > 100){
        hint.textContent='Invalid number! The number should be 1-100.'
        attemptsEl.textContent=`Attempts left: ${attempts-0}`
    }
}
    


    


