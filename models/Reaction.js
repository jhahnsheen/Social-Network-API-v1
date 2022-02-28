// import Schema types from mongoose
const { Schema, Types } = require('mongoose');

// setup new schema according to instructions
const reactionSchema = new Schema(
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
      get: timeSet,
    },
  },
  {
    toJSON: {
      getters: true,
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

// export Reaction schema
module.exports = reactionSchema;