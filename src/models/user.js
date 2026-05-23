import { Schema } from 'mongoose';
import { model } from 'mongoose';
import { emailRegex } from '../constants/tags.js';

const userSchema = new Schema(
  {
    username: {
      type: String,
      trim: true,
    },
    email: {
      type: String,
      trim: true,
      unique: true,
      match: emailRegex,
      required: true,
    },
    password: {
      type: String,
      minLength: 8,
      required: true,
    },
  },
  { versionKey: false, timestamps: true },
);

userSchema.pre('save', function () {
  if (!this.username) {
    this.username = this.email;
  }
});

userSchema.methods.toJSON = function () {
  const obj = this.toObject();
  delete obj.password;
  return obj;
};

userSchema.pre('save', function () {
  if (!this.username) {
    this.username = this.email;
  }
});

// userSchema.index({ email: 1 });

export const User = model('User', userSchema);
