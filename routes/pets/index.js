const { Pets, Pet_Owners } = require("../../models");
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
    const newPet1 = await Pets.create(NewPet);
    console.log(newPet1);
    await Pet_Owners.create({
      UserId: req.session.userId,
      PetId: newPet1.dataValues.id,
    });
    console.log(newPet1);
    res.send(newPet1);
  } catch (error) {
    console.log(error);
    res.send(error);
  }
});

router.delete("/delete_by_id/:id", async (req, res) => {
  const { id } = req.params;
  try {
    await Pets.destroy({
      where: { id: id },
    });
    res.status(200).end();
  } catch (error) {
    console.log(error);
    res.send(error);
  }
});

module.exports = router;
