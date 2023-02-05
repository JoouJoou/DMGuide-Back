import { Request, Response } from "express";
import * as userService from "../services/userService";

export async function getUser(req: Request, res: Response) {
  const { userId } = res.locals.user;

  const user = await userService.getUser(userId);

  res.status(200).send(user);
}

export async function updateUserData(req: Request, res: Response) {
  const { userId } = res.locals.user;
  const updateData = req.body;

  const updatedUser = await userService.updateUserData(updateData, userId);

  res.status(200).send(updatedUser);
}
