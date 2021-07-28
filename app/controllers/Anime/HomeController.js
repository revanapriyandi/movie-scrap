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
        
        const newReleaseResponse = $("section.nobg").eq(0).find(".body").find("ul > li");
        const newAnimeAddResponse = $("section.nobg").eq(1).find(".body").find("ul > li");

        let newRelease = [];
        newReleaseResponse.each((i, e) => {
            const id = $(e).find("a").attr("href").replace(baseUrlAnime, "");
            const title = $(e).find("a.name").text();
            const thumb = $(e).find("a").find("img").attr("data-lazy-src");

            const episode = $(e).find("a").find(".ep").text();
            const status = $(e).find("a").find(".status").text();
            const tags = {
                type: $(e).find("a").find(".taglist").find("span").eq(0).text(),
                hot: $(e).find("a").find(".taglist").find("span").eq(1).text() ? true : false
            };
            const links = `${urlApi}anime/${id}`
            
            newRelease.push({
                id,
                title,
                thumb,
                episode,
                status,
                links,
                tags
            });
        });

        let newAnimeAdd = [];
        newAnimeAddResponse.each((i, e) => {
            const id = $(e).find("a").attr("href").replace(baseUrlAnime, "");
            const title = $(e).find("a.name").text();
            const thumb = $(e).find("a").find("img").attr("data-lazy-src");

            const episode = $(e).find("a").find(".ep").text();
            const status = $(e).find("a").find(".status").text();
            const tags = {
                type: $(e).find("a").find(".taglist").find("span").eq(0).text(),
                hot: $(e).find("a").find(".taglist").find("span").eq(1).text() ? true : false
            };
            const links = `${urlApi}${id}`
            
            newAnimeAdd.push({
                id,
                title,
                thumb,
                episode,
                status,
                links,
                tags
            });
        });
        
        res.send({
            status: true,
            message: "success",
            data: { bannerAnime, newRelease, newAnimeAdd },
        });
    } catch (error) {
        res.send({ status: false, message: error.stack });
    }
};

module.exports = { home };