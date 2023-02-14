import Joi from "joi";

export const adventureSchema = Joi.object({
  genreId: Joi.number().required(),
  adventureName: Joi.string().required(),
  adventureBanner: Joi.string(),
  description: Joi.string().required(),
});

export const updateAdventureSchema = Joi.object({
  adventureName: Joi.string(),
  adventureBanner: Joi.string(),
  Description: Joi.string(),
});
