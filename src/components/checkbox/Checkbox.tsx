import * as Checkbox from "@radix-ui/react-checkbox";
import { Check } from "phosphor-react";
import { InputHTMLAttributes } from "react";

interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  title: string;
  onCheckedChange: (value: boolean) => void;
}

export function RadixCheckbox(props: CheckboxProps) {
  return (
    <label className="flex items-center gap-2 text-sm cursor-pointer">
      <Checkbox.Root
        onCheckedChange={props.onCheckedChange}
        className="w-6 h-6 p-1 rounded bg-zinc-900"
      >
        <Checkbox.Indicator>
          <Check className="w-4 h-4 text-emerald-400"></Check>
        </Checkbox.Indicator>
      </Checkbox.Root>
      {props.title}
    </label>
  );
}
