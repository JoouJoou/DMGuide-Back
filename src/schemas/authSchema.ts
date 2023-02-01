import Joi from "joi";

export const signupSchema = Joi.object({
  email: Joi.string().email().required(),
  name: Joi.string().required(),
  password: Joi.string().required,
  picture: Joi.string(),
});
