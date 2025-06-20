// global variable
let profile = document.querySelector("#account");

function getEmailFromLS() {
  return JSON.parse(localStorage.getItem("email")) || "empty";
}

document.addEventListener("DOMContentLoaded", async () => {
  let emailLS = getEmailFromLS();
  const response = await fetch("/userFound", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ emailLS }),
  });
  const data = await response.json();
  try {
    let profileAlpha = data[0].name.split("")[0];
    profile.textContent = profileAlpha;
    profile.style.padding = "0.5rem 0.85rem";
    profile.classList.add("text-black");
    profile.classList.replace("bg-gray-100", "bg-amber-300");
    profile.classList.replace("hover:bg-gray-200", "hover:bg-amber-400");
    profile.classList.remove("account", "material-symbols-outlined");
    profile.addEventListener("click", () => {
      window.location.href = "/dashboard";
    });
  } catch (err) {}
  if (data.length === 0) {
    console.log("New user");
    profile.addEventListener("click", () => {
      window.location.href = "/signup";
    });
  }
});

setTimeout(() => {
  const viewMenu = document.querySelector("#view-menu");
  viewMenu.classList.remove("animate-pulse");
}, 2000);

// search btn
function search() {
  const search = document.querySelector("#search");
  const searchIcon = document.querySelector("#search-icon");
  const searchGroup = document.querySelector("#searchGroup");

  searchIcon.addEventListener("click", () => {
    if (searchIcon.textContent.trim() === "search") {
      searchIcon.textContent = "close";
      search.classList.remove("hidden");
      search.classList.replace("p-px", "p-2");
      setTimeout(() => {
        search.classList.replace("md:w-0", "md:w-sm");
        search.classList.replace("w-0", "w-[80vw]");
      }, 5);
    } else {
      searchIcon.textContent = "search";
      search.classList.replace("md:w-sm", "md:w-0");
      search.classList.replace("w-[80vw]", "w-0");
      searchGroup.classList.replace("not-md:right-[50%]", "not-md:right-0");
      setTimeout(() => {
        search.classList.replace("p-2", "p-px");
        search.classList.add("hidden");
      }, 300);
    }
  });
}

search();

// li classes
function liClasses() {
  const lis = document.querySelectorAll("li");
  lis.forEach((li) => {
    li.classList.add(
      "poppins-regular",
      "text-[16px]",
      "md:hover:bg-gray-800",
      "flex",
      "items-center",
      "justify-center",
      "rounded-[30px]",
      "mx-5",
      "not-md:mt-4"
    );

    li.firstElementChild.classList.add(
      "text-center",
      "hover:bg-[#2F2105]",
      "active:bg-[#2F2105]",
      "hover:text-white",
      "not-md:text-[#2F2105]",
      "not-md:bg-amber-300",
      "px-4",
      "py-3",
      "not-md:w-[300px]",
      "not-md:max-w-[70%]",
      "rounded-[30px]"
    );
  });
}

liClasses();

// menu
function menu() {
  const menu = document.querySelector("#menu");
  const ul = document.querySelector("ul");
  ul.style.transition = "0.5s";

  menu.addEventListener("click", () => {
    if (menu.textContent.trim() === "menu") {
      menu.textContent = "close";
      ul.classList.replace("not-md:top-[-300px]", "not-md:top-full");
      document.body.style.overflowY = "hidden";
      setTimeout(() => {
        ul.classList.add("not-md:bg-black/50");
        ul.classList.add("not-md:h-[100vh]");
      }, 500);
    } else {
      menu.textContent = "menu";
      ul.classList.remove("not-md:bg-black/50");
      setTimeout(() => {
        document.body.style.overflowY = "unset";
        ul.classList.remove("not-md:h-[100vh]");
        ul.classList.replace("not-md:top-full", "not-md:top-[-300px]");
      }, 500);
    }
  });
}

menu();

// // logout
document.querySelector("#logout").addEventListener("click", () => {
  localStorage.clear();
  window.location.href = "/";
});
