const mainRoutes = require("./routes/mainRoutes");
const loginRoutes = require("./routes/loginRoutes");
const registerRoutes = require("./routes/registerRoutes");

const express = require("express");
const session = require("express-session");
const app = express();

const PORT = 3000 || process.env.PORT;

console.clear();

// Set
app.set("view engine", "ejs");
app.set("views", "src/views");

// Middlewares
app.use(express.static("public"));
app.use(
  session({
    secret: "Shh... It's a secret",
    saveUninitialized: false,
    resave: true,
  })
);
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Routes
app.use("/login", loginRoutes);
app.use("/register", registerRoutes);
app.use("/", mainRoutes);

// Run server
app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
