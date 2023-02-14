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

export async function getAdventure(req: Request, res: Response) {
  const { userId } = res.locals.user;

  const adventureId = Number(req.params.adventureId);

  const adventure = await adventureService.getAdventure(userId, adventureId);

  res.status(200).send(adventure);
}

export async function updateAdventure(req: Request, res: Response) {
  const { userId } = res.locals.user;

  const adventureId = Number(req.params.adventureId);

  const adventure = await adventureService.updateAdventure(
    req.body,
    userId,
    adventureId
  );

  res.status(200).send(adventure);
}

export async function deleteAdventure(req: Request, res: Response) {
  const { userId } = res.locals.user;
  const adventureId = Number(req.params.adventureId);

  const deletedAdventure = await adventureService.deleteAdventure(
    userId,
    adventureId
  );

  res.status(200).send(deletedAdventure);
}
