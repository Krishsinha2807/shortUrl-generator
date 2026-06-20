const shortid = require("shortid");
const Url = require("../models/urlModel");


// CREATE SHORT URL
exports.createShortUrl = async (req, res) => {
    try {

        const { originalUrl } = req.body;

        console.log("Original URL:", originalUrl);

        const shortId = shortid.generate();

        console.log("Generated shortId:", shortId);

        const newUrl = await Url.create({
            originalUrl,
            shortId
        });

        console.log("Saved:", newUrl);

        res.json({
            shortUrl: `http://localhost:5000/${shortId}`
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({ error: error.message });
    }
};



// REDIRECT URL
exports.redirectUrl = async (req, res) => {
    try {

        console.log("Requested shortId:", req.params.shortId);

        const url = await Url.findOne({
            shortId: req.params.shortId
        });

        console.log("DB result:", url);

        if (!url) {
            return res.status(404).send("URL not found");
        }

        res.redirect(url.originalUrl);

    } catch (error) {
        console.log(error);
        res.status(500).send(error.message);
    }
};