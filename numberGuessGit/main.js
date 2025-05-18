

let maxNum = 100;
let minNum = 1;
let answer = Math.floor(Math.random()*(maxNum-minNum)+1);
let attempts = 0;
let running = true;
let guess;

while(running){

    guess = window.prompt(`guess the number between ${minNum} to ${maxNum}!`);
    guess = Number(guess);

    if(isNaN(guess)){
        window.alert('guess is not a number!!')
    }
    else if(guess > maxNum || guess < minNum){
        window.alert('guess is not a number!!')
    }else{
        attempts++;
        if(guess < answer){
            window.alert("too low! try again...")
        }
        else if(guess > answer){
            window.alert("too high! try again...")
        }
        else{
            window.alert(`whoaa!! you guessed it right in ${attempts} attempts, the answer is ${answer}. `)
        }
    }
}