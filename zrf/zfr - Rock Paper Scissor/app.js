let choices = document.querySelectorAll(".choice");
let userScore = document.querySelector("#userScore");
let compScore = document.querySelector("#compScore");
let result = document.querySelector(".result");
let rUserChoice = document.querySelector("#rUserChoice");
let rCompChoice = document.querySelector("#rCompChoice");
let uScore = 0;
let cScore = 0;

// userChoice
choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    let userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});

// compChoice
const compGenChoice = () => {
  const options = ["rock", "paper", "scissors"];
  const random = Math.floor(Math.random() * options.length);
  return options[random];
};

// playGame
const playGame = (userChoice) => {
  console.log("User choice is =", userChoice);
  rUserChoice.innerText = userChoice.toUpperCase();
  let compChoice = compGenChoice();
  console.log("Computer choice is =", compChoice);
  rCompChoice.innerText = compChoice.toUpperCase();

  let gameResult = getResult(userChoice, compChoice);
  showResult(gameResult);
};

// getResult
const getResult = (userChoice, compChoice) => {
  if (userChoice === compChoice) {
    return "draw";
  } else if (
    (userChoice === "rock" && compChoice === "scissors") ||
    (userChoice === "paper" && compChoice === "rock") ||
    (userChoice === "scissors" && compChoice === "paper")
  ) {
    return "win";
  } else {
    return "lose";
  }
};

// showResult
const showResult = (gameResult) => {
  if (gameResult === "win") {
    console.log("You Win!");
    uScore++;
    userScore.innerText = uScore;
    result.innerText = "You win!";
    result.style.backgroundColor = "#11c146";
  } else if (gameResult === "lose") {
    console.log("You Lose!");
    cScore++;
    compScore.innerText = cScore;
    result.innerText = "Computer wins!";
    result.style.backgroundColor = "#ff1f1f";
  } else {
    console.log("Game is draw!");
    result.innerText = "It's a draw!";
    result.style.backgroundColor = "#2a7bff";
  }
};
