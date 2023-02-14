import { Request, Response } from "express";
import * as characterService from "../services/characterService";

export async function createCharacter(req: Request, res: Response) {
  const { userId } = res.locals.user;

  const character = await characterService.createCharacter(userId, req.body);

  res.status(200).send(character);
}

export async function getCharacter(req: Request, res: Response) {
  const { userId } = res.locals.user;
  const adventureId = Number(req.params.adventureId);
  const characterId = Number(req.params.characterId);

  const character = await characterService.getCharacter(
    userId,
    adventureId,
    characterId
  );

  res.status(200).send(character);
}

export async function deleteCharacter(req: Request, res: Response) {
  const { userId } = res.locals.user;
  const characterId = Number(req.params.characterId);

  const deletedCharacter = await characterService.deleteCharacter(
    userId,
    characterId
  );

  res.status(200).send(deletedCharacter);
}

export async function updateCharacter(req: Request, res: Response) {
  const { userId } = res.locals.user;
  const characterId = Number(req.params.characterId);

  const updatedCharacter = await characterService.updateCharacter(
    userId,
    characterId,
    req.body
  );

  res.status(200).send(updatedCharacter);
}
