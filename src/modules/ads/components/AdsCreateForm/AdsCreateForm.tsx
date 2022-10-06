import * as Dialog from "@radix-ui/react-dialog";
import * as ToggleGroup from "@radix-ui/react-toggle-group";
import { GameController } from "phosphor-react";
import { Input } from "../../../../components/Input/Input";
import { RadixSelect } from "../../../../components/select/Select";
import { useEffect, useState } from "react";
import { Game } from "../../../games/interfaces/game.interface";
import { RadixMultipleToggleGroup } from "../../../../components/multiple-toggle-group/MultipleToggleGroup";
import { weekDaysConstant } from "../../../../shared/constants/week-days.constant";
import { RadixCheckbox } from "../../../../components/checkbox/Checkbox";

export function AdsCreateForm() {
  const [selectedGame, setSelectedGame] = useState<string>();
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
    <form className="mt-8 flex flex-col gap-4">
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
        <Input id="name" placeholder="Como te chamam dentro do game?" />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="flex flex-col gap-2">
          <label htmlFor="yearsPlaying">Joga há quantos anos?</label>
          <Input id="yearsPlaying" placeholder="Tudo bem ser ZERO" />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="discord">Qual seu discord?</label>
          <Input id="discord" placeholder="Usuario#0000" />
        </div>
      </div>

      <div className="flex gap-6">
        <div className="flex flex-col gap-2">
          <label htmlFor="weekDays">Quando costuma jogar?</label>

          <RadixMultipleToggleGroup
            id="weekDays"
            onValueChange={() => {}}
            items={weekDaysConstant.map(({ title, label, value }) => {
              return { title, value, label };
            })}
          />
          <ToggleGroup.Root
            type="multiple"
            className="grid grid-cols-2 gap-2"
          ></ToggleGroup.Root>
        </div>
        <div className="flex flex-col gap-2 flex-1">
          <label htmlFor="weekDays">Qual horário do dia?</label>
          <div className="grid grid-cols-2 gap-2">
            <Input id="hourStart" type="time" placeholder="De" />
            <Input id="hourEnd" type="time" placeholder="Até" />
          </div>
        </div>
      </div>

      <RadixCheckbox
        className="mt-2"
        title="Costumo me conectar ao chat de voz"
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
