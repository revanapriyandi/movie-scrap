const EpisodeController = require("../../controllers/Movie/EpisodeController");

const router = require("express").Router();
const episodeRouter = require("express").Router();

router.get("/:id", EpisodeController.episode);

//router.get("/movies", HomeController.home);

episodeRouter.use("/api/episode", router);

module.exports = { episodeRouter };
