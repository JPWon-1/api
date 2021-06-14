const mongoose = require('mongoose');

const HistorySchema = new mongoose.Schema(
    {
        // _id: mongoose.Schema.ObjectId,
        date: {
            type: String,
            required: true
        },
        content: {
            type: String,
            required: true
        },
        source: {
            type: String,
            required: true
        },
    }
);

const History = mongoose.model('History', HistorySchema);
module.exports = History;