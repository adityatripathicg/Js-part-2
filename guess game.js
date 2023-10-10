let max = prompt("Enter the maximum Number");
let ran = Math.floor((Math.random() * max)+1);
let guess = prompt(`Enter your guess b/w 1 and ${max}.`);

while(true){
    if(guess == ran){
        console.log("You Guessed the correct number.");
        break;
    }
    else if(guess == "quit"){
        console.log("the correct answer : ", ran);
        break;
    }
    
    else{
        if(guess > ran){
            console.log("HINT : You entered a larger Number then the correct one.")
        }
        else if(ran > guess){
            console.log("HINT : You entered a samller Number then the correct one.")
        }
        console.log("Try Again!");
        guess = prompt(`Enter your guess b/w 1 and ${max}.`);
    }
}