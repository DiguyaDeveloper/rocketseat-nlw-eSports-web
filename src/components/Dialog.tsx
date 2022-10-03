import * as Dialog from "@radix-ui/react-dialog";

interface RadixDialogProps {
  children: React.ReactNode;
  title: string;
}

export function RadixDialog(props: RadixDialogProps) {
  return (
    <Dialog.Portal>
      <Dialog.Overlay className={"bg-black/60 inset-0 fixed"}></Dialog.Overlay>
      <Dialog.Content className="fixed bg-[#2A2634] py-8 px-10 text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg w-[480px] shadow-lg shadow-black/25">
        <Dialog.Title className="text-3xl font-black">
          {props.title}
        </Dialog.Title>
        {props.children}
      </Dialog.Content>
    </Dialog.Portal>
  );
}
