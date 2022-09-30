import { MagnifyingGlassPlus } from "phosphor-react";

interface BannerProps {
  title: string;
  subtitle: string;
  button: {
    label: string;
    callback: any;
  };
}
export function Banner(props: BannerProps) {
  return (
    <div className="pt-1 bg-nlw-gradient self-stretch rounded-lg  mt-8 overflow-hidden">
      <div className="bg-[#2a2634] px-8 py-6 flex justify-between items-center">
        <div>
          <strong className="text-2xl text-white font-black block">
            {props.title}
          </strong>
          <span className="text-zinc-400 block">{props.subtitle}</span>
        </div>

        <button
          className="py-3 px-4 bg-violet-500 hover:bg-violet-600 text-white rounded"
          onClick={props.button.callback}
        >
          <MagnifyingGlassPlus size={24} /> {props.button.label}
        </button>
      </div>
    </div>
  );
}
