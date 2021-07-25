const HomeController = require("../controllers/HomeController");

var router = require("express").Router();
var homeRouter = require("express").Router();

router.get("/home", HomeController.home);

homeRouter.use("/", router);

module.exports = { homeRouter };
