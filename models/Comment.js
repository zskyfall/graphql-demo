const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CommentSchema = new Schema({
    postId: {
        type: String
    },
    email: {
        type: String
    },
    name: String,
    body: String
})

module.exports = mongoose.model('Comments', CommentSchema);