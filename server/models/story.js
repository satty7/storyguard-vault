const mongoose = require('mongoose');

const storySchema = new mongoose.Schema({
    title: String,
    content: String,
    author: String,
    blockchainHash: String,
    timestamp: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Story', storySchema);
