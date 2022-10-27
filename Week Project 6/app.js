/// Each time the game begins, generate a new random number between 1 - 100 and set that number as the winning number

/// The player needs to be able to input a guess and then have it submitted

/// Indicate the player has won if the guess is the winning number

// Indicate the player if the guess is wrong by giving a hint

// After 5 guesses the player has lost

// const theGuess = document.getElementById("outputguess");
// const previousGuess = document.querySelectorAll("#Guess");

let btn = document.getElementById("btn");
let output = document.getElementById("guesstext");
let innerGuess = document.getElementById("preGuess");
const randomNumber = Math.floor(Math.random() * 100) + 1;

let inputCount = 0;

btn.addEventListener("click", function () {
  let input = document.getElementById("guessInput").value;
  if (input === randomNumber) {
    output.innerHTML = "You guessed correct, Hoo - Ray!";
    // if the number is guessed correctly with in the 5 attempts, output this code
  }
  if (input < randomNumber) {
    output.innerHTML = "You are too low, guess higher";
    inputCount += 1;
  }
  if (input > randomNumber) {
    output.innerHTML = "You are too high, guess lower";
    inputCount += 1;
    // if the guess is bigger then the winning number out put this code
  }
  if (inputCount === 5) {
    output.innerHTML = "You Have Lost!";
  }
  if (inputCount > 5) {
    output.innerHTML = "You Have Lost!";
    return;
  }
  ////    LOAD PREVIOUS GUESS    ////
  ///
  //   Inner HTML load previous guess ---
  // I want to be able to push the guess into the box as inner html
  if (inputCount === 1) {
    preGuess.textContent = "Previous guesses: ";
  }
  preGuess.textContent += input + " ";

  inputCount < 5;
  console.log(input);
  console.log(inputCount);
  console.log(randomNumber);
  document.querySelector("#restartBtn").addEventListener("click", function (e) {
    window.location.reload();
  });
});
