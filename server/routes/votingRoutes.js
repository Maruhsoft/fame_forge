const express = require('express');
const router = express.Router();
const Vote = require('../models/Vote');

router.post('/', async (req, res) => {
    const vote = new Vote(req.body);
    try {
        await vote.save();
        res.status(201).json({ success: true });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
});

router.get('/stats', async (req, res) => {
    // Logic for retrieving voting statistics will go here
    res.json({ message: "Voting statistics fetched successfully." });
});

module.exports = router;
