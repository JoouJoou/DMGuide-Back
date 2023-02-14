import { Request, Response } from "express";

export async function createLocation(req: Request, res: Response) {
  const { userId } = res.locals.user;
}
