// Copy to clipboard functionality
copyButton.addEventListener("click", async () => {
  try {
    await navigator.clipboard.writeText(shortenedUrl.textContent);

    // Update button to show success
    copyText.textContent = "Copied!";
    copyIcon.innerHTML = `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>`;

    // Reset after 2 seconds
    setTimeout(() => {
      copyText.textContent = "Copy";
      copyIcon.innerHTML = `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"></path>`;
    }, 2000);
  } catch (err) {
    console.error("Failed to copy: ", err);
  }
});
