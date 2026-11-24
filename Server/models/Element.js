const mongoose = require('mongoose');

const elementSchema = new mongoose.Schema({
    name: { type: String, required: true },
    symbol: { type: String, required: true },
    atomicNumber: { type: Number, required: true }
});

module.exports = mongoose.model('Element', elementSchema);