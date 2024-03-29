const express = require("express");
const router = express.Router();
const GenreController = require("../../controllers/Movie/GenreController");
const genreRouter = express.Router();

router.get("/genres", GenreController.genreList);
router.get("/genre/:genre/:page", GenreController.genre);
router.get("/genre/:genre/", GenreController.genre);

genreRouter.use("/api", router);

module.exports = { genreRouter };
