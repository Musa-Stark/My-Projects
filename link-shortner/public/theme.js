// Theme Management
const themeToggle = document.getElementById("theme-toggle");
const html = document.documentElement;

// Initialize theme from memory variable or default to light
let currentTheme = "light";

function setTheme(theme) {
  currentTheme = theme;
  if (theme === "dark") {
    html.classList.add("dark");
  } else {
    html.classList.remove("dark");
  }
}

// Set initial theme
setTheme(currentTheme);

// Theme toggle event listener
themeToggle.addEventListener("click", () => {
  const newTheme = currentTheme === "light" ? "dark" : "light";
  setTheme(newTheme);
});
