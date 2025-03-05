const pool = require('./config/db'); 
const AI_TOOLS = require('./data/tools');

async function initializeDatabase() {
    try {
        // Drop existing table if it exists
        await pool.query('DROP TABLE IF EXISTS tools');
        
        // Create table
        await pool.query(`
            CREATE TABLE IF NOT EXISTS tools (
                id SERIAL PRIMARY KEY,
                name VARCHAR(255) UNIQUE NOT NULL,
                category VARCHAR(100) NOT NULL,
                description TEXT,
                pricing VARCHAR(50),
                url VARCHAR(255) UNIQUE,
                rating DECIMAL(2,1),
                date_added TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            )
        `);

        // Seed data
        for (const tool of AI_TOOLS) {
            try {
                await pool.query(`
                    INSERT INTO tools (name, category, description, pricing, url, rating)
                    VALUES ($1, $2, $3, $4, $5, $6)
                `, [tool.name, tool.category, tool.description, tool.pricing, tool.url, tool.rating]);
            } catch (error) {
                console.error(`Error inserting ${tool.name}:`, error.message);
            }
        }

        console.log('Database initialized successfully');
    } catch (error) {
        console.error('Error initializing database:', error);
    } finally {
        pool.end();
    }
}

// ✅ Export the function instead of calling it immediately
module.exports = { initializeDatabase };

// Call the function to initialize the database
initializeDatabase();