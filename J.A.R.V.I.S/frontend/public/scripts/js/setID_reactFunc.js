const reactor = document.querySelector("#b-1");
let glow = document.querySelector(".gloww");
let c1o = document.querySelector(".c1o");
let c3 = document.querySelector(".c-3");
let circles = document.querySelectorAll(".circle");
let c1 = circles[0];
let c2 = circles[1];
let c4 = circles[2];
let c5 = circles[3];
let leftAside1 = document.querySelector("#left1");
let leftAside2 = document.querySelector("#left2");
let header = document.querySelector("header");
let rightAside1 = document.querySelector("#right1");
let rightAside2 = document.querySelector("#right2");
let rightAside3 = document.querySelector("#right3");
let footer = document.querySelector("footer");

export function setId() {
  c1.id = "c-1";
  c1o.id = "c-1o";
  c2.id = "c-2";
  c3.id = "c-3";
  c4.id = "c-4";
  c5.id = "c-5";
  glow.id = "glow";
}

export function reactFunc() {
  setTimeout(() => {
    c1o.removeAttribute("stroke-width");
    c1o.setAttribute("stroke-width", "7");
  }, 2000);

  setTimeout(() => {
    c2.removeAttribute("stroke-dasharray");
    c2.setAttribute("stroke-dasharray", "30 220 30 220");
  }, 3000);

  setTimeout(() => {
    c4.removeAttribute("stroke-dasharray");
    c4.setAttribute("stroke-dasharray", "12 1");
  }, 4000);

  setTimeout(() => {
    c5.removeAttribute("stroke-dasharray");
    c5.setAttribute("stroke-dasharray", "6 4.87");
    glow.classList.add("glow_anim");
  }, 5000);

  setTimeout(() => {
    c1.classList.add("anim_1");
    c2.classList.add("anim_2");
    c4.classList.add("anim_4");
    c5.classList.add("anim_5");
    c1o.classList.add("c-1o");
  }, 5000);

  setTimeout(() => {
    reactor.classList.add("react_zoom_out");
    reactor.classList.replace("w-[40vw]", "w-[15vw]");
  }, 13000);

  setTimeout(() => {
    leftAside1.classList.add("fade_in_left");
    leftAside1.classList.remove("opacity-0");
  }, 14000);

  setTimeout(() => {
    leftAside2.classList.add("fade_in_left");
    leftAside2.classList.remove("opacity-0");
  }, 14200);

  setTimeout(() => {
    header.classList.add("fade_in_top");
    header.classList.remove("opacity-0");
  }, 14400);

  setTimeout(() => {
    rightAside1.classList.add("fade_in_right");
    rightAside1.classList.remove("opacity-0");
  }, 14600);

  setTimeout(() => {
    rightAside2.classList.add("fade_in_right");
    rightAside2.classList.remove("opacity-0");
  }, 14800);

  setTimeout(() => {
    rightAside3.classList.add("fade_in_right");
    rightAside3.classList.remove("opacity-0");
  }, 15000);

  setTimeout(() => {
    footer.classList.add("fade_in_top");
    footer.classList.remove("opacity-0");
  }, 15200);

  setTimeout(() => {
    reactor.classList.replace("top-[50%]", "top-[30%]");
  }, 15400);
}
