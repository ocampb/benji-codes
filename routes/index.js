var express = require("express");
var router = express.Router();
var app = express();
const { Users, Pet_Owners, Pets, Medication } = require("../models");
const { Op } = require("sequelize");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

//Login page
router.get("/login", function (req, res, next) {
  res.render("login", { title: "Express" });
});

router.get("/logout", function (req, res, next) {
  req.session = null;

  res.redirect("/");
});

// ====== Amanda's basic view routes =====
router.get("/addpets", function (req, res, next) {
  res.render("addpets", { title: "Express" });
});

// ============

// Sign Up page
router.get("/signup", function (req, res, next) {
  res.render("signup", { title: "Express" });
});

// My Pets page
router.get("/mypets", async function (req, res, next) {
  const CurrentUser = await Users.findOne({
    where: { id: req.session.userId },
  });
  const mypets = await Pet_Owners.findAll({
    where: { UserId: req.session.userId },
  });
  const pets_function = function (mypets1) {
    return mypets1.PetId;
  };
  const PetIds = mypets.map(pets_function);
  console.log(PetIds);
  const PetsFromId = await Pets.findAll({
    where: {
      id: { [Op.in]: PetIds },
    },
  });

  const RecentMedication = await Medication.findAll({
    order: [["createdAt", "DESC"]],
    where: {
      PetId: { [Op.in]: PetIds },
    },
    limit: 4,
  });

  RecentMedicationWithPetName = RecentMedication.map((medication) => {
    const matchingPet = PetsFromId.find((pet) => medication.PetId === pet.id);

    medication.pet_name = matchingPet.name;

    return medication;
  });

  res.render("mypets", {
    locals: {
      name: CurrentUser.name,
      allpets: PetsFromId,
      RecentMedication: RecentMedication,
    },
  });
});

// Pet Profile page
router.get("/petprofile/:PetId", async function (req, res, next) {
  const CurrentUser = await Users.findOne({
    where: { id: req.session.userId },
  });
  const mypets = await Pet_Owners.findAll({
    where: { UserId: req.session.userId, PetId: req.params.PetId },
  });
  console.log("mypets");
  console.log(mypets);
  const pets_function = function (mypets1) {
    return mypets1.PetId;
  };
  const PetIds = mypets.map(pets_function);
  // PetIds is an array returned with just the IDs of each pet associated with the current user
  const PetsFromId = await Pets.findAll({
    where: {
      id: { [Op.in]: PetIds },
    },
  });
  console.log("pets from id");
  console.log(PetsFromId);

  const RecentMedication = await Medication.findAll({
    order: [["createdAt", "DESC"]],
    where: {
      PetId: { [Op.in]: PetIds },
    },
  });
  res.render("petprofile", { title: "Express" });
});

module.exports = router;
