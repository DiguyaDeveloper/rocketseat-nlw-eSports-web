import axios, { AxiosResponse } from "axios";
import { Game } from "../../games/interfaces/game.interface";
import { CreateGameAds } from "../interface/create-game-ads.interface";

const createGameAds = (id: string, body: CreateGameAds): Promise<Game[]> => {
  return axios
    .post(`http://localhost:3333/games/${id}/ads`, body)
    .then((response: AxiosResponse<Game[]>) => response.data);
};

export default { createGameAds };
