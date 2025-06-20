const wakeUp = document.querySelector("#wake_up");
const reactor = document.querySelector("#b-1");
let initBgMusic = document.querySelector("#start2");
import { setId, reactFunc } from "./setID_reactFunc.js";
import { voiceMessage, welcome } from "./tts.js";
import { listenForNewMessage } from "./subtitle.js";

wakeUp.addEventListener("click", () => {
  listenForNewMessage();
  voiceMessage();
  initBgMusic.play();
  initBgMusic.volume = 0.5;
  wakeUp.classList.add("fade_out");
  setTimeout(() => {
    wakeUp.style.display = "none";
  }, 500);
  setTimeout(() => {
    reactor.classList.replace("hidden", "flex");
    reactor.classList.add("fade_in");
    setId();
    reactFunc();
    welcome();
  }, 600);
});
