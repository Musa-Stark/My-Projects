// variables
require("dotenv").config();
const express = require("express");
const app = express();
const port = 3000;
const path = require("path");
const mongoose = require("mongoose");
const { v4: uuidv4 } = require("uuid");

app.set("view engine", "ejs");

const publicPath = path.join(__dirname, "public");
app.use(express.static(publicPath));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// setting MONGODB
main()
  .then(() => {
    console.log("✅ Connected Successfully!");
  })
  .catch((_) => {
    console.log("❌ Error while connecting!");
  });

async function main() {
  await mongoose.connect(
    "mongodb+srv://musafullstack08:this_url-shortener13@cluster0.zvbfwdu.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
  );
}

// schema
const urlSchema = new mongoose.Schema({
  originalURL: String,
  shortURL: String,
});

const URLModel = mongoose.model("URLModel", urlSchema);

// routes
app.get("/", (req, res) => {
  res.render("index.ejs");
});

// post URL
app.post("/url", (req, res) => {
  console.log(req.body);
  // urls
  const { originalURL, username } = req.body;
  let shortURL = null;
  if (username === "") {
    shortURL = `${process.env.WEB_NAME}/${uuidv4()
      .split("-")
      .slice(0, 3)
      .join("-")}`;
  } else {
    shortURL = `${process.env.WEB_NAME}/${username
      .split(" ")
      .join("_")}/${uuidv4().split("-").slice(0, 1).join("-")}`;
  }

  // shortening + saving functionality
  let newURL = new URLModel({ originalURL, shortURL });
  newURL
    .save()
    .then((_) => {
      console.log("Data Saved Successfully!");
    })
    .catch((err) => {
      console.log(err);
    });

  // sending res.json()
  res.json({ shortURL });
});

// listening
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
