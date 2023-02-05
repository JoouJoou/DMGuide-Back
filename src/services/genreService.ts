import * as genreRepository from "../repositories/genresRepository";

export async function getGenres() {
  return await genreRepository.findGenres();
}
