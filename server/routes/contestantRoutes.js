const express = require('express');
const router = express.Router();
const Contestant = require('../models/Contestant');

router.get('/:id', async (req, res) => {
    try {
        const contestant = await Contestant.findById(req.params.id);
        res.json(contestant);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.post('/', async (req, res) => {
    const contestant = new Contestant(req.body);
    try {
        const savedContestant = await contestant.save();
        res.status(201).json(savedContestant);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

router.put('/:id', async (req, res) => {
    try {
        const updatedContestant = await Contestant.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(updatedContestant);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

router.delete('/:id', async (req, res) => {
    try {
        await Contestant.findByIdAndDelete(req.params.id);
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;
