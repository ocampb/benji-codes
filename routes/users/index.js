const { Users } = require("../../models");
const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");

router.post("/create_user", async (req, res) => {
  const { name, username, password } = req.body;
  try {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const encryptedUser = {
      name: name,
      username: username,
      password: hashedPassword,
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    console.log(encryptedUser);
    const createUser = await Users.create(encryptedUser);
    console.log(createUser);
    res.send(createUser);
  } catch (error) {
    console.log(error);
    res.send(error);
  }
});

router.post("/login", async (req, res) => {
  const { username, password } = req.body;
  const databaseentry = await Users.findOne({ where: { username: username } });
  console.log(databaseentry);
  const passwordCorrect = await bcrypt.compare(
    password,
    databaseentry.password
  );
  if (passwordCorrect === true) {
    console.log("PASSWORD IS CORRECT");
    req.session.userId = databaseentry.id;
    res.redirect("/");
  } else {
    res.redirect("/");
  }
});

router.get("/test", (req, res) => {
  console.log(req.session.userId);

  res.send("test");
});

module.exports = router;
