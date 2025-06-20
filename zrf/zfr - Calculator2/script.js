let num = document.querySelectorAll(".num");
let orng = document.querySelectorAll(".orng");
let grn = document.querySelectorAll(".grn");
let red = document.querySelectorAll(".red");
let outPut = document.querySelector(".outPut");
let del = document.querySelector("#del");
let equalTo = document.querySelectorAll("#equalTo");
let newInput = document.querySelector(".allInput");
let rightArrow = document.querySelector("#fstRightArrow");
let leftArrow = document.querySelector("#scnLeftArrow");

// Black
num.forEach((num) => {
  num.addEventListener("click", () => {
    num.style.background = "#000";
    setTimeout(() => {
      num.style.background = "#323232";
    }, 100);
  });
});

// Orange
orng.forEach((orng) => {
  orng.addEventListener("click", () => {
    orng.style.background = "#8a2f13";
    setTimeout(() => {
      orng.style.background = "#ff5722";
    }, 100);
  });
});

// Red
red.forEach((red) => {
  red.addEventListener("click", () => {
    red.style.background = "#972624";
    setTimeout(() => {
      red.style.background = "#e53935";
    }, 100);

    // Clear
    outPut.value = "";
  });
});

// Number add Logic
function addNum(num) {
  outPut.value += num;
}

// Backspace
del.addEventListener("click", () => {
  let currentOutput = outPut.value;
  outPut.value = currentOutput.slice(0, -1);
});


// = Btn logic
equalTo.forEach((equalTo) => {
  equalTo.addEventListener("click", () => {
    let result = eval(outPut.value);
    outPut.value = result;
  });
});

// nextSection logic

rightArrow.addEventListener("click", () => {
  newInput.style.marginRight = "100%";
});

leftArrow.addEventListener("click", () => {
  newInput.style.marginRight = "-100%";
});

outPut.addEventListener("wheel", (e) => {
  const delta = e.deltaY;
  const scrollPosition = outPut.scrollTop;
  outPut.animate(
    {
      scrollTop: scrollPosition - delta,
    },
    {
      duration: 500,
      easing: "ease-out",
    }
  );
});
