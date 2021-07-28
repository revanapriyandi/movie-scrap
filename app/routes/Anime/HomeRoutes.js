const AnimeController = require("../../controllers/Anime/HomeController");

var router = require("express").Router();
var homeAnimeRouter = require("express").Router();

router.get("/anime/home", AnimeController.home);

homeAnimeRouter.use("/api", router);

module.exports = { homeAnimeRouter };
