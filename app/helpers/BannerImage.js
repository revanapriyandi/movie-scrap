const convertToBanner = (url) => {
  return `https://image.tmdb.org/t/p/w533_and_h300_face/${
    url.split("/")[url.split("/").length - 1]
  }`;
};

const getBanner = (url) => {
  return url.split("(")[1].replace(")", "").replace(";", "");
};

module.exports = { convertToBanner, getBanner };
