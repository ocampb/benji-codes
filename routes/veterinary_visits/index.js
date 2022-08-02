const { Veterinary_Visits } = require("../../models");
const express = require("express");
const router = express.Router();

router.get("/view_vet_visit_by_id/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const Vet_Visit1 = await Veterinary_Visits.findOne({
      where: { id: id },
    });

    console.log(Vet_Visit1);
    res.send(Vet_Visit1);
  } catch (error) {
    console.log(error);
    res.send(error);
  }
});

router.get("/view_all_vet_visits_by_petid/:petid", async (req, res) => {
  const { petid } = req.params;
  try {
    const Vet_Visit1 = await Veterinary_Visits.findAll({
      where: { PetId: petid },
    });
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

router.put("/update_vet_visit/:id", async (req, res) => {
  const { id } = req.params;
  const { vet_name, date_of_visit, reason, notes } = req.body;
  try {
    const updatedRows = await Veterinary_Visits.update(
      {
        vet_name: vet_name,
        date_of_visit: date_of_visit,
        reason: reason,
        notes: notes,
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
    const Vet1 = await Veterinary_Visits.destroy({
      where: { id: id },
    });
    res.status(200).end();
  } catch (error) {
    console.log(error);
    res.send(error);
  }
});

module.exports = router;
