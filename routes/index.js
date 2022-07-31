var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

//Login page
router.get("/login", function (req, res, next) {
  res.render("login", { title: "Express" });
});

//Sign Up page
router.get("/signup", function (req, res, next) {
  res.render("signup", { title: "Express" });
});

//My Pets
router.get("/mypets", function (req, res, next) {
  res.render("mypets", { title: "Express" });
});

//Pet Profile
router.get("/petprofile", function (req, res, next) {
  res.render("petprofile", { title: "Express" });
});

module.exports = router;
