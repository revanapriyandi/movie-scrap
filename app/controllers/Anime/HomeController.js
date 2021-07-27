const cheerio = require("cheerio");
const axios  = require("axios");
const {
  otakudeBaseUrl,
  urlApi,
  completeAnime,
  onGoingAnime,
} = require("../../helpers/Constant");

const home = async (req, res, next) => {
    try {
        const response = await axios.get("https://meownime.moe");
        const $ = cheerio.load(response.data);

        const ongoingResponse = $(".site-main").eq(0).find("article");
        
        let ongoing = [];
        ongoingResponse.each((i, elem) => {
            const url = $(elem).find(".postedon").eq(0).text();
            ongoing.push({
                url,
            });
        });


        res.send({
            status: true,
            message: "success",
            data: ongoing,
        });

    } catch (error) {
        res.send({ status: false, message: error.stack });
    }
}

module.exports = { home };