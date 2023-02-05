import { Router } from "express";
import { validateSchema } from "../middlewares/validations/schemaValidator";
import { validateToken } from "../middlewares/validations/tokenValidator";
import { updateUserSchema } from "../schemas/userSchema";
import * as genreController from "../controllers/genresController";

const genreRouter = Router();

genreRouter.get("/genres", genreController.getGenres);

export default genreRouter;
