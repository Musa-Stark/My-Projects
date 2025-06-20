const linkBtn = document.querySelector("#links");
const linkList = document.querySelector("#linkList");
const linkListMob = document.querySelector("#linkListMob");

linkBtn.addEventListener("click", () => {
  if (linkList.style.right === "3.5%") {
    linkList.style.right = "-20%";
  } else {
    linkList.style.right = "3.5%";
  }

  if (linkListMob.style.top === "-350px") {
    linkListMob.style.top = "290px";
  } else {
    linkListMob.style.top = "-350px";
  }
});

// MenuBtn
const menuBtn = document.querySelector(".menuBtn");
const menuList = document.querySelector(".headerUl");
menuBtn.addEventListener("click", () => {
  if (linkListMob.style.top === "290px") {
    linkListMob.style.top = "-350px";
  }

  if (menuList.style.top !== "100px") {
    menuList.style.top = "100px";
  } else {
    menuList.style.top = "-300px";
  }
});

// Scroll animation
document.addEventListener("DOMContentLoaded", () => {
  const elLeft = document.querySelectorAll(".fade-in-X");
  const elRight = document.querySelectorAll(".fade-in-X-reverse");
  const elFade = document.querySelectorAll(".fade-in");
  const elUp = document.querySelector(".versionh1");
  const VPHeight = window.innerHeight;

  function animate() {
    elLeft.forEach((el) => {
      const rect = el.getBoundingClientRect();
      if (rect.top < VPHeight - 300) {
        el.style.transform = "translateX(0px)";
        el.style.opacity = "1";
      }
    });
    elRight.forEach((el) => {
      const rect = el.getBoundingClientRect();
      if (rect.top < VPHeight - 300) {
        el.style.transform = "translateX(0px)";
        el.style.opacity = "1";
      }
    });
    elFade.forEach((el) => {
      const rect = el.getBoundingClientRect();
      if (rect.top < VPHeight - 100) {
        el.style.opacity = "1";
      }
    });
  }
  animate();
  window.addEventListener("scroll", animate);
});
