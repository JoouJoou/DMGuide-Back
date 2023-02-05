import { Router } from "express";
import * as authController from "../controllers/authController";
import { validateSchema } from "../middlewares/validations/schemaValidator";
import { signinSchema, signupSchema } from "../schemas/authSchema";

const authRouter = Router();

authRouter.post("/signup", validateSchema(signupSchema), authController.signUp);
authRouter.post("/signin", validateSchema(signinSchema), authController.signIn);

export default authRouter;
