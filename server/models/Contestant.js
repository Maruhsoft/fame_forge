const mongoose = require('mongoose');

const ContestantSchema = new mongoose.Schema({
    name: { type: String, required: true },
    bio: { type: String, required: true },
    image: { type: String, required: true },
    achievements: { type: [String], default: [] },
    seasons: { type: [String], default: [] }
});

module.exports = mongoose.model('Contestant', ContestantSchema);
