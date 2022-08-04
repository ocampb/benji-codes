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
    res.redirect("/mypets");
  } catch (error) {
    console.log(error);
    res.send(error);
  }
});

router.get("/get_pet_by_id/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const OnePet = await Pets.findOne({
      where: { id: id },
    });
    res.send(OnePet);
  } catch (error) {
    console.log(error);
    res.send(error);
  }
});

router.put("/update_pet/:id", async (req, res) => {
  const { id } = req.params;
  const { name, birthday, species } = req.body;
  try {
    const updatedRows = await Pets.update(
      {
        name: name,
        birthday: birthday,
        species: species,
      },
      {
        where: { id: id },
      }
    );

    res.send(updatedRows);
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
