const db = require("../config/config");
const { v4: uuidv4 } = require("uuid");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const bcrypt = require("bcrypt");
const { signup_schema, login_schema } = require("../schemas/validate");

const postUser = async (req, res) => {
  try {
    const { fullName, userName, email, password } = await req.body;
    const { error, value } = signup_schema.validate(await req.body);
    if (error) {
      res.status(401).json(error.message);
      return;
    }
    const query0 = `SELECT * FROM users WHERE email = "${email}"`;
    db.query(query0, async (err, user) => {
      if (err) {
        res.status(500).json(error);
        return;
      }
      if (user[0]) {
        res.status(409).json({
          message: "Account already exists",
        });
        return;
      }

      const id = uuidv4();
      const hashedPass = await bcrypt.hash(password, 10);
      const query1 = `INSERT INTO users VALUES ("${id}","${fullName}","${userName}","${email}","${hashedPass}")`;
      db.query(query1, (err, succes) => {
        if (err) {
          res.json(err);
          return;
        }
        res.status(200).json({
          message: "Account created succesfully",
        });
        return;
      });
    });
  } catch (error) {
    res.status(501).json(error);
    return;
  }
};

const loginUser = async (req, res) => {
  try {
    const { email, password } = await req.body;
    const { error, succes } = login_schema.validate(await req.body);
    if (error) {
      res.status(401).json(error.message);
      return;
    }
    const query2 = `SELECT * FROM users WHERE email = "${email}"`;
    db.query(query2, async (error, user) => {
      if (error) {
        res.status(501).json(error);
        return;
      }
      if (!user[0]) {
        res.status(403).json({
          message: "Account does not exist sign up to gain access",
        });
        return;
      }
      const legitPass = await bcrypt.compare(password, user[0].password);
      if (!legitPass) {
        res.status(403).json({
          message: "Please check your password and try again",
        });
        return;
      }
      const payload = user.map((data) => {
        const { password, ...rest } = data;
        return rest;
      });
      const token = jwt.sign(payload[0], process.env.JWT_SIGN, {
        expiresIn: "3600s",
      });
      res.status(200).json({
        message: "Login success",
        token,
      });
    });
  } catch (error) {
    res.status(500).json(error);
  }
};

module.exports = { postUser, loginUser };
