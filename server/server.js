const express = require('express');

const app = express();
const cors = require('cors');
require('dotenv').config();

app.use(cors({
    origin: ['https://tr-gold.vercel.app', 'http://localhost:5173'],
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));

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

app.get('/', (req, res) => {
    res.send('Server is running');
});

app.use('/api/url', require('./routes/url'));

module.exports = app;

if (process.env.NODE_ENV !== 'production') {
    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
}
