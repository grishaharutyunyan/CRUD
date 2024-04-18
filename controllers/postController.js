const Post = require('../models/Post');
const User = require('../models/User');


exports.createPost = async (req, res, next) => {
    try {
        const { title, content, userId } = req.body;
        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        const post = new Post({ title, content, user: userId });
        await post.save();
        res.status(201).json(post);
    } catch (error) {
        next(error);
    }
};


exports.getPostById = async (req, res, next) => {
    try {
        const post = await Post.findById(req.params.id);
        if (!post) {
            return res.status(404).json({ message: 'Post not found' });
        }
        res.json(post);
    } catch (error) {
        next(error);
    }
};


exports.updatePost = async (req, res, next) => {
    try {
        const { title, content } = req.body;
        const post = await Post.findByIdAndUpdate(req.params.id, { title, content }, { new: true });
        if (!post) {
            return res.status(404).json({ message: 'Post not found' });
        }
        res.json(post);
    } catch (error) {
        next(error);
    }
};


exports.deletePost = async (req, res, next) => {
    try {
        const post = await Post.findByIdAndDelete(req.params.id);
        if (!post) {
            return res.status(404).json({ message: 'Post not found' });
        }
        res.json({ message: 'Post deleted successfully' });
    } catch (error) {
        next(error);
    }
};
