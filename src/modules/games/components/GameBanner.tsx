import { GameBannerProps } from "../interfaces/game-banner.interface";

export function GameBanner(props: GameBannerProps) {
  const getAdsCount = (adsCount: number) => {
    if (!adsCount) {
      throw new Error("Invalid amount ads");
    }
    if (adsCount > 1) {
      return `${adsCount} anúncios`;
    }
    if (adsCount === 1) {
      return `${adsCount} anúncio`;
    }
  };

  return (
    <a href="" className="relative rounded-lg overflow-hidden">
      <img src={props.bannerUrl} alt="" />

      <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0">
        <strong className="font-bold text-white block">{props.title}</strong>
        <span className="text-zinc-300 text-sm block">
          {getAdsCount(props.adsCount)}
        </span>
      </div>
    </a>
  );
}
