import { Joi, Segments } from 'celebrate';
import { emailRegex } from '../constants/tags';

export const registerUserSchema = {
  [Segments.BODY]: Joi.object({
    username: Joi.string(),
    email: Joi.string().pattern(emailRegex).required(),
    password: Joi.string().min(8).required(),
  }),
};

export const loginUserSchema = {
  [Segments.BODY]: Joi.object({
    email: Joi.string().pattern(emailRegex).required(),
    password: Joi.string().min(8).required(),
  }),
};
/*new Schema(
  {
    username: {
      type: String,
      trim: true,
    },
    email: {
      type: String,
      trim: true,
      unique: true,
      match: emailRegexp,
      required: true,
    },
    password: {
      type: String,
      minLength: 8,
      required: true,
    },
  },
  { versionKey: false, timestamps: true },
);*/
