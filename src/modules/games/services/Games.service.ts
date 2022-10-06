import axios, { AxiosResponse } from "axios";
import { Game } from "../interfaces/game.interface";

const getGames = (): Promise<Game[]> => {
  return axios("http://localhost:3333/games").then(
    (response: AxiosResponse<Game[]>) => response.data
  );
};

export default { getGames };
