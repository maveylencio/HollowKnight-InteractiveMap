const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CommentSchema = new Schema({
  text: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  likes: {
    type: Number,
    default: 0
  },
  dislikes: {
    type: Number,
    default: 0
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const Comment = mongoose.model('Comment', CommentSchema);

module.exports = Comment;
