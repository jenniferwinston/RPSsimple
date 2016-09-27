// prompt the users response
var userChoice = prompt("Do you choose rock, paper or scissors?");
    console.log("User Choice: " + userChoice);
// randomly select the computer choice
var computerChoice = Math.random();
        if (computerChoice < 0.34) {
        	computerChoice = "rock";
        } else if(computerChoice <= 0.67) {
        	computerChoice = "paper";
        } else {
        	computerChoice = "scissors";
        } console.log("Computer: " + computerChoice);


compare = function(choice1, choice2){
    if(choice1 === choice2){
        return "The result is a tie!";
    }

    else if (choice1 === "rock") {
        if ( choice2 === "scissors"){
            return "Winner! Rock wins!";
        } else { 
            return "Loser, Paper wins"; }   
    }  

    else if ( choice1 === "paper") {
        if (choice2 === "rock") {
            return "Winner! Paper wins";
        } else { 
            return "Loser, Scissors wins"; }   
    }  

    else if (choice1 === "scissors"){
        if (choice2 === "rock") {
            return "Loser, Rock Wins"; 
        } else { 
            return "Winner! Scissors wins"; }    
    }    
};

compare(userChoice, computerChoice);