var express = require("express");
var router = express.Router();
var app = express();
const { Users, Pet_Owners, Pets } = require("../models");
const { Op } = require("sequelize");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

//Login page
router.get("/login", function (req, res, next) {
  res.render("login", { title: "Express" });
});

// Sign Up page
router.get("/signup", function (req, res, next) {
  res.render("signup", { title: "Express" });
});

// My Pets page
router.get("/mypets", async function (req, res, next) {
  const user1 = await Users.findOne({
    where: { id: req.session.userId },
  });
  const mypets = await Pet_Owners.findAll({
    where: { UserId: req.session.userId },
  });
  const pets_function = function (mypets1) {
    return mypets1.PetId;
  };
  const PetIds = mypets.map(pets_function);
  const PetsFromId = await Pets.findAll({
    where: {
      id: { [Op.in]: PetIds },
    },
  });
  res.render("mypets", { locals: { name: user1.name, allpets: PetsFromId } });
});

// Pet Profile page
router.get("/petprofile", function (req, res, next) {
  res.render("petprofile", { title: "Express" });
});

module.exports = router;
