import { getMessage } from "./message.js";

function subtitle(text) {
  const subtitle = document.querySelector("#subtitle");

  let currentChar = 0;
  let typingInterval;
  const cursor = document.createElement("span");
  cursor.classList.add("border-r", "blink", "pl-2");

  subtitle.textContent = "";

  function typing() {
    if (currentChar >= text.length) {
      subtitle.innerHTML = subtitle.innerHTML + cursor.outerHTML;
      clearInterval(typingInterval);
      return;
    }

    if (currentChar < text.length) {
      subtitle.textContent += text[currentChar];
      currentChar++;
    }
    return;
  }

  typingInterval = setInterval(typing, 30);
}

export function listenForNewMessage() {
  window.addEventListener("newMessage", (e) => {
    setTimeout(() => {
      subtitle(e.detail);
    }, 1000);
  });
}
