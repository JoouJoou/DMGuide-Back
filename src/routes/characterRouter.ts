import { Router } from "express";
import { validateSchema } from "../middlewares/validations/schemaValidator";
import { validateToken } from "../middlewares/validations/tokenValidator";
import {
  characterSchema,
  characterUpdateSchema,
} from "../schemas/characterSchema";
import * as characterController from "../controllers/characterController";

const charactersRouter = Router();

charactersRouter.post(
  "/character",
  validateToken,
  validateSchema(characterSchema),
  characterController.createCharacter
);
charactersRouter.get(
  "/character/:adventureId/:characterId",
  validateToken,
  characterController.getCharacter
);
charactersRouter.delete(
  "/character/:characterId",
  validateToken,
  characterController.deleteCharacter
);
charactersRouter.put(
  "/character/:characterId",
  validateToken,
  validateSchema(characterUpdateSchema),
  characterController.updateCharacter
);

export default charactersRouter;
