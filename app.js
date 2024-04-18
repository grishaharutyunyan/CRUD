const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const connectDB = require('./config/db');
require('dotenv').config();

const userRoutes = require('./routes/userRoutes');
const authRoutes = require('./routes/authRoutes');
const postRoutes = require('./routes/postRoutes');

const app = express();
const port = process.env.PORT || 3000;


app.use(bodyParser.json());
app.use(cookieParser());


app.use('/users', userRoutes);
app.use('/auth', authRoutes);
app.use('/posts', postRoutes);


app.get('/', (req, res) => {
    res.json({ message: 'Welcome to the application.' });
});


connectDB()
    .then(() => {
        // Start the server
        app.listen(port, () => {
            console.log(`Server is running on port ${port}`);
        });
    })
    .catch((error) => {
        console.error('Error connecting to MongoDB:', error);
        process.exit(1);
    });

module.exports = app;
