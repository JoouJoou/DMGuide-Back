import Joi from "joi";

export const characterSchema = Joi.object({
  adventureId: Joi.number().required(),
  characterName: Joi.string().required(),
  characterPicture: Joi.string(),
  height: Joi.number(),
  age: Joi.number(),
  race: Joi.string(),
  characterBackground: Joi.string(),
  playlist: Joi.string(),
});

export const characterUpdateSchema = Joi.object({
  characterName: Joi.string(),
  characterPicture: Joi.string(),
  height: Joi.number(),
  age: Joi.number(),
  race: Joi.string(),
  characterBackground: Joi.string(),
  playlist: Joi.string(),
});
