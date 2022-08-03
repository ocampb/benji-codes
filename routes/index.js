var express = require("express");
var router = express.Router();
var app = express();
const {
  Users,
  Pet_Owners,
  Pets,
  Medication,
  Enrichment,
  Veterinary_Visits,
} = require("../models");
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

  const RecentEnrichment = await Enrichment.findAll({
    order: [["createdAt", "DESC"]],
    where: {
      PetId: { [Op.in]: PetIds },
    },
    limit: 4,
  });

  RecentEnrichmentWithPetName = RecentEnrichment.map((enrichment) => {
    const matchingPet = PetsFromId.find((pet) => enrichment.PetId === pet.id);

    enrichment.pet_name = matchingPet.name;

    return enrichment;
  });

  res.render("mypets", {
    locals: {
      name: CurrentUser.name,
      allpets: PetsFromId,
      RecentMedication: RecentMedication,
      RecentEnrichment: RecentEnrichment,
    },
  });
});

// Pet Profile page
router.get("/petprofile/:PetId", async function (req, res, next) {
  const CurrentUser = await Users.findOne({
    where: { id: req.session.userId },
  });
  const myPetOwnerRecord = await Pet_Owners.findOne({
    where: { UserId: req.session.userId, PetId: req.params.PetId },
  });
  const myPet = await Pets.findOne({
    where: { id: req.params.PetId },
  });

  const PetId = req.params.PetId;

  const RecentMedication = await Medication.findAll({
    order: [["createdAt", "DESC"]],
    where: {
      PetId: PetId,
    },
  });
  const RecentEnrichment = await Enrichment.findAll({
    order: [["createdAt", "DESC"]],
    where: {
      PetId: PetId,
    },
  });
  const Recent_Vet_Visit = await Veterinary_Visits.findAll({
    order: [["createdAt", "DESC"]],
    where: {
      PetId: PetId,
    },
  });
  res.render("petprofile", {
    locals: {
      pet: myPet,
      RecentMedication: RecentMedication,
      RecentEnrichment: RecentEnrichment,
      Recent_Vet_Visit: Recent_Vet_Visit,
    },
  });
});

module.exports = router;
