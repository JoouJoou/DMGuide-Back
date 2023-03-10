import Joi from "joi";

export const signupSchema = Joi.object({
  email: Joi.string().email().required(),
  name: Joi.string().required(),
  picture: Joi.string(),
  password: Joi.string().required(),
});

export const signinSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().required(),
});
