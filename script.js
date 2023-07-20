const choices=["rock","paper","scissors"];
const userchoice=prompt("choose rock, paper, scissors :");
if(userchoice){
    console.log(`you choose: ${userchoice}`);
}
else{
    console.log("you cheated!!!");
}
const randomNumber=Math.floor(Math.random() *3);
const computerChoice=choices[randomNumber];
console.log(`Computer chooses:${computerChoice}`);