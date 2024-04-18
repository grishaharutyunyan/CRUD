const Post = require('../models/Post');

exports.checkPostOwnership = async (req, res, next) => {
    try {
        const post = await Post.findById(req.params.postId);
        if (!post) {
            return res.status(404).json({ message: 'Post not found' });
        }
        if (post.user.toString() !== req.userId) {
            return res.status(403).json({ message: 'You are not the owner of this post' });
        }
        next();
    } catch (error) {
        next(error);
    }
};
