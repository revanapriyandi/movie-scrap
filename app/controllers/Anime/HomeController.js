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

        const ongoingResponse = $(".venz")
        
        let ongoing = [];
        let episode, uploaded_on, day_updated, thumb, title, link, id;
        ongoingResponse.children()
            .eq(0)
            .find("ul > li")
            .each((i, elem) => {
                $(elem).find(".thumb > a").filter(function () {
                    title = $(this).find(".thumbz > h2").text();
                    thumb = $(this).find(".thumbz > img").attr("src");
                    link = $(this).attr("href");
                    id = link.replace(`${otakudeBaseUrl}anime/`, "");
                });
                uploaded_on = $(elem).find(".newnime").text();
                episode = $(elem).find(".epz").text().replace(" ", "");
                day_updated = $(elem).find(".epztipe").text().replace(" ", "");

                ongoing.push({
                    id,
                    title,
                    thumb,
                    link,
                    episode,
                    uploaded_on,
                    day_updated,
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