let serIcon = document.querySelector(".searchimg");
let serBar = document.querySelector(".search");
let defaultSrc = "imgs/search.png";
let crossSrc = "imgs/cross.png";

serIcon.addEventListener("click", () => {
  serIcon.classList.toggle("srcIco");
  serBar.classList.toggle("srcWidth");

  // Toggle the icon source
  if (serIcon.src.includes(defaultSrc)) {
    serIcon.src = crossSrc;
  } else {
    serIcon.src = defaultSrc;
  }

  // When search bar is visible and has a value, perform search
  if (serBar.classList.contains("srcWidth") && serBar.value) {
    performSearch(serBar.value);
  } else if (!serBar.classList.contains("srcWidth")) {
    // Clear search results if search bar is hidden
    clearSearchResults();
  }
});

serBar.addEventListener("keyup", (event) => {
  if (event.key === "Enter" && serBar.value) {
    performSearch(serBar.value);
  }
});

function performSearch(query) {
  // Perform search logic here (example: highlight matching text)
  let elements = document.querySelectorAll("p, h1, h2, h3, h4, h5, h6, div"); // Add any other elements you want to search within
  elements.forEach((element) => {
    if (element.textContent.toLowerCase().includes(query.toLowerCase())) {
      element.style.backgroundColor = "yellow"; // Highlight matching elements
    } else {
      element.style.backgroundColor = ""; // Reset if no match
    }
  });
}

function clearSearchResults() {
  // Clear previous search results
  let elements = document.querySelectorAll("p, h1, h2, h3, h4, h5, h6, div");
  elements.forEach((element) => {
    element.style.backgroundColor = "";
  });
}

let menuBtn = document.querySelector(".menuBtn");
let sideNav = document.querySelector(".side-nav");
// menubtn
let l1 = document.querySelector(".line1");
let l2 = document.querySelector(".line2");
let l3 = document.querySelector(".line3");

menuBtn.addEventListener("click", () => {
  l1.classList.toggle("l1after");
  l2.classList.toggle("l2after");
  l3.classList.toggle("l3after");
  menuBtn.style.backgroundColor = "#976100";
  setTimeout(() => {
    menuBtn.style.backgroundColor = "orange";
  }, 200);

// Side Nav logic
if(sideNav.style.right == "-250px") {
  sideNav.style.right = "0px"
} else {
  sideNav.style.right = "-250px"
}
});

