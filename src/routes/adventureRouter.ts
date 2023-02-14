import { Router } from "express";
import { validateSchema } from "../middlewares/validations/schemaValidator";
import { validateToken } from "../middlewares/validations/tokenValidator";
import { updateUserSchema } from "../schemas/userSchema";
import * as adventureController from "../controllers/adventureController";
import {
  adventureSchema,
  updateAdventureSchema,
} from "../schemas/adventureSchema";

const adventureRouter = Router();

adventureRouter.post(
  "/adventure",
  validateToken,
  validateSchema(adventureSchema),
  adventureController.createAdventure
);
adventureRouter.get(
  "/adventure",
  validateToken,
  adventureController.getUserAdventures
);
adventureRouter.put(
  "/adventure/:adventureId",
  validateToken,
  validateSchema(updateAdventureSchema),
  adventureController.updateAdventure
);

adventureRouter.get(
  "/adventure/:adventureId",
  validateToken,
  adventureController.getAdventure
);

adventureRouter.delete(
  "/adventure/:adventureId",
  validateToken,
  adventureController.deleteAdventure
 );

export default adventureRouter;
