const express = require('express');
const router = express.Router();
const Tool = require('../models/Tool');
const crawler = require('../services/crawler');

// Get all tools
router.get('/', async (req, res) => {
    try {
        const tools = await Tool.getAll();
        res.json(tools);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Add new tool
router.post('/', async (req, res) => {
    try {
        const isDuplicate = await Tool.findDuplicate(req.body.name, req.body.url);
        if (isDuplicate) {
            return res.status(400).json({ error: 'Tool already exists' });
        }
        const tool = await Tool.create(req.body);
        res.status(201).json(tool);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Add this route
router.get('/crawl', async (req, res) => {
    try {
        const newTools = await crawler.crawl();
        res.json(newTools);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Add batch tools endpoint
router.post('/batch', async (req, res) => {
    try {
        const { tools } = req.body;
        const addedTools = [];
        
        for (const tool of tools) {
            const isDuplicate = await Tool.findDuplicate(tool.name, tool.url);
            if (!isDuplicate) {
                const addedTool = await Tool.create(tool);
                addedTools.push(addedTool);
            }
        }
        
        res.status(201).json(addedTools);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router; 