import { useEffect } from "react";
import { GameBanner } from "../components/GameBanner";

export function GameList() {
  useEffect(() => {}, []);

  return (
    <div className="grid grid-cols-6 gap-6 mt-16">
      <GameBanner
        key={1}
        bannerUrl={"/game-1.png"}
        title={"League of legends"}
        adsCount={5}
      />
    </div>
  );
}
