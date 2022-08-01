require("dotenv").config();
var createError = require("http-errors");
const session = require("express-session");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var PORT = process.env.PORT || 3000;
const es6Renderer = require("express-es6-template-engine");
const usersRoutes = require("./routes/users");
const petsRoutes = require("./routes/pets");
const enrichmentRoutes = require("./routes/enrichment");
const medicationRoutes = require("./routes/medication");
const vetRoutes = require("./routes/veterinary_visits");
var indexRouter = require("./routes/index");

const isAuthenticated = (req, res, next) => {
  if (req.session.userId) {
    console.log("Logged in");
    next();
  } else {
    console.log("NOT LOGGED IN");
    res.redirect("/login.html");
  }
};

var app = express();

app.use(
  session({
    secret: "secret",
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 },
  })
);

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "html");
app.engine("html", es6Renderer);

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/users", usersRoutes);
app.use("/pets", isAuthenticated, petsRoutes);
app.use("/enrichment", isAuthenticated, enrichmentRoutes);
app.use("/medication", isAuthenticated, medicationRoutes);
app.use("/veterinary_visits", isAuthenticated, vetRoutes);
app.use("/", indexRouter);

//app.use("/users", usersRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  console.log(err.message);

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

app.listen(PORT, () => {
  console.log("running");
});
