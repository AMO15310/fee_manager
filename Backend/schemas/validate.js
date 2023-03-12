const Joi = require("joi");
const signup_schema = Joi.object({
  fullName: Joi.string().required(),
  userName: Joi.string().required(),
  email: Joi.string().email().required(),
  password: Joi.string().required(),
});

const login_schema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().required(),
});
module.exports = { signup_schema, login_schema };
