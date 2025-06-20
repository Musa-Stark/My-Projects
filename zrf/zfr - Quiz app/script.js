let timer = document.querySelector(".timer");
let quizNo = document.querySelector(".quizNo");
let Quiz = document.querySelector(".quiz");
let quizNmbrr = document.querySelector("#quizNmbrr");
let options = document.querySelectorAll(".option");
let option1 = document.querySelector("#option1");
let option2 = document.querySelector("#option2");
let option3 = document.querySelector("#option3");
let option4 = document.querySelector("#option4");
let resultBtn = document.querySelector("#resultBtn");
let nextBtn = document.querySelector("#nextBtn");
let totalScore = 0;
let userScore = 0;

document.addEventListener("DOMContentLoaded", () => {
  randomQuiz();
});

let quizNmbr = 0;
function randomQuiz() {
  Quiz.textContent = quizzes[quizNmbr].question;

  let optionss = quizzes[quizNmbr].options;
  option1.textContent = optionss[0];
  option2.textContent = optionss[1];
  option3.textContent = optionss[2];
  option4.textContent = optionss[3];

  const Answer = quizzes[quizNmbr].answer;
  optionClick(Answer);
  console.log(Answer);
}

nextBtn.disabled = true;

function optionClick(Answer) {
  options.forEach((option) => {
    option.onclick = () => {
      totalScore++;
      if (option.textContent === Answer) {
        userScore++;
        console.log(`Total Score is = ${totalScore}`);
        console.log(`User Score is = ${userScore}`);

        option.style.backgroundColor = "lightgreen";
        option.style.border = "2px solid green";
      } else {
        console.log(`Total Score is = ${totalScore}`);
        console.log(`User Score is = ${userScore}`);

        option.style.background = "#e33c2f80";
        option.style.border = "2px solid red";

        const correctAnswer = Array.from(options).find(
          (opt) => opt.textContent === Answer
        );
        if (correctAnswer) {
          correctAnswer.style.backgroundColor = "lightgreen";
          correctAnswer.style.border = "2px solid green";
        }
      }
      options.forEach((option) => {
        option.style.pointerEvents = "none";
      });

      nextBtn.disabled = false;
    };
  });
}

function resetOptionsColors() {
  options.forEach((option) => {
    option.style.backgroundColor = "unset";
    option.style.border = "1px solid black";
    options.forEach((option) => {
      option.style.pointerEvents = "unset";
    });
  });
}



nextBtn.addEventListener("click", () => {
  nextBtn.disabled = true;
  quizNmbr++;
  if (quizNmbr === 60) {
    alert(`Congratulations!! 🎉🎓\nYour Score is ${userScore}/${totalScore}.\nStarting again from number : 1`);
    quizNmbr = 0;
  }
  quizNmbrr.textContent = quizNmbr + 1;
  resetOptionsColors();
  randomQuiz();
});

resultBtn.onclick = () => {
  alert(`Your Score is ${userScore}/${totalScore}.`);
};
