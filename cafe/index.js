import express from "express";
import mysql from "mysql2/promise";
import path from "path";
import { fileURLToPath } from "url";
import { v4 as uuidv4 } from "uuid";
import session from "express-session";
import { chownSync } from "fs";

// create the connection to database
const connection = await mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "cafe",
  password: "@progs4Database!",
});

const app = express();
const port = 5000;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
app.use(
  session({
    secret: "@progs4Cafe!", // Change this to a secure secret
    resave: false,
    saveUninitialized: true,
  })
);

app.set("view engine", "ejs");

app
  // home_page
  .get("/", (req, res) => {
    res.render("index.ejs");
  })
  .post("/userFound", async (req, res) => {
    let { emailLS } = req.body;
    let q = `SELECT * FROM customers WHERE email = "${emailLS}"`;
    const [results] = await connection.query(q);
    req.session.userData = results[0];
    // console.log(req.session.userData)
    res.json(results);
  })
  .post("/check-email", async (req, res) => {
    let { email } = req.body;
    let q = `SELECT * FROM customers WHERE email = "${email}"`;
    const [results] = await connection.query(q);
    res.json(results);
  })
  // menu
  .get("/menu", async (req, res) => {
    let q = `SELECT DISTINCT category, cateDescript, cateImg FROM menu`;
    const [results] = await connection.query(q);
    // console.log(results)
    let dataBase = [];
    for (let cate in results) {
      dataBase.push(results[cate]);
    }
    res.render("menu.ejs", { dataBase });
  })
  // menu/category
  .post("/menu/:category", async (req, res) => {
    let { category } = req.params;
    let q = `SELECT * FROM menu WHERE category = "${category}" ORDER BY price`;
    const [results] = await connection.query(q);
    let cateData = [];
    for (let i = 0; i < results.length; i++) {
      cateData.push(results[i]);
    }
    res.render("menu_category.ejs", { cateData });
  })
  // buy
  .post("/menu/:category/:name", async (req, res) => {
    let { name } = req.params;
    let q = `SELECT * FROM menu WHERE name = "${name}"`;
    const [results] = await connection.query(q);
    let data = results[0];
    let userData = req.session.userData;
    if (userData) {
      res.render("order_place.ejs", { data, userData });
    } else {
      res.render("signup.ejs");
    }
  })
  // add new item (get)
  .get("/menu/new", (req, res) => {
    res.render("add_item.ejs");
  })
  // select category
  .post("/menu/category/:category", async (req, res) => {
    let { category } = req.params;
    let q = `SELECT DISTINCT cateDescript, cateImg FROM menu WHERE category = "${category}"`;
    const [results] = await connection.query(q);
    let descImg = results;
    res.json(descImg);
  })
  // add new item (post)
  .post("/menu/new/add", async (req, res) => {
    console.log(req.body);
    let { category, cateDescript, cateImg, name, price, description, image } =
      req.body;
    let q = `INSERT INTO menu (category, cateDescript, cateImg, name, price, description, image) VALUES("${category}", "${cateDescript}", "${cateImg}", "${name}", "${price}", "${description}", "${image}")`;
    const [results] = await connection.query(q);
    console.log(results);

    res.redirect("/menu/new");
  })
  // about
  .get("/about", (req, res) => {
    res.render("about.ejs");
  })
  // contact
  .get("/contact", (req, res) => {
    res.render("contact.ejs");
  })
  // sign up rendering
  .get("/signup", (req, res) => {
    res.render("signup.ejs");
  })
  // sign up new
  .post("/signup/new", async (req, res) => {
    let uuid = uuidv4();
    let { name, email, contact_no, address } = req.body;
    try {
      let q = `INSERT INTO customers(uuid, name, email, contact_no, address)
      VALUES("${uuid}", "${name}", "${email}", "${contact_no}", "${address}")`;
      const [results] = await connection.query(q);
      console.log(results);
    } catch (err) {
      console.log("Error found!");
    }

    res.redirect("/");
  })
  .post("/user-exists", async (req, res) => {
    let { email } = req.body;
    let q = `SELECT * FROM customers WHERE email = "${email}"`;
    const [results] = await connection.query(q);
    res.json(results);
  })
  .get("/dashboard", async (req, res) => {
    let userData = req.session.userData;
    let uuid = userData.uuid;
    let q = `SELECT * FROM orders WHERE uuid = "${uuid}"`;
    const [orderDetailObj] = await connection.query(q);
    let ordersDetail = orderDetailObj;
    let userDetail = { userData, ordersDetail };
    res.render("dashboard.ejs", { userDetail });
  })
  .post("/:name/order-placed", async (req, res) => {
    let { name } = req.params;
    let date = Date().split(" ").slice(1, 4).toString();
    let uuid = req.session.userData.uuid;

    let q1 = `SELECT price FROM menu WHERE name = "${name}"`;
    const [priceObj] = await connection.query(q1);
    let price = priceObj[0].price;

    let q2 = `INSERT INTO orders(uuid, item, date, total) VALUES("${uuid}", "${name}", "${date}", "${price}")`;
    const [results2] = await connection.query(q2);
    console.log(results2);

    let q3 = `SELECT * FROM orders WHERE uuid = "${uuid}"`;
    const [orderDetailObj] = await connection.query(q3);
    let orderDetail = orderDetailObj[0];

    res.render("thankyou.ejs", { orderDetail });
  })
  .get("/customers", async (req, res) => {
    let q = `SELECT * FROM customers`;
    const [results] = await connection.query(q);

    res.render("customers.ejs", { results });
  })
  .post("/:uuid/detail", async (req, res) => {
    let { uuid } = req.params;
    let q = `SELECT * FROM customers WHERE uuid = "${uuid}"`;
    const [userDataObj] = await connection.query(q);
    let userData = userDataObj;

    let q2 = `SELECT * FROM orders WHERE uuid = "${uuid}"`;
    const [orderDetailObj] = await connection.query(q2);
    let ordersDetail = orderDetailObj;

    let userDetail = { userData, ordersDetail };
    res.render("customer-detail", { userDetail });
  });

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
