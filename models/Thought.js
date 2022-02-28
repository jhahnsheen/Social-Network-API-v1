// import Schema model from mongoose
const { Schema, model } = require('mongoose');
// import Reaction schema for linking
const Reaction = require('./Reaction');

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
      get: timeSet,
    },
    username: {
      type: String,
      required: true,
    },
    reactions: [Reaction],
  },
  {
    toJSON: {
      getters: true,
      virtuals: true,
    },
    id: false,
  },
);

// setup timeSet getter function
function timeSet() {
  const date = new Date(dateStr);
  const d = date.getDate();
  const m = date.getMonth()+1;
  const y = date.getFullYear();
  const min = date.getMinutes();
  let h = date.getHours();
  let ap = 'am';
  if (h > 12) {
    h -= 12;
    ap = 'pm'
  }

  return `${m} ${d}th, ${y} at ${h}:${min}`;
};

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