import { useState } from "react";
import * as ToggleGroup from "@radix-ui/react-toggle-group";

interface ToggleGroupProps {
  items: { value: string; title: string; label: string }[];
  onValueChange: (value: string[]) => void;
}

export function RadixMultipleToggleGroup({
  onValueChange,
  items,
  ...props
}: ToggleGroupProps) {
  const [values, setValues] = useState<string[]>();
  return (
    <ToggleGroup.Root
      type="multiple"
      className="grid grid-cols-2 gap-2"
      onValueChange={(items) => {
        setValues(items);
        onValueChange(items);
      }}
    >
      {items.map((item, index) => {
        return (
          <ToggleGroup.Item
            key={index}
            value={item.value}
            title={item.title}
            className="w-8 h-8 rounded bg-zinc-900"
          >
            {item.label}
          </ToggleGroup.Item>
        );
      })}
    </ToggleGroup.Root>
  );
}
