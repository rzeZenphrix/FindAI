const express = require('express');
const path = require('path');  // For serving static files
const cors = require('cors');
const pool = require('./config/db');
const { initializeDatabase } = require('./seedDatabase');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// ✅ Serve Static Files from `public/` (Fixed Path)
app.use(express.static(path.join(__dirname, 'public')));

// ✅ API Routes
app.use('/api/tools', require('./routes/tools'));
app.use('/api/agreements', require('./routes/agreements'));

// ✅ Catch-all Route (Serve Frontend)
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// ✅ Start Server & Initialize Database
app.listen(PORT, async () => {
    console.log(`Server running on port ${PORT}`);

    try {
        await initializeDatabase();
        console.log("✅ Database Initialized");
    } catch (error) {
        console.error("❌ Database Initialization Failed:", error);
    }
});
