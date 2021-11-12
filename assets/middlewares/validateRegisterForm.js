const { check } = require("express-validator");

const validations = [
  check("usuario")
    .notEmpty()
    .withMessage("Debe completar el nombre de usuario")
    .bail()
    .isLength({ min: 8 })
    .withMessage("El nombre de usuario debe tener por lo menos 8 caracteres"),

  check("email")
    .notEmpty()
    .withMessage("Debe completar el email")
    .bail()
    .isEmail()
    .withMessage("Email inválido"),
  check("password")
    .notEmpty()
    .withMessage("Debe completar la contraseña")
    .bail()
    .isLength({ min: 8 })
    .withMessage("La contraseña debe tener por lo menos 8 caracteres"),
];

module.exports = validations;
