import Joi from "joi";

export const adventureSchema = Joi.object({
  genreId: Joi.number().required(),
  adventureName: Joi.string().required(),
  adventureBanner: Joi.string(),
  Description: Joi.string().required(),
});
