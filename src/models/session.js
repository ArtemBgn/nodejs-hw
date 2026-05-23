import { Schema } from 'mongoose';
import { model } from 'mongoose';

const sessionSchema = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: 'user',
    },
    accessToken: {
      type: String,
      required: true,
    },
    refreshToken: {
      type: String,
      required: true,
    },
    accessTokenValidUntil: { type: Date, required: true },
    refreshTokenValidUntil: { type: Date, required: true },
  },
  { versionKey: false, timestamps: true },
);

// sessionSchema.index({ userId: 1 });

export const Session = model('Session', sessionSchema);
