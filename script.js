

var wins = 0;
var losses = 0;
var ties = 0;

// prompt the users response
document.onkeyup = function(event) {
    var userChoice = String.fromCharCode(event.keyCode).toLowerCase();
    console.log("User Choice: " + userChoice);


    // randomly select the computer choice
    var computerChoice = Math.random();
            if (computerChoice < 0.34) {
            	computerChoice = "r";
            } else if(computerChoice <= 0.67) {
            	computerChoice = "p";
            } else {
            	computerChoice = "s";
            } 
            console.log("Computer: " + computerChoice);
            console.log("--------------");


 if((userChoice == 'r') || (userChoice == 'p') || (userChoice == 's')){


        if(userChoice === computerChoice){
            alert( "The result is a tie!");
            document.getElementById('message').innerHTML = "Tie Game";
            ties++;
        }

        else if (userChoice === "r") {
            if ( computerChoice === "s"){
                document.getElementById('message').innerHTML = "Winner! Rock wins";
                wins++;
            } else { 
                document.getElementById('message').innerHTML = "Loser, Paper wins";
                losses++;
            }   

        }  

        else if ( userChoice === "p") {
            if (computerChoice === "r") {
                document.getElementById('message').innerHTML = "Winner! Paper wins";
                wins++;
            } else { 
                document.getElementById('message').innerHTML = "Loser, Scissor wins";
                losses++; }   
        }  

        else if (userChoice === "s"){
            if (computerChoice === "r") {
                document.getElementById('message').innerHTML = "Loser, rock wins";
                losses++;
            } else { 
                document.getElementById('message').innerHTML = "Winner! Scissor wins";
                wins++; }    
        }   

    var html = 
        "<p>wins: " + 
        wins + 
        "</p>" +
        "<p>losses: " + 
        losses + 
        "</p>" +
        "<p>ties: " + 
        ties + 
        "</p>";

        // Placing the html into the game ID
        document.getElementById('game').innerHTML = html;
    } 




else { alert("Please select r, p, or s");}

}; //onkey up

