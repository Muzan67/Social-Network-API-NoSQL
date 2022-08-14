const { Schema, Types } = require("mongoose");
const dateFormat = require("../utils/dateFormat");

const ReactionSchema = Schema({
  reactionId: {
    type: Schema.Types.ObjectId,
    default: () => new Types.ObjectId(),
  },
  reactionBody: {
    type: String,
    required: "Insert your reaction! ",
    trim: true,
    maxLength: 280,
    minLength: 1,
  },
  username: {
    type: String,
    required: "Insert your username! ",
  },
  createdAt: {
    type: Date,
    default: Date.now,
    get: (createdAtVal) => dateFormat(createdAtVal),
  },
  toJSON: {
    getters: true,
  },
  // prevents virtuals from creating duplicate of _id as `id`
  id: false,
  _id: false,
});

module.exports = ReactionSchema;
