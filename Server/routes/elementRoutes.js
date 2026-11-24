const express = require('express');
const router = express.Router();
const Element = require('../models/Element'); // Make sure this is exactly 'Element'

console.log("Checking Element Model:", Element); 

// GET all elements
router.get('/', async (req, res) => {
    try {
        const elements = await Element.find();
        res.json(elements);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// CREATE a new element
router.post('/', async (req, res) => {
    const element = new Element({ // THIS is where your error was happening
        name: req.body.name,
        symbol: req.body.symbol,
        atomicNumber: req.body.atomicNumber
    });
    try {
        const newElement = await element.save();
        res.status(201).json(newElement);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// DELETE an element
router.delete('/:id', async (req, res) => {
    try {
        await Element.findByIdAndDelete(req.params.id);
        res.json({ message: 'Deleted Element' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;