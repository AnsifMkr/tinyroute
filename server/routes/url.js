const express = require('express');
const router = express.Router();
const Url = require('../models/Url');

// @route   POST /api/url/shorten
// @desc    Create short URL
router.post('/shorten', async (req, res) => {
    const { longUrl } = req.body;
    const baseUrl = process.env.BASE_URL;

    // Simple validation
    if (!longUrl) {
        return res.status(401).json({ error: 'Invalid URL' });
    }

    try {
        const { nanoid } = await import('nanoid');
        
        let url = await Url.findOne({ longUrl });

        if (url) {
            res.json(url);
        } else {
            const urlCode = nanoid(6);
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
        res.status(500).json({ error: 'Server error' });
    }
});

module.exports = router;
