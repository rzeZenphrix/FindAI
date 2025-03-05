const db = require('../config/db');

class Tool {
    static async getAll() {
        const query = 'SELECT * FROM tools ORDER BY rating DESC';
        const { rows } = await db.query(query);
        return rows;
    }

    static async create(tool) {
        const query = `
            INSERT INTO tools (name, category, description, pricing, url, rating, date_added)
            VALUES ($1, $2, $3, $4, $5, $6, $7)
            RETURNING *
        `;
        const values = [
            tool.name,
            tool.category,
            tool.description,
            tool.pricing,
            tool.url,
            tool.rating || 0,
            new Date()
        ];
        const { rows } = await db.query(query, values);
        return rows[0];
    }

    static async findDuplicate(name, url) {
        const query = 'SELECT * FROM tools WHERE LOWER(name) = LOWER($1) OR url = $2';
        const { rows } = await db.query(query, [name, url]);
        return rows.length > 0;
    }
}

module.exports = Tool; 