// import Schema model from mongoose
const { Schema, model } = require('mongoose');

// setup new schema according to instructions
const userSchema = new Schema(
  {
    username: {
      type: String,
      unique: true,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please enter a valid email address.'],
    },
    thoughts: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Thought',
      },
    ],
    friends: [
      {
        type: Schema.Types.ObjectId,
        ref: 'User'
      },
    ],
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  },
);

// setup friendCount virtual
userSchema
  .virtual('friendCount')
  .get(function () {
    return this.friends.length;
  }
);

// initialize User schema
const User = model('user', userSchema);
// export User model
module.exports = User;