const tip_h = document.querySelector("#tip-head");
const tip_p = document.getElementById("tip-content");
let sec = document.querySelector("#tip_sec");
let intervalTime = 60000;

let random_tip = async () => {
  let response = await fetch("http://127.0.0.1:5000/api/random_tip");
  let data = await response.json();
  tip_h.classList.add("typing_anim");
  tip_h.textContent = data.category;
  setTimeout(() => {
    tip_h.classList.remove("typing_anim");
  }, intervalTime - 100);
  let content = data.tip;
  tip_p.title = data.tip;

  let lines = content.split("\n");
  let currentLine = 0;
  let currentChar = 0;
  let cursor = document.createElement("span");
  cursor.classList.add("border-r", "pl-2", "blink");
  let typingInterval;

  function typing() {
    if (currentLine >= lines.length) {
      clearInterval(typingInterval);
      return;
    }

    let line = lines[currentLine];

    if (currentChar < line.length) {
      tip_p.textContent += line[currentChar];
      currentChar++;
      cursor.classList.add("border-r");
    } else {
      tip_p.appendChild(cursor);
      tip_p.innerHTML += "\n";
      currentLine++;
      currentChar = 0;
    }
  }

  typingInterval = setInterval(typing, 20);
};

random_tip();

setInterval(() => {
  tip_p.textContent = "";
  tip_h.textContent = "";
  random_tip();
}, intervalTime);

sec.textContent = 60 + "s";
let seconds = 60;
setInterval(() => {
  seconds--;
  sec.textContent = seconds + "s";
  if (seconds <= 0) {
    sec.textContent = 60 + "s";
    seconds = 60;
  }
}, 1000);
