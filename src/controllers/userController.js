const User = require('./../models/User');

class UserController {
    static async getAllUsers(req, res) {
        try {
            const users = await User.find({});
            return res.status(200).json(users);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async getUserById(req, res) {
        try {
            const user = await User.findById(req.params.id);
            return res.status(200).json(user);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async getPostsByUser(req, res) {
        const { id } = req.params;
        try {
            const user = await User.findById(id).populate('posts');
            return res.status(200).send(user.posts);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async deleteUser(req, res) {
        try {
            const user = await User.findById(req.params.id);
            await user.remove();
            return res.status(200).send();
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }
}

module.exports = UserController;
