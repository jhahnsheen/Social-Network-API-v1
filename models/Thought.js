// import Schema model from mongoose
const { Schema, model } = require('mongoose');
// importing the getter function
const dateGetter = require('../utils/dateGetter');

// setup new schema according to instructions
const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      minlength: 1,
      maxlength: 280,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: (dateStr) => dateGetter(dateStr),
    },
    username: {
      type: String,
      required: true,
    },
    reactions: [
      {
        reactionId: {
          type: Schema.Types.ObjectId,
          default: () => new Types.ObjectId(),
        },
        reactionBody: {
          type: String,
          required: true,
          maxlength: 280,
        },
        username: {
          type: String,
          required: true,
        },
        createdAt: {
          type: Date,
          default: Date.now,
          get: (dateStr) => dateGetter(dateStr),
        },
      },
    ],
  },
  {
    toJSON: {
      getters: true,
      virtuals: true,
    },
    id: false,
  },
);

// setup friendCount virtual
thoughtSchema
  .virtual('reactionCount')
  .get(function () {
    return this.reactions.length;
  }
);

// initialize Thought model
const Thought = model('thought', thoughtSchema);
// export Thought model
module.exports = Thought;