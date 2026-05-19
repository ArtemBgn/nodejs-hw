import { Schema } from 'mongoose';
import { model } from 'mongoose';
import { TAGS } from '../constants/tags.js';

const noteSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    content: {
      type: String,
      trim: true,
      default: '',
    },
    tag: {
      type: String,
      trim: true,
      enum: TAGS,
      default: 'Todo',
    },
  },
  { versionKey: false, timestamps: true },
);

export const Note = model('Note', noteSchema);
