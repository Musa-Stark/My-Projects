// variables
const express = require("express");
const app = express();
const port = 3000;
const cors = require("cors");
const fs = require("fs");

// middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.set("view engine", "ejs");

// variables
let dataBase = [];
let user;
let crush;
let percent;
let foundUser;

// APP.POST
app.post("/", (req, res) => {
  user = req.body.user;
  crush = req.body.crush;
  percent = req.body.percent;

  // read dataBase
  readDB();

  // userFound
  foundUser = dataBase.find(
    (foundUser) => foundUser.user === user && foundUser.crush === crush
  );

  if (!foundUser) {
    // update data
    updateData();
  } else {
    // sending data back
    return res.json(foundUser);
  }
});

// read dataBase
function readDB() {
  const oldDataJson = fs.readFileSync("data.json", "utf-8");
  dataBase = JSON.parse(oldDataJson);
}
// update data
async function updateData() {
  let newData = { user, crush, percent };

  dataBase.push({
    ...newData,
    timestamp: new Date().toLocaleString(),
  });

  fs.writeFile(
    "data.json",
    JSON.stringify(dataBase, null, 2),
    "utf-8",
    (err) => {
      if (err) {
        console.log("Error while writing to file");
      }
    }
  );
}

// render table
app.get(
  "/fe9ff166-38d0-4f93-8040-19c7e0d5305a-57b4a91f-3637-4c54-99eb-de23f21c1349",
  (req, res) => {
    const oldDataJson = fs.readFileSync("data.json", "utf-8");
    dataBase = JSON.parse(oldDataJson);
    res.render("table.ejs", { dataBase });
  }
);

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
