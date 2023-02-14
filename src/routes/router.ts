import { Router } from "express";
import adventureRouter from "./adventureRouter";
import authRouter from "./authRouter";
import charactersRouter from "./characterRouter";
import genreRouter from "./genresRouter";
import locationRouter from "./locationRouter";
import userRouter from "./userRouter";

const router = Router();

router.use(authRouter);
router.use(userRouter);
router.use(genreRouter);
router.use(adventureRouter);
router.use(charactersRouter);
router.use(locationRouter);

export default router;
