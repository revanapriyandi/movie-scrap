const cheerio = require("cheerio");
const { default: Axios } = require("axios");
const {
  otakudeBaseUrl,
  urlApi,
  completeAnime,
  onGoingAnime,
} = require("../../helpers/Constant");

const home = async (req, res, next) => {
    try {
        const response = await Axios.get(otakudeBaseUrl);
        const $ = cheerio.load(response.data);

        res.send({
            status: true,
            message: "success",
            data: null,
        });

    } catch (error) {
        res.send({ status: false, message: error.stack });
    }
}

module.exports = { home };