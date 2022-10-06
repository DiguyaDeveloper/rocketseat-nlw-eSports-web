import { SelectHTMLAttributes, useState } from "react";
import * as Select from "@radix-ui/react-select";
import { ShieldChevron, Check } from "phosphor-react";

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  items: { value: string; label: string }[];
  onValueChange: (value: string) => void;
}

export function RadixSelect({ onValueChange, items, ...props }: SelectProps) {
  const [value, setValue] = useState<string>();
  return (
    <Select.Root
      onValueChange={(value) => {
        setValue(value);
        onValueChange(value);
      }}
    >
      <Select.Trigger asChild aria-label={props["aria-label"]} className="">
        <button
          className={`bg-zinc-900 py-3 px-4 rounded text-sm ${
            !value && "text-zinc-500"
          } flex flex-row items-center justify-between`}
        >
          <Select.Value placeholder={props.placeholder} />
          <Select.Icon className="ml-2">
            <ShieldChevron />
          </Select.Icon>
        </button>
      </Select.Trigger>

      <Select.Portal>
        <Select.Content className="bg-zinc-900 py-3 px-4 rounded text-sm placeholder:text-zinc-500">
          <Select.ScrollUpButton className="flex items-center justify-center text-gray-700 dark:text-gray-300">
            <ShieldChevron />
          </Select.ScrollUpButton>
          <Select.Viewport>
            <Select.Group>
              {items.map((item, index) => {
                return (
                  <Select.Item
                    value={item.value}
                    key={index}
                    className="relative flex items-center px-8 py-2 rounded-md text-sm text-gray-700 dark:text-gray-300 font-medium focus:bg-gray-100 dark:focus:bg-gray-900 radix-disabled:opacity-50 focus:outline-none select-none"
                  >
                    <Select.ItemText> {item.label}</Select.ItemText>
                    <Select.ItemIndicator className="absolute left-2 inline-flex items-center">
                      <Check />
                    </Select.ItemIndicator>
                  </Select.Item>
                );
              })}
            </Select.Group>
          </Select.Viewport>
          <Select.ScrollDownButton className="flex items-center justify-center text-gray-700 dark:text-gray-300">
            <ShieldChevron />
          </Select.ScrollDownButton>
        </Select.Content>
      </Select.Portal>
    </Select.Root>
  );
}
