const { Enrichment } = require("../../models");
var express = require("express");
var router = express.Router();

router.post("/create_enrichment", async (req, res) => {
  const { type, duration, notes, PetId } = req.body;
  try {
    const NewEnrichment = {
      type: type,
      duration: duration,
      notes: notes,
      createdAt: new Date(),
      updatedAt: new Date(),
      PetId: PetId,
    };
    console.log(NewEnrichment);
    const NewEnrichment1 = await Enrichment.create(NewEnrichment);
    console.log(NewEnrichment1);
    res.send(NewEnrichment1);
  } catch (error) {
    console.log(error);
    res.send(error);
  }
});

module.exports = router;
