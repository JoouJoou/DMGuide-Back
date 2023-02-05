import Joi from "joi";

export const updateUserSchema = Joi.object({
  email: Joi.string().email(),
  name: Joi.string(),
  picture: Joi.string(),
  password: Joi.string(),
});
