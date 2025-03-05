const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Routes
app.use('/api/tools', require('./routes/tools'));
app.use('/api/agreements', require('./routes/agreements'));

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
}); 