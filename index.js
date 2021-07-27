require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const { homeRouter } = require("./app/routes/Movie/HomeRoutes");
const { homeAnimeRouter } = require("./app/routes/Anime/HomeRoutes");
const { detailRouter } = require("./app/routes/Movie/DetailRoutes");
const { episodeRouter } = require("./app/routes/Movie/EpisodeRoutes");
const { listRouter } = require("./app/routes/Movie/ListRoutes");
const { genreRouter } = require("./app/routes/Movie/GenreRoutes");
const { searchRouter } = require("./app/routes/Movie/SearchRoutes");

const app = express();

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());

app.use(homeRouter);
app.use(homeAnimeRouter);
app.use(detailRouter);
app.use(episodeRouter);
app.use(listRouter);
app.use(genreRouter);
app.use(searchRouter);

app.use("/ping", (req, res) => {
  res.send({ status: true, message: "Connection established" });
});

app.use("*", (req, res) => {
  res.send({ status: false, message: "Url not found" });
});

const PORT = process.env.PORT || 8090;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
