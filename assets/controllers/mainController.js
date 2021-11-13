const fs = require("fs");
const bcrypt = require("bcrypt");
const { heroes, productos } = require("../../productos");
const { validationResult } = require("express-validator");

let getUsers = () => JSON.parse(fs.readFileSync(__dirname + "/users.json"));
const writeUser = (users) =>
  fs.writeFileSync(__dirname + "/users.json", JSON.stringify(users));

const findUserByEmail = (email) => {
  const user = getUsers().find((u) => u.email == email);
  console.log(user);
  return user;
};

const pushUser = (body) => {
  const users = getUsers();
  users.push({
    id: bcrypt.hashSync(body.email, 10),
    usuario: body.usuario,
    email: body.email,
    password: bcrypt.hashSync(body.password, 10),
  });

  writeUser(users);
};

const controller = {
  getCart: (_, res) => {
    res.render("pages/cart", { productos });
  },

  getCheckout: (_, res) => {
    res.render("pages/checkout");
  },

  getContact: (_, res) => {
    res.render("pages/contact");
  },

  getLogin: (_, res) => {
    res.render("pages/login");
  },

  getRegister: (_, res) => {
    res.render("pages/register");
  },

  postRegister: (req, res) => {
    let errors = validationResult(req);
    console.log(errors.errors);
    if (!errors.isEmpty())
      res.render("pages/register", { errors: errors.errors, old: req.body });
    else {
      if (!findUserByEmail(req.body.email)) {
        pushUser(req.body);
        res.render("pages/register", {
          mensajeRegistro:
            "Se creó la cuenta con éxito. Ir a login para entrar.",
        });
      }

      res.render("pages/register", {
        mensajeRegistro: "Ya existe una cuenta con el mail ingresado.",
      });
    }
  },

  getIndex: (_, res) => {
    res.render("pages/index", {
      teinteresan: productos.slice(0, 4),
      lomaspedido: productos,
      heroes,
    });
  },

  getNotFound: (_, res) => {
    res.render("pages/notfound", { productos });
  },
};

module.exports = controller;
