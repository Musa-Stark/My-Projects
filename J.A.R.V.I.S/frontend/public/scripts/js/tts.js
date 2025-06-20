import { formattedDate, formattedTime } from "./date_time.js";
import { getMessage } from "./message.js";

export function welcome() {
  const dateStr = formattedDate();
  const timeStr = formattedTime();

  responsiveVoice.speak(
    `Welcome back sir, I am JARVIS, your virtual AI assistant, today is ${dateStr} and the time is ${timeStr}`,
    "UK English Male",
    { rate: 1.05 }
  );
}

export function voiceMessage() {
  window.addEventListener("newMessage", (e) => {
    responsiveVoice.speak(e.detail, "UK English Male", { rate: 1.05 });
  });
}
