import { Router } from "express";
import * as authController from "../controllers/authController";
import { validateSchema } from "../middlewares/validations/schemaValidator";
import { signupSchema } from "../schemas/authSchema";

const authRouter = Router();

authRouter.post("/signup", validateSchema(signupSchema), authController.signUp);

export default authRouter;
