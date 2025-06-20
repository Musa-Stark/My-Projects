// Form handling
const form = document.getElementById("shorten-form");
const urlInput = document.getElementById("url-input");
const usernameInput = document.querySelector("#username");
const loading = document.getElementById("loading");
const errorMessage = document.getElementById("error-message");
const errorText = document.getElementById("error-text");
const resultSection = document.getElementById("result-section");
const originalUrl = document.getElementById("original-url");
const shortenedUrl = document.getElementById("shortened-url");
const copyButton = document.getElementById("copy-button");
const copyIcon = document.getElementById("copy-icon");
const copyText = document.getElementById("copy-text");

// URL validation function
function isValidUrl(string) {
  try {
    const url = new URL(string);
    return url.protocol === "http:" || url.protocol === "https:";
  } catch (_) {
    return false;
  }
}

// Hide all messages
function hideMessages() {
  loading.classList.add("hidden");
  errorMessage.classList.add("hidden");
  resultSection.classList.add("hidden");
}
// Hide previous messages
hideMessages();

// Form submission
form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const originalURL = urlInput.value;
  const username = usernameInput.value;

  // handling data transfer
  let response = await fetch("/url", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ originalURL, username }),
  });
  let data = await response.json();

  // declaring URL
  const url = urlInput.value.trim();

  // putting values
  originalUrl.textContent = url;
  shortenedUrl.href = url;
  shortenedUrl.textContent = data.shortURL;
  resultSection.classList.remove("hidden");

  // Validate URL
  if (!url) {
    errorText.textContent = "Please enter a URL to shorten.";
    errorMessage.classList.remove("hidden");
    return;
  }

  if (!isValidUrl(url)) {
    errorText.textContent =
      "Please enter a valid URL starting with http:// or https://";
    errorMessage.classList.remove("hidden");
    return;
  }

  // Show loading
  loading.classList.remove("hidden");

  // Simulate API call
  setTimeout(() => {
    loading.classList.add("hidden");

    // Reset copy button
    copyText.textContent = "Copy";
    copyIcon.innerHTML = `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"></path>`;
  }, 1500);
});
