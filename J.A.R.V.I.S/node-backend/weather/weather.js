const path = require("path");
require("dotenv").config({ path: path.resolve(__dirname, "../../.env") });

async function getWeather() {
  let URL = `https://api.weatherapi.com/v1/current.json?key=${process.env.WEATHER_API_KEY}&q=Pabbi,Pakistan`;
  let response = await fetch(URL);
  let data = await response.json();
  const curr = data.current;

  let text = curr.condition.text;
  let icon = curr.condition.icon;
  let last_updated = curr.last_updated;
  let temperature = curr.temp_c;

  return {
    text: text,
    icon: icon,
    last_updated: last_updated,
    temperature: temperature,
  };
}

module.exports = getWeather;
