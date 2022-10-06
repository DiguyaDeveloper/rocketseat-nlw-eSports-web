import * as Dialog from "@radix-ui/react-dialog";
import { GameController } from "phosphor-react";
import { Input } from "../../../../components/Input/Input";
import { RadixSelect } from "../../../../components/select/Select";
import { FormEvent, useEffect, useState } from "react";
import { Game } from "../../../games/interfaces/game.interface";
import { RadixMultipleToggleGroup } from "../../../../components/multiple-toggle-group/MultipleToggleGroup";
import { weekDaysConstant } from "../../../../shared/constants/week-days.constant";
import { RadixCheckbox } from "../../../../components/checkbox/Checkbox";
import GamesService from "../../../games/services/Games.service";
import { CreateGameAds } from "../../interface/create-game-ads.interface";
import AdsService from "../../services/Ads.service";

export function AdsCreateForm() {
  const [games, setGames] = useState<Game[]>([]);
  const [selectedGame, setSelectedGame] = useState<string>("");
  const [weekDays, setWeekDays] = useState<string[]>([]);
  const [useVoiceChannel, setUseVoiceChannel] = useState<boolean>(false);

  useEffect(() => {
    GamesService.getGames().then((games: Game[]) => setGames(games));
  }, []);

  const handleCreateAds = (event: FormEvent) => {
    event.preventDefault();

    const formData = new FormData(event.target as HTMLFormElement);
    const data = Object.fromEntries(formData);

    createGameAds({
      name: String(data.name),
      yearPlaying: Number(data.yearsPlaying),
      discord: String(data.discord),
      weekDays: weekDays.map(Number),
      hourStart: String(data.hourStart),
      hourEnd: String(data.hourEnd),
      useVoiceChannel: useVoiceChannel,
    });
  };

  const createGameAds = (body: CreateGameAds) => {
    AdsService.createGameAds(selectedGame, body)
      .then(() => {
        alert("Sucesso ao criar anúncio");
      })
      .catch((err) => {
        alert("Erro ao criar anúncio");
      });
  };

  return (
    <form onSubmit={handleCreateAds} className="mt-8 flex flex-col gap-4">
      <div className="flex flex-col gap-2">
        <label htmlFor="game" className="font-semibold">
          Qual o game?
        </label>
        <RadixSelect
          id="game"
          placeholder="Selecione o game que deseja jogar"
          aria-label="games"
          onValueChange={setSelectedGame}
          items={games.map((game) => {
            return {
              label: game.title,
              value: game.id,
            };
          })}
        ></RadixSelect>
      </div>

      <div>
        <label htmlFor="name">Seu nome (ou nickname)</label>
        <Input
          id="name"
          name="name"
          placeholder="Como te chamam dentro do game?"
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="flex flex-col gap-2">
          <label htmlFor="yearsPlaying">Joga há quantos anos?</label>
          <Input
            id="yearsPlaying"
            name="yearsPlaying"
            placeholder="Tudo bem ser ZERO"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="discord">Qual seu discord?</label>
          <Input id="discord" name="discord" placeholder="Usuario#0000" />
        </div>
      </div>

      <div className="flex gap-6">
        <div className="flex flex-col gap-2">
          <label htmlFor="weekDays">Quando costuma jogar?</label>

          <RadixMultipleToggleGroup
            id="weekDays"
            name="weekDays"
            onValueChange={(weekDays: string[]) => setWeekDays(weekDays)}
            items={weekDaysConstant.map(({ title, label, value }) => {
              return { title, value, label };
            })}
          />
        </div>
        <div className="flex flex-col gap-2 flex-1">
          <label htmlFor="weekDays">Qual horário do dia?</label>
          <div className="grid grid-cols-2 gap-2">
            <Input
              id="hourStart"
              name="hourStart"
              type="time"
              placeholder="De"
            />
            <Input id="hourEnd" name="hourEnd" type="time" placeholder="Até" />
          </div>
        </div>
      </div>

      <RadixCheckbox
        className="mt-2"
        title="Costumo me conectar ao chat de voz"
        onCheckedChange={(checked) => setUseVoiceChannel(checked === true)}
      />

      <footer className="mt-4 flex justify-end gap-4">
        <Dialog.Close
          type="button"
          className="bg-zinc-500 px-5 h-12 rounded-md font-semibold hover:bg-zinc-600"
        >
          Cancelar
        </Dialog.Close>
        <button
          className="bg-violet-500 px-5 h-12 rounded-md font-semibold flex items-center gap-3 hover:bg-violet-600"
          type="submit"
        >
          <GameController className="w-6 h-6" />
          Encontrar duo
        </button>
      </footer>
    </form>
  );
}
