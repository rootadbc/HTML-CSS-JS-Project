
// ROCK PLAYER SCISSORS

const choices = ["rock" , "paper", "scissors"];
const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");





function playGame(playerChoice){

    const computerChoice = choices[Math.floor(Math.random() * 3)];
    // Math.random() - random number generator between 0 and 3 > 3 cos they are 3 to pick from
    // Math.floor - making sure it's a whole number


    // adding logic of our game
    let result = "";

    if (playerChoice === computerChoice){
        result = "It's a tie!";

    }
    else {
        switch(playerChoice){
            case "rock":
            // "rock" here - if our player , pick rock.
                result = (computerChoice === "scissors") ? "You Win!" : "You Lose!";
                break;
                // computerChoice === scissors - tells, us , if our computer picks scissor,
                // [? "You Win"] - and we picked rock - we win , 
                // [: "You lose"] if comp picks , something else, like paper or rock itself - we lose.
                // break - breaks the loop -
                // condition 

            case "paper":
                result = (computerChoice === "rock") ? "You Win!" : "You Lose!";
                break;
            case "scissors":
                result = (computerChoice === "paper") ? "You Win!" : "You Lose!";
                break;
        }
    }

    // update text on screen

    playerDisplay.textContent = `PLAYER: ${playerChoice}`;
    computerDisplay.textContent = `COMPUTER: ${computerChoice}`;
    resultDisplay.textContent = result;

    //  making sure the color are reset before adding color
    resultDisplay.classList.remove("greenText", "redText"); 
    
    
    // adding color to our results
    switch(result){
        case "You Win!":
            resultDisplay.classList.add("greenText");
            break;
        case "You Lose!":
            resultDisplay.classList.add("redText");
            break;
    }


    


    console.log(computerChoice); // debug
}