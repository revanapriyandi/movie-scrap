const cheerio = require("cheerio");
const axios  = require("axios");
const {
  baseUrlAnime,
  urlApi,
  completeAnime,
  onGoingAnime,
} = require("../../helpers/Constant");

const home = async (req, res, next) => {
    try {
        const response = await axios.get(baseUrlAnime);
        const $ = cheerio.load(response.data);

        const ongoingResponse = $(".site-main").eq(0).find("article");
        
        let ongoing = [];
        ongoingResponse.each((i, elem) => {
            const id = $(elem).find(".entry-title").find("a").attr("href").replace(baseUrlAnime, "");
            const title = $(elem).find(".entry-title").text();
            const episode = $(elem).find(".featured-thumb").find('.postedon').text();
            const thumb = $(elem).find(".featured-thumb").find('img').attr("src");
            const link = `${urlApi}/anime/${id}`;
            ongoing.push({
                id: id,
                title: title,
                episode: episode,
                thumb: thumb,
                link: link,
            });
        });


        res.send({
            status: true,
            message: "success",
            data: {ongoing},
        });

    } catch (error) {
        res.send({ status: false, message: error.stack });
    }
}

module.exports = { home };