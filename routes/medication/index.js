const { Medication } = require("../../models");
var express = require("express");
var router = express.Router();

router.post("/create_medication", async (req, res) => {
  const { name, dosage, date_administered, PetId } = req.body;
  try {
    const NewMedication = {
      name: name,
      dosage: dosage,
      date_administered: date_administered,
      createdAt: new Date(),
      updatedAt: new Date(),
      PetId: PetId,
    };
    console.log(NewMedication);
    const NewMedication1 = await Medication.create(NewMedication);
    console.log(NewMedication1);
    res.send(NewMedication1);
  } catch (error) {
    console.log(error);
    res.send(error);
  }
});

module.exports = router;
