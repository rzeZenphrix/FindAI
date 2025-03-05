const express = require('express');
const router = express.Router();
const pool = require('../config/db');

// Record new agreement
router.post('/', async (req, res) => {
    try {
        console.log('Received agreement request:', req.body);
        
        const { agreementDate, ipAddress, userAgent, termsVersion } = req.body;
        
        const query = `
            INSERT INTO user_agreements 
            (agreement_date, ip_address, user_agent, terms_version)
            VALUES ($1, $2, $3, $4)
            RETURNING *
        `;
        
        const values = [agreementDate, ipAddress, userAgent, termsVersion];
        console.log('Executing query with values:', values);
        
        const { rows } = await pool.query(query, values);
        console.log('Inserted agreement:', rows[0]);
        
        res.status(201).json(rows[0]);
    } catch (error) {
        console.error('Error recording agreement:', error);
        res.status(500).json({ error: 'Failed to record agreement' });
    }
});

module.exports = router; 