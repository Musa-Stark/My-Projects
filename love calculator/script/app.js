const inputs = document.querySelectorAll("input");
const user = inputs[0];
const crush = inputs[1];
const button = document.querySelector("button");
const form = document.querySelector("form");

let percent;
form.addEventListener("submit", (event) => {
  event.preventDefault();
  percent = randNo().toString();

  // ✅ Save data to Local Storage
  saveDataToLS(user.value, crush.value, percent);

  // ✅ Fetch request
  sendData();
});

// ✅ Generate Random Love Percentage
function randNo() {
  return Math.floor(Math.random() * 11) + 89;
}

// ✅ Capitalize Inputs
inputs.forEach((input) => {
  input.addEventListener("input", function () {
    setTimeout(() => {
      this.value =
        this.value.charAt(0).toUpperCase() + this.value.slice(1).toLowerCase();
    }, 500);
  });
});

// ✅ Fetch Function
let resData;
async function sendData() {
  const formData = new FormData(form);
  const data = Object.fromEntries(formData.entries());

  const URL = "http://localhost:3000/";
  const response = await fetch(URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ ...data, percent }),
  });
  resData = await response.json();

  // buttonFuncs
  buttonFuncs();
  // update button from dataBase
  user.value = resData.user;
  crush.value = resData.crush;
  setTimeout(() => {
    button.classList.remove("animate-pulse");
    button.textContent = `Love ❤️% is : ${resData.percent}%`;
  }, 1500);
}

// ✅ save data to local storage
function saveDataToLS(user, crush, percent) {
  dataBase = getDataFromLS();
  dataBase.push({ user, crush, percent });
  localStorage.setItem("userData", JSON.stringify(dataBase));
}

// ✅ get data from local storage
function getDataFromLS() {
  return JSON.parse(localStorage.getItem("userData")) || [];
}

// ✅ document onload
document.addEventListener("DOMContentLoaded", () => {
  dataBase = getDataFromLS();
  updateNewInputs();
  buttonFuncs();
  localStorage.clear();
});

// ✅ update new inputs
function updateNewInputs() {
  user.value = dataBase[0].user;
  crush.value = dataBase[0].crush;
  setTimeout(() => {
    button.classList.remove("animate-pulse");
    button.textContent = `Love ❤️% is : ${dataBase[0].percent}%`;
  }, 1500);
}

// ✅ Button Animation
function buttonFuncs() {
  button.textContent = "💘 Calculating... 💘";
  button.classList.add("animate-pulse");
}

