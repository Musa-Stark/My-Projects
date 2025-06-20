// Share functionality (if supported)
document.getElementById("share-button").addEventListener("click", async () => {
  if (navigator.share) {
    try {
      await navigator.share({
        title: "Shortened Link",
        url: shortenedUrl.textContent,
      });
    } catch (err) {
      console.log("Share cancelled or failed");
    }
  } else {
    // Fallback: copy to clipboard
    await navigator.clipboard.writeText(shortenedUrl.textContent);
    alert("Link copied to clipboard!");
  }
});

// Input focus handling for better UX
urlInput.addEventListener("focus", () => {
  hideMessages();
});
