export function formattedDate() {
  let today = new Date(Date.now());
  let date = today.getDate();
  let month = today.toLocaleDateString("default", { month: "long" });
  let year = today.getFullYear();
  let day = today.toLocaleDateString("default", { weekday: "long" });

  let fullDate = `${day}, ${date} ${month} ${year}`;
  document.querySelector("#weather-date").textContent = fullDate;
  return fullDate;
}

export function formattedTime() {
  let date = new Date(Date.now());
  let hour = date.getHours();
  let mint = date.getMinutes();
  let period = hour < 12 ? "AM" : "PM";

  hour = hour % 12 || 12;

  return `${hour}:${mint} ${period}`;
}
