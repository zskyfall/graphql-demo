// const Posts = require('../posts.json');
// const Users = require('../users.json');
// const comments = require('../comments.json');

const User = require('../models/User');
const Post = require('../models/Post');
const Comment = require('../models/Comment');

const resolvers = {
    Query: {
        posts: async(parent, args, context) => await context.mongoDataMethods.getAllPosts(),
        post: async(parent, args, context) => await context.mongoDataMethods.getPostById(args.id),
        users: async(parent, args, context) => await context.mongoDataMethods.getAllUsers(),
        user: async(parent, args, context) => await context.mongoDataMethods.getAllPosts(args.id),
        comments: async(parent, args, context) => await context.mongoDataMethods.getAllComments(),
        comment: async(parent, args, context) => await context.mongoDataMethods.getCommentById(args.id)
    },
    Post: {
        user: async(parent, args, context) => await context.mongoDataMethods.getUserById(parent.userId),
        comments: async(parent, args, context) => await context.mongoDataMethods.getCommentsByPost(parent._id)
    },
    User: {
        posts: async(parent, args, context) => await context.mongoDataMethods.getPostByUserId(parent._id)
    },
    Comment: {
        post: async(parent, args, context) => await context.mongoDataMethods.getPostById(parent.postId)
    },
    //MUTATION
    Mutation: {
        createUser: async(parent, args) => {
            const newUser = new User(args);
            return await newUser.save();
        },
        createPost: async(parent, args) => {
            const newPost = new Post(args);
            return await newPost.save();
        },
        createComment: async(parent, args) => {
            const newComment = new Comment(args);
            return await newComment.save();
        }
    }
}

module.exports = resolvers;