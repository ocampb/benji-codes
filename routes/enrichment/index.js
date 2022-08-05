const { Enrichment } = require("../../models");
var express = require("express");
var router = express.Router();

router.post("/create_enrichment/:petId", async (req, res) => {
  const { petId } = req.params;
  const { type, duration, notes } = req.body;
  try {
    const NewEnrichment = {
      type: type,
      duration: duration,
      notes: notes,
      createdAt: new Date(),
      updatedAt: new Date(),
      PetId: petId,
    };
    console.log(NewEnrichment);
    const NewEnrichment1 = await Enrichment.create(NewEnrichment);
    console.log(NewEnrichment1);
    res.redirect("/petprofile/" + petId);
  } catch (error) {
    console.log(error);
    res.send(error);
  }
});

router.get("/view_enrichment_by_id/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const Enrichment1 = await Enrichment.findOne({
      where: { id: id },
    });

    console.log(Enrichment1);
    res.send(Enrichment1);
  } catch (error) {
    console.log(error);
    res.send(error);
  }
});

router.get("/view_all_enrichment_by_petid/:petid", async (req, res) => {
  const { petid } = req.params;
  try {
    const Enrichment1 = await Enrichment.findAll({
      where: { PetId: petid },
    });
    console.log(Enrichment1);
    res.send(Enrichment1);
  } catch (error) {
    console.log(error);
    res.send(error);
  }
});

router.delete("/delete_by_id/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const Enrichment1 = await Enrichment.destroy({
      where: { id: id },
    });
    console.log(Enrichment1);
    res.status(200).end();
  } catch (error) {
    console.log(error);
    res.send(error);
  }
});

router.put("/update_by_id/:id", async (req, res) => {
  const { id } = req.params;
  const { type, duration, notes } = req.body;
  try {
    const updatedRows = await Enrichment.update(
      {
        type: type,
        duration: duration,
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

module.exports = router;
