import { type Context, createContext, useContext } from "react";
import { z } from 'zod';
export const messageObject = z.strictObject({
  heading: z.string(),
  text: z.string()
});
export type MessageType = z.infer<typeof messageObject>;
export type ModalContextProps = {
  show: () => void;
  setMessage: (msg: MessageType) => void;
  getPrompt: () => string;
  close: () => void;
}
const ModalContext: Context<ModalContextProps> = createContext<ModalContextProps>({
  show: () => { },
  setMessage: (msg: MessageType) => { console.log(msg); },
  getPrompt: () => '',
  close: () => { }
});

export default ModalContext;
export const useModal = () => useContext(ModalContext)
