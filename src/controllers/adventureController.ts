import { Request, Response } from "express";
import * as adventureService from "../services/adventureService";

export async function createAdventure(req: Request, res: Response) {
  const { userId } = res.locals.user;

  const adventure = await adventureService.createAdventure(req.body, userId);

  res.status(200).send(adventure);
}

export async function getUserAdventures(req: Request, res: Response) {
  const { userId } = res.locals.user;

  const adventures = await adventureService.getAdventures(userId);

  res.status(200).send(adventures);
}
