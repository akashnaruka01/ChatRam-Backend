const USER = require("../models/userModels"); //import user schema
const bcrypt = require("bcrypt");

// Register a user
exports.registerUser = async (req, res) => {
  const { name, username, email, password } = req.body;

  const user = await USER.findOne({
    $or: [{ email: email }, { username: username }],
  });

  if (user) {
    return res
      .status(403)
      .json({ error: "Email id or username already exit, try different" });
  }

  bcrypt
    .hash(password, 10)
    .then(async (hashPassword) => {
      try {
        await USER.create({
          name,
          username,
          password: hashPassword,
          email,
        });
        res.json({ message: "user registered successfully" });
      } catch (error) {
        res.status(422).json({ error: error.message });
      }
    })
    .catch((error) => {
      res.status(422).json({ error: error.message });
    });
};
