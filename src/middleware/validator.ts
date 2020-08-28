import { check, body } from "express-validator";

const validator: any = {};

validator.login = [
  body("email")
    .exists()
    .withMessage("Email must be provided")
    .isEmail()
    .withMessage("Invalid email address.")
    .trim()
    .escape(),

  body("password")
    .exists()
    .withMessage("Password must be provided")
    .isLength({ min: 5 })
    .withMessage("Passord must be at least 5 chars long")
    .trim()
    .escape(),
];

validator.register = [
  body("email")
    .exists()
    .withMessage("Email must be provided")
    .isEmail()
    .withMessage("Invalid email address.")
    .trim()
    .escape(),

  body("name")
    .exists()
    .withMessage("Name must be provided")
    .isLength({ min: 3 })
    .withMessage("Name must be at least 3 chars long.")
    .trim()
    .escape(),

  body("username")
    .exists()
    .withMessage("Username must be provided")
    .isLength({ min: 3 })
    .withMessage("Username must be at least 3 chars long.")
    .trim()
    .escape(),

  body("password")
    .exists()
    .withMessage("Password must be provided")
    .isLength({ min: 5 })
    .withMessage("Password must be at least 5 chars long")
    .trim()
    .escape(),
];

export default validator;
