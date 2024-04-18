const User = require('../models/User');


exports.createUser = async (userData) => {
    try {
        const user = new User(userData);
        await user.save();
        return user;
    } catch (error) {
        throw error;
    }
};


exports.getUserById = async (userId) => {
    try {
        return await User.findById(userId);
    } catch (error) {
        throw error;
    }
};


exports.updateUser = async (userId, userData) => {
    try {
        return await User.findByIdAndUpdate(userId, userData, { new: true });
    } catch (error) {
        throw error;
    }
};


exports.deleteUser = async (userId) => {
    try {
        return await User.findByIdAndDelete(userId);
    } catch (error) {
        throw error;
    }
};
