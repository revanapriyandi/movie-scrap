module.exports = {
  baseUrl: "https://duniadrakor.net/",
  seriesUrl: "series/",
  episodeUrl: "episode/",
  drakorUrl: "korea-drama/",
  westUrl: "serial-barat/",
  asianUrl: "drama-asia/",
  moviesUrl: "movies/",
  otakudeBaseUrl: "https://otakudesu.moe/",
  completeAnime: 'complete-anime/',
  onGoingAnime: 'ongoing-anime/',
  schedule: 'jadwal-rilis/',
  genreList: 'genre-list/',
  urlApi:
    process.env.MODE === "DEVELOPMENT"
      ? `${process.env.URL_API_DEV}:${process.env.PORT}/api/`
      : `${process.env.URL_API_PROD}/api/`,
};
