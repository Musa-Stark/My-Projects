const express = require("express");
const app = express();
const port = 8080;
const path = require("path");
const si = require("systeminformation");
const getWeather = require("./weather/weather.js");
(async function () {
  let weather = await getWeather();
  console.log(weather);
})();

const viewPath = path.join(path.dirname(__dirname), "frontend/views");
const staticPath = path.join(path.dirname(__dirname), "frontend/public");

app.set("view engine", "ejs");
app.set("views", viewPath);

app.use(express.static(staticPath));

app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.post("/weather", async (req, res) => {
  let weather = await getWeather();
  console.log(weather);
  res.json(weather);
});

app.listen(port, () => {
  console.log(`App is running at http://localhost:${port}`);
});
