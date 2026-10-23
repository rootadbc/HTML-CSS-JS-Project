console.log("NUMBER GUESS");

// Get references to the HTML elements.
const guessBtn = document.getElementById("guessBtn");
const printAns = document.getElementById("printAnswer");
const attemptTimes = document.getElementById("attemptTimes");

// Set the minimum and maximum values allowed for a guess.
const minNum = 1;
const maxNum = 100;

// Generate a random whole number between minNum and maxNum, inclusive.
const answer = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;

// Store the number of valid guesses made by the player.
let attempts = 0;

// Keep track of whether the game is still running.
let running = true;

// Run the game when the user clicks the Guess Number button.
guessBtn.onclick = function () {
  // Continue asking for guesses until the player gets the answer
  // or chooses to cancel the prompt.
  while (running) {
    // Ask the player to enter a number.
    const input = window.prompt(`Guess a number between ${minNum} - ${maxNum}`);

    // prompt() returns null when the user clicks Cancel.
    if (input === null) {
      running = false;
      break;
    }

    // Convert the prompt value from a string to a number.
    const guess = Number(input);

    // Check whether the player entered a valid number.
    if (Number.isNaN(guess)) {
      window.alert("Please enter a valid number.");
    }
    // Check whether the number is within the allowed range.
    else if (guess < minNum || guess > maxNum) {
      window.alert(
        `Please enter a valid number between ${minNum} - ${maxNum}.`,
      );
    }
    // Process a valid, in-range guess.
    else {
      // Count this guess as an attempt.
      attempts++;

      // Tell the player if the guess is lower than the answer.
      if (guess < answer) {
        window.alert("TOO LOW! TRY AGAIN!");
      }
      // Tell the player if the guess is higher than the answer.
      else if (guess > answer) {
        window.alert("TOO HIGH! TRY AGAIN!");
      }
      // The guess matches the randomly generated answer.
      else {
        window.alert(
          `CORRECT! The answer was ${answer}. ` +
            `It took you ${attempts} attempts.`,
        );

        // Display the result on the webpage.
        printAns.textContent = `The answer was ${answer}.`;
        attemptTimes.textContent = `Attempts: ${attempts}`;

        // Prevent the player from starting the same completed game again.
        guessBtn.disabled = true;

        // Stop the while loop and end the game.
        running = false;
      }
    }
  }
};
