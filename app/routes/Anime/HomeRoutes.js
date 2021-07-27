const HomeController = require("../../controllers/Anime/HomeController");

var router = require("express").Router();
var homeAnimeRouter = require("express").Router();

router.get("/home", HomeController.home);

homeAnimeRouter.use("/api/anime", router);

module.exports = { homeAnimeRouter };
