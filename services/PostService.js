const Post = require('../models/Post');


exports.createPost = async (postData) => {
    try {
        const post = new Post(postData);
        await post.save();
        return post;
    } catch (error) {
        throw error;
    }
};

exports.getPostById = async (postId) => {
    try {
        return await Post.findById(postId);
    } catch (error) {
        throw error;
    }
};


exports.updatePost = async (postId, postData) => {
    try {
        return await Post.findByIdAndUpdate(postId, postData, { new: true });
    } catch (error) {
        throw error;
    }
};


exports.deletePost = async (postId) => {
    try {
        return await Post.findByIdAndDelete(postId);
    } catch (error) {
        throw error;
    }
};
