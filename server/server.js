const express = require('express');

const app = express();
const cors = require('cors');
require('dotenv').config();

app.use(cors());

// Connect to database
// We will create the db connection logic separately or inline it. 
// For simplicity, let's inline it if not too complex, but following best practices I'll make a config folder.
// Actually, let's keep it simple as per plan.

const mongoose = require('mongoose');

const connectMongo = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);

        console.log('MongoDB Connected...');
    } catch (err) {
        console.error(err.message);
        process.exit(1);
    }
};

connectMongo();

app.use(express.json({ extended: false }));

// Define Routes
app.use('/', require('./routes/index'));
app.use('/api/url', require('./routes/url'));

const PORT = 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
