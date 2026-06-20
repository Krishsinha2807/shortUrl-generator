const express = require("express");

const router = express.Router();


const {
    createShortUrl,
    redirectUrl

}=require("../controllers/urlController");



// generate url

router.post(
    "/shorten",
    createShortUrl
);



// redirect

router.get(
    "/:shortId",
    redirectUrl
);



module.exports = router;