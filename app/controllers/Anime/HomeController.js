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

        const ongoingResponse = $(".venz").eq(0).find("ul > li");
        
        let ongoing = [];
        ongoingResponse.each((i, elem) => {
            const url = $(elem).find("h2.jdlflm").eq(0).text();
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