let message = "";

document.querySelector("#wake_up").addEventListener("click", () => {
  setTimeout(() => {
    message =
      "All systems have been initialized and are functioning within optimal parameters.";
    window.dispatchEvent(new CustomEvent("newMessage", { detail: message }));
  }, 16000);
});

document.querySelector("#wake_up").addEventListener("click", () => {
  setTimeout(() => {
    message = "I am ready for your service sir!";
    window.dispatchEvent(new CustomEvent("newMessage", { detail: message }));
  }, 22500);
});

export function getMessage() {
  return message;
}
