const express = require("express");
const { postUser, loginUser } = require("../controllers/controllers");
const router = express.Router();

router.route("/signup").post(postUser);
router.route("/login").post(loginUser);
module.exports = router;
