const choices=["rock","paper","scissors"];
const userchoices=prompt("choose rock, paper, scissors :");
const userchoice=userchoices.toLowerCase();
if(userchoice){
    console.log(`you choose: ${userchoice}`);
}
else{
    console.log("you cheated!!!");
}
const randomNumber=Math.floor(Math.random() *3);
const computerChoice=choices[randomNumber];
console.log(`Computer chooses:${computerChoice}`);

if(userchoice === computerChoice){
    console.log("It's a tie🙅‍♂️🙅‍♀️");
}
else if(userchoice ==="rock" ){
    if(computerChoice === "scissors"){
        console.log(" You win😜❤");
    }
    else{
        console.log("You lose😂💔");
    }
}
else if(userchoice === "paper"){
    if(computerChoice === "rock"){
        console.log("You win😜❤");
    }
    else{
        console.log("You lose😂💔");
    }
}
else if(userchoice ==="scissors"){
    if(computerChoice === "paper"){
        console.log("You win😜❤");
    }
    else{
        console.log("You lose😂💔");
    }
}
