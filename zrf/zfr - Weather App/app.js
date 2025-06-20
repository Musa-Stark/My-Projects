let cities = document.querySelectorAll(".li");
let countryList = document.querySelector(".country-list");
let search = document.querySelector("#search");
let searchBtn = document.querySelector("#searchBtn");
let back = document.querySelector("#backBtn");
let main = document.querySelector("#main");
let tempVal = document.querySelector("#tempValue");
let tempInfoVal = document.querySelector("#tempInfo");
let humidity = document.querySelector("#humValue");
let windSpeed = document.querySelector("#windValue");
let dateVal = document.querySelector(".date");
let cityName = document.querySelector("#cityName");
let weatherImg = document.querySelector("#weather_img");

let API_key = "f0037036408f97ab239324a8a20e6067";

// Function to fetch weather data
let getData = async (city) => {
  try {
    let WeatherURL = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_key}&units=metric`;
    let response = await fetch(WeatherURL);
    console.log(WeatherURL);

    if (!response.ok) {
      throw new Error("City not found");
    }

    let data = await response.json();
    console.log("data :", data);
    
    let nmbr = 0;
    let dataList = data.list[nmbr];
    console.log("data List:", dataList);
    nmbr++;

    let weatherImgInfo = data.list[0].weather[0].main.toString();
    console.log(weatherImgInfo)
    if (weatherImgInfo == "clear") { // Why this command is not working?
      weatherImg.src = "Images/clouds.png"
      console.log("working...")
    }

    let temp = dataList.main.temp;
    tempVal.innerText = `${temp}°C`;

    let tempInfo = dataList.weather[0].main;
    tempInfoVal.innerText = dataList.weather[0].description || tempInfo;

    let humid = dataList.main.humidity;
    humidity.innerText = `${humid}%`;

    let wind = dataList.wind.speed;
    windSpeed.innerText = `${wind} m/s`;

    let dateReverse = dataList.dt_txt
      .split(" ")[0]
      .split(" ")
      .toString()
      .split("-");
    let date1st = dateReverse[2];
    let date2nd = dateReverse[1];
    let date3rd = dateReverse[0];
    dateVal.innerText = `${date1st}/${date2nd}/${date3rd}`;
  } catch (error) {
    console.error(error);
    tempVal.innerText = "N/A";
    tempInfoVal.innerText = "N/A";
    humidity.innerText = "N/A";
    windSpeed.innerText = "N/A";
    dateVal.innerText = "N/A";
    alert("Error: Unable to fetch weather data. Please try again.");
  }
};

// Event listener for the search input
search.addEventListener("keypress", (evt) => {
  if (evt.key === "Enter") {
    fetchingData();
    back.style.display = "none";
  }
});

back.addEventListener("click", () => {
  if (main.style.right === "-92%") {
    main.style.right = "6%";
  }
  console.log("click");
  hideBackBtn();
});

function hideBackBtn() {
  if (main.style.right === "6%") {
    back.style.display = "none";
  }
}


search.addEventListener("click", (evt) => {
  if (main.style.right === "6%") {
    main.style.right = "-92%";
  }
  if (main.style.right === "-92%") {
    back.style.display = "flex";
  }
  const searchVal = search.value.toLowerCase();
  
  countryList.innerHTML = ""; // Clear the country list
  
  if (searchVal === "") {
    cities.forEach((city) => {
      countryList.append(city); // Append all cities back
    });
  } else {
    cities.forEach((city) => {
      const cityStr = city.textContent.toLowerCase();
      if (cityStr.includes(searchVal)) {
        countryList.append(city); // Append matching cities only
      }
    });
  }
});

// Set the search value and update the weather when a city is clicked
cities.forEach((city) => {
  city.addEventListener("click", () => {
    search.value = city.textContent;
    cityName.innerText = city.textContent;
    getData(city.textContent);
    main.style.right = "6%"; // Slide the main panel back in
  });
});

let fetchingData = (WeatherURL) => {
  const city = search.value.trim();
  if (city) {
    cityName.innerText = city;
    getData(city);
    console.log(WeatherURL);
    main.style.right = "6%";
  }
};
// Fetch data when the search button is clicked
searchBtn.addEventListener("click", fetchingData, () => {
  back.style.display = "none";
});

// Fetch data for "Peshawar" by default when the page loads
document.addEventListener("DOMContentLoaded", () => {
  const defaultCity = "Peshawar";
  cityName.innerText = defaultCity; // Display the default city name
  getData(defaultCity); // Fetch weather data for the default city
});

hideBackBtn();