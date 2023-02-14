import { Router } from "express";
import { validateSchema } from "../middlewares/validations/schemaValidator";
import { validateToken } from "../middlewares/validations/tokenValidator";
import * as locationController from "../controllers/locationController";

const locationRouter = Router();

export default locationRouter;
