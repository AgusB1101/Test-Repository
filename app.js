const express = require("express");
const app = express();
const data = require("./modules/data");

console.clear();

app.listen(3030, () => console.log("Server listening on port 3030"));

app.use(express.static("public"));
app.set("view engine", "ejs");

app.get("/", (_, res) => res.render("home"));
app.get("/contact", (_, res) => res.render("contact"));
app.get("/gallery", (_, res) => res.render("gallery", { data }));
app.get("/shopping-cart", (_, res) => res.render("shopping-cart"));
