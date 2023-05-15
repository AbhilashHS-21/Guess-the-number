let computerNumber = Math.floor(Math.random() * 100) + 1;

let chance = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  // if input is null
  if (!guess) {
    displayMessage("No number!");
  } else if (guess === computerNumber) {
    displayMessage("Correct Number!");

    document.querySelector(".number").textContent = computerNumber;
    document.querySelector("body").style.backgroundColor = "green";

    if (chance > highscore) {
      highscore = chance;
      document.querySelector(".highscore").textContent = highscore;
    }
  } else if (guess !== computerNumber) {
    if (chance > 1) {
      displayMessage(
        guess > computerNumber ? "📈Too high! ⬆️" : "📉Too low! ⬇️"
      );
      chance--;
      document.querySelector(".chance").textContent = chance;
    } else {
      displayMessage("You lost the game!");
      document.querySelector(".number").textContent = computerNumber;
      document.querySelector(".between").textContent =
        "The correct number is: ";
      document.querySelector(".chance").textContent = 0;
      document.querySelector("body").style.backgroundColor = "red";
    }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  chance = 20;
  computerNumber = Math.floor(Math.random() * 100) + 1;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".chance").textContent = 20;
  document.querySelector(".guess").value = "";
  displayMessage("Start guessing...");
  document.querySelector("body").style.backgroundColor = "#250a3f";
});
