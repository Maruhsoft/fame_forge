const mongoose = require('mongoose');

const VoteSchema = new mongoose.Schema({
    contestantId: { type: mongoose.Schema.Types.ObjectId, ref: 'Contestant', required: true },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    timestamp: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Vote', VoteSchema);
