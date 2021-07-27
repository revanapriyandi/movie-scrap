const ListController = require("../../controllers/Movie/ListController");
const SearchController = require("../../controllers/Movie/SearchController");

const router = require("express").Router();
const searchRouter = require("express").Router();

router.get("/:query/:page", SearchController.search);
router.get("/:query/", SearchController.search);

//router.get("/movies", HomeController.home);

searchRouter.use("/api/search", router);

module.exports = { searchRouter };
