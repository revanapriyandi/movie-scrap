const HomeController = require("../../controllers/Movie/HomeController");

var router = require("express").Router();
var homeRouter = require("express").Router();

router.get("/home", HomeController.home);

homeRouter.use("/api", router);

module.exports = { homeRouter };
