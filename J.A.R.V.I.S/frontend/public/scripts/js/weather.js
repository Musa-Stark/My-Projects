(async function () {
  let response = await fetch("http://localhost:8080/weather", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
  });
  let data = await response.json();
  console.log(data);

  document.querySelector("#weather-text").textContent = data.text;
  document.querySelector("#weather-temp").innerHTML =
    data.temperature + " " + `<sup>o</sup>` + `<span>C</span>`;

  let conditions = [
    "sunny",
    "clear",
    "cloudy",
    "mist",
    "overcast",
    "partly-cloudy",
    "partly-cloudy",
    "snow",
    "rain",
    "fog",
  ];

  let notFound = true;

  for (let condition of conditions) {
    if (condition === data.text.toLowerCase().split(" ").join("-")) {
      console.log(condition);
      notFound = false;
      break;
    }

    if (!notFound) {
      console.log("NOT FOUND");
    }
  }

  document.querySelector("#weather-icon").src = data.icon;
})();
