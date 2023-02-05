import { Router } from "express";
import { validateSchema } from "../middlewares/validations/schemaValidator";
import { validateToken } from "../middlewares/validations/tokenValidator";
import { updateUserSchema } from "../schemas/userSchema";
import * as userController from "../controllers/userController";

const userRouter = Router();

userRouter.put(
  "/user/update",
  validateToken,
  validateSchema(updateUserSchema),
  userController.updateUserData
);
userRouter.get("/user", validateToken, userController.getUser);

export default userRouter;
