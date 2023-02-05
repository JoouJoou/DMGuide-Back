import { Router } from "express";
import adventureRouter from "./adventureRouter";
import authRouter from "./authRouter";
import genreRouter from "./genresRouter";
import userRouter from "./userRouter";

const router = Router();

router.use(authRouter);
router.use(userRouter);
router.use(genreRouter);
router.use(adventureRouter);

export default router;
