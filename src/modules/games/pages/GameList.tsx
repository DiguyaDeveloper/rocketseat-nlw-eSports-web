import { useEffect, useState } from "react";
import { GameBanner } from "../components/GameBanner";
import { Game } from "../interfaces/game.interface";

export function GameList() {
  const [games, setGames] = useState<Game[]>([]);

  const getGames = (): void => {
    fetch("http://localhost:3333/games")
      .then((response) => response.json())
      .then((data: Game[]) => {
        setGames(data);
      });
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
