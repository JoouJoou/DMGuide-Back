import { Request, Response } from "express";
import * as genreService from "../services/genreService";

export async function getGenres(req: Request, res: Response) {
  const genres = await genreService.getGenres();

  res.status(200).send(genres);
}
