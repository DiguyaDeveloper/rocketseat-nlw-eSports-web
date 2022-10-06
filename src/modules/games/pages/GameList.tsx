import { useEffect, useState } from "react";
import { GameBanner } from "../components/GameBanner";
import { Game } from "../interfaces/game.interface";
import GamesService from "../services/Games.service";

export function GameList() {
  const [games, setGames] = useState<Game[]>([]);

  const getGames = (): void => {
    GamesService.getGames().then((games: Game[]) => setGames(games));
  };

  useEffect(getGames, []);

  return (
    <div className="grid grid-cols-6 gap-6 mt-16">
      {games &&
        games.map((game: Game) => {
          return (
            <GameBanner
              key={game.id}
              bannerUrl={game.bannerUrl}
              title={game.title}
              adsCount={game._count.Ads}
            />
          );
        })}
    </div>
  );
}
