const express = require('express');

const app = express();
const cors = require('cors');
require('dotenv').config();

const allowedOrigins = [
  'https://tr-gold.vercel.app', 
  'http://localhost:5173'
];
app.use(cors({
    origin: function(origin, callback) {
    // Allow requests with no origin (like mobile apps, curl requests)
    if (!origin) return callback(null, true);
    
    if (allowedOrigins.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization', 'Accept', 'X-CSRF-Token', 'X-Requested-With', 
                       'Accept-Version', 'Content-Length', 'Content-MD5', 'Date', 'X-Api-Version'],
    optionsSuccessStatus: 200
}));

app.options('*', (req, res) => {
  res.status(200).end();
});

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
