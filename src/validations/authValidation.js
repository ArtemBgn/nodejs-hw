import { Joi, Segments } from 'celebrate';
// import { emailRegex } from '../constants/tags.js';

export const registerUserSchema = {
  [Segments.BODY]: Joi.object({
    username: Joi.string(),
    // email: Joi.string().pattern(emailRegex).required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(8).required(),
  }),
};

export const loginUserSchema = {
  [Segments.BODY]: Joi.object({
    // email: Joi.string().pattern(emailRegex).required(),
    email: Joi.string().email().required(),
    password: Joi.string().required(),
  }),
};

export const requestResetEmailSchema = {
  [Segments.BODY]: Joi.object({
    // email: Joi.string().pattern(emailRegex).required(),
    email: Joi.string().email().required(),
  }),
};

export const resetResetEmailSchema = {
  [Segments.BODY]: Joi.object({
    token: Joi.string().required(),
    password: Joi.string().required(),
  }),
};
