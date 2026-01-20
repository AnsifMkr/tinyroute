const express = require('express');
const router = express.Router();
const { nanoid } = require('nanoid');
const Url = require('../models/Url');

// @route   POST /api/url/shorten
// @desc    Create short URL
router.post('/shorten', async (req, res) => {
    const { longUrl } = req.body;
    const baseUrl = process.env.BASE_URL;

    // Simple validation
    if (!longUrl) {
        return res.status(401).json('Invalid URL');
    }

    try {
        let url = await Url.findOne({ longUrl });

        if (url) {
            res.json(url);
        } else {
            const urlCode = nanoid(6); // Generate 6 char code
            const shortUrl = baseUrl + '/' + urlCode;

            url = new Url({
                longUrl,
                shortUrl,
                urlCode,
                date: new Date()
            });

            await url.save();

            res.json(url);
        }
    } catch (err) {
        console.error(err);
        res.status(500).json('Server error');
    }
});

module.exports = router;
