const express = require("express");
const router = express.Router();
const { registerUser } = require("../controller/userController");

router.get("/", (req, res) => res.send("hello"));
router.route("/register").post(registerUser);

module.exports = router;
