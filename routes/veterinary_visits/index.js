const { Veterinary_Visits } = require("../../models");
const express = require("express");
const router = express.Router();

router.get("/view_vet_visit", async (req, res) => {
  const { vet_name, date_of_visit, reason, notes, PetId } = req.body;
  try {
    const Vet_Visit = {
      vet_name: vet_name,
      date_of_visit: date_of_visit,
      reason: reason,
      notes: notes,
      createdAt: new Date(),
      updatedAt: new Date(),
      PetId: PetId,
    };
    const Vet_Visit1 = await Veterinary_Visits.create(Vet_Visit);
    console.log(Vet_Visit1);
    res.send(Vet_Visit1);
  } catch (error) {
    console.log(error);
    res.send(error);
  }
});

router.post("/create_vet_visit", async (req, res) => {
  const { vet_name, date_of_visit, reason, notes, PetId } = req.body;
  try {
    const Vet_Visit = {
      vet_name: vet_name,
      date_of_visit: date_of_visit,
      reason: reason,
      notes: notes,
      createdAt: new Date(),
      updatedAt: new Date(),
      PetId: PetId,
    };
    const Vet_Visit1 = await Veterinary_Visits.create(Vet_Visit);
    console.log(Vet_Visit1);
    res.send(Vet_Visit1);
  } catch (error) {
    console.log(error);
    res.send(error);
  }
});

// router.post("/", async (req, res) => {
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

module.exports = router;
