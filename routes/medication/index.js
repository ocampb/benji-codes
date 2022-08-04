const { Medication } = require("../../models");
var express = require("express");
var router = express.Router();

router.post("/create_medication/:petId", async (req, res) => {
  const { name, dosage, date_administered } = req.body;
  try {
    const PetId = req.session.PetId;
    const NewMedication = {
      name: name,
      dosage: dosage,
      date_administered: date_administered,
      createdAt: new Date(),
      updatedAt: new Date(),
      PetId: req.params.petId,
    };
    console.log(NewMedication);
    const NewMedication1 = await Medication.create(NewMedication);
    console.log(NewMedication1);

    res.redirect("/petprofile/" + req.params.petId);
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

router.put("/update_by_id/:id", async (req, res) => {
  const { id } = req.params;
  const { name, dosage, date_administered } = req.body;
  try {
    const updatedRows = await Medication.update(
      {
        name: name,
        dosage: dosage,
        date_administered: date_administered,
      },
      {
        where: { id: id },
      }
    );
    console.log(updatedRows);
    res.send(updatedRows);
  } catch (error) {
    console.log(error);
    res.send(error);
  }
});

router.delete("/delete_by_id/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const Medication1 = await Medication.destroy({
      where: { id: id },
    });
    console.log(Medication1);
    res.status(200).end();
  } catch (error) {
    console.log(error);
    res.send(error);
  }
});

module.exports = router;
