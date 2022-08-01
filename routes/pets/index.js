const { Pets } = require("../../models");
const express = require("express");
const router = express.Router();

router.post("/create_pets", async (req, res) => {
  const { name, species, birthday } = req.body;
  try {
    const NewPet = {
      name: name,
      species: species,
      birthday: birthday,
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    console.log(NewPet);
    const NewPet1 = await Pets.create(NewPet);
    console.log(NewPet1);
    res.send(NewPet1);
  } catch (error) {
    console.log(error);
    res.send(error);
  }
});

// router.post("/login", async (req, res) => {
//   const { username, password } = req.body;
//   const databaseentry = await Users.findOne({ where: { username: username } });
//   console.log(databaseentry);
//   const passwordCorrect = await bcrypt.compare(
//     password,
//     databaseentry.password
//   );
//   if (passwordCorrect === true) {
//     console.log("PASSWORD IS CORRECT");
//     req.session.userId = databaseentry.id;
//     res.redirect("/");
//   } else {
//     res.redirect("/");
//   }
// });

// router.get("/test", (req, res) => {
//   console.log(req.session.userId);

//   res.send("test");
// });

module.exports = router;
