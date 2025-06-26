import ModalContext, { type MessageType, messageObject } from "./DialogContext";
import React, { useState, type ReactNode } from "react";
import { DefaultOptions, useToast } from "../Toast/ToastContext";
const ModalProvider = ({ children }: { children: ReactNode; }) => {

  const toast = useToast();
  const ModalId = React.useRef(crypto.randomUUID()).current;
  const [dialog, setDialog] = React.useState<MessageType>({ heading: "", text: "" });
  const [inputValue, setInputValue] = useState<string>('');
  const [promptSetter, setPromptSetter] = useState<(str: string, previous?: string) => void>((_: string, __: string = "") => { })

  const setMessage = (message: MessageType) => {
    try {
      setDialog(messageObject.parse(message));
    } catch (e) {
      toast.open((e as Error).message, true, 1000, DefaultOptions.error);
    }
  };

  const getPrompt = (setPrompt: (str: string) => void, previous: string = "") => {
    setPromptSetter((__: (str: string, previous?: string) => void) => setPrompt)
    setInputValue(previous)
  };

  const show = () => {
    const modal = document.getElementById(ModalId) as HTMLDialogElement;
    (modal) ? modal.showModal() : toast.open("Modal not found", true, 1000, DefaultOptions.error);
  };

  const close = () => {
    const modal = document.getElementById(ModalId) as HTMLDialogElement;
    (modal) ? modal.close() : toast.open("Modal not found", true, 1000, DefaultOptions.error);
  }

  return (
    <ModalContext.Provider value={{ show, setMessage, getPrompt, close }}>
      {children}
      <dialog id={ModalId} className="modal">
        <div className="modal-box border-2 border-accent">
          <h3 className="font-bold text-lg">{dialog.heading}!</h3>
          {(dialog.text !== '') ? (<p className="py-4">{dialog.text}</p>) : (<></>)}
          <div className="modal-action">
            <form
              method="dialog"
              className="w-full grid grid-cols-1 gap-1"
              onSubmit={e => {
                e.preventDefault();
                promptSetter(inputValue);
                close();
              }}
            >
              <input className="input w-full focus:outline-0 focus:bg-base-200" type="text" value={inputValue} onInput={e => {
                setInputValue(e.currentTarget.value);
              }} />
              <button className="btn" type="submit">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </ModalContext.Provider>
  )
}
export default ModalProvider;

// ()
