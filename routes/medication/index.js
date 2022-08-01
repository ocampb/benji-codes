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

router.get("/view_medication_by_id/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const Medication1 = await Medication.findOne({
      where: { id: id },
    });

    console.log(Medication1);
    res.send(Medication1);
  } catch (error) {
    console.log(error);
    res.send(error);
  }
});

router.get("/view_all_medication_by_petid/:petid", async (req, res) => {
  const { petid } = req.params;
  try {
    const Medication1 = await Medication.findAll({
      where: { PetId: petid },
    });
    console.log(Medication1);
    res.send(Medication1);
  } catch (error) {
    console.log(error);
    res.send(error);
  }
});

module.exports = router;
