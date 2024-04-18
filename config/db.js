const mongoose = require('mongoose');
require('dotenv').config();

const connectDB = async () => {
    try {
        const DATABASE_URL = process.env.DATABASE_URL;
        const connect = await mongoose.connect(DATABASE_URL);
        console.log(`MongoDB connected: ${connect.connection.host}:${connect.connection.port}`);
        return connect;
    } catch (error) {
        console.error('MongoDB connection error:', error);
        process.exit(1);
    }
};

module.exports = connectDB;
