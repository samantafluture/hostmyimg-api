const Post = require('./../models/Post');

class PostController {
    static async getAllPosts(req, res) {
        try {
            const posts = await Post.find({});
            return res.status(200).json(posts);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async getPostById(req, res) {
        try {
            const post = await Post.findById(req.params.id);
            return res.status(200).json(post);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async createPost(req, res) {
        const { originalname: name, size, key, location: url = '' } = req.file;
        try {
            const post = await Post.create({
                name,
                size,
                key,
                url
            });
            return res.status(200).json(post);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async deletePost(req, res) {
        try {
            const post = await Post.findById(req.params.id);
            await post.remove();
            return res.status(200).send();
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }
}

module.exports = PostController;
