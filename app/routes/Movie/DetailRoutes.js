const DetailController = require("../../controllers/Movie/DetailController");
const EpisodeController = require("../../controllers/Movie/EpisodeController");

const router = require("express").Router();
const detailRouter = require("express").Router();

router.get("/series/:id", DetailController.series);
router.get("/series/episode/:id", EpisodeController.episode);
router.get("/movies/:id", DetailController.movies);

//router.get("/movies", HomeController.home);

detailRouter.use("/api", router);

module.exports = { detailRouter };
