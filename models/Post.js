const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PostSchema = new Schema({
    title: {
        type: String
    },
    body: {
        type: String
    },
    userId: String
})

module.exports = mongoose.model('Posts', PostSchema);