import { Request, Response } from "express";
import * as authService from "../services/authService";

export async function signUp(req: Request, res: Response) {
  const userData = req.body;
  const createdUser = await authService.signUp(userData);
  res.status(200).send(createdUser);
}
