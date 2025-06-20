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
    userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});

// compChoice
const compGenChoice = () => {
  const options = ["rock", "paper", "scissors"];
  const random = Math.floor(Math.random() * options.length);
  return options[random];
};

//playGame
const playGame = (userChoice) => {
  rUserChoice.innerText = userChoice;
  const compChoice = compGenChoice();
  rCompChoice.innerText = compChoice;

  //Conditionals
  if (userChoice === compChoice) {
    let draw = () => {
      result.innerText = "It is draw!";
      result.style.backgroundColor = "#0b67ff";
      result.style.color = "#e3e3e3";
    };
    return draw();
  } else if (
    (userChoice === "rock" && compChoice === "scissors") ||
    (userChoice === "paper" && compChoice === "rock") ||
    (userChoice === "scissors" && compChoice === "paper")
  ) {
    let win = () => {
      result.innerText = "You Win";
      result.style.backgroundColor = "#11d34b";
      result.style.color = "#fff";
      uScore++;
      userScore.innerText = uScore;
    };
    return win();
  } else {
    let lose = () => {
      result.innerText = "You Lose!";
      result.style.backgroundColor = "#ff0303";
      result.style.color = "#fff";
      cScore++;
      compScore.innerText = cScore;
    };
    return lose();
  }
};
