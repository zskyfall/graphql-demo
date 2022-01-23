const User = require('../models/User');
const Post = require('../models/Post');
const Comment = require('../models/Comment');

const mongoDataMethods = {
    getAllUsers: async() => User.find(),
    getUserById: async(id) => User.findOne({ _id: id }),
    getAllPosts: async() => Post.find(),
    getPostByUserId: async(_userId) => Post.find({ userId: _userId }),
    getPostById: async(id) => Post.findOne({ _id: id }),
    getCommentsByPost: async(postId) => Comment.find({ postId: postId }),
    getAllComments: async() => Comment.find()
}

module.exports = mongoDataMethods;