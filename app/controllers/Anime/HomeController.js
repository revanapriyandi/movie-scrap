const cheerio = require("cheerio");
const axios = require("axios");
const {
  baseUrlAnime,
  urlApi,
} = require("../../helpers/Constant");

const home = async (req, res, next) => {
    try {
        const response = await axios.get(baseUrlAnime);
        const $ = cheerio.load(response.data);
        
        const newReleaseResponse = $(".bixbox").eq(1).find(".listupd").find("article.stylesix");

        let newRelease = [];
        newReleaseResponse.each((i, e) => {
            const id = $(e).find(".thumb").find("a").attr("href").replace(baseUrlAnime, "");
            
            newRelease.push({
                id,
            });
        });

        res.send({
            status: true,
            message: "success",
            data: { newRelease },
        });
    } catch (error) {
        res.send({ status: false, message: error.response });
    }
};

module.exports = { home };