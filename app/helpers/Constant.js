module.exports = {
  baseUrl: "https://duniadrakor.net/",
  seriesUrl: "series/",
  episodeUrl: "episode/",
  drakorUrl: "korea-drama/",
  westUrl: "serial-barat/",
  asianUrl: "drama-asia/",
  moviesUrl: "movies/",
  baseUrlAnime: "https://meownime.moe/",
  urlApi:
    process.env.MODE === "DEVELOPMENT"
      ? `${process.env.URL_API_DEV}:${process.env.PORT}/api/`
      : `${process.env.URL_API_PROD}/api/`,
};
