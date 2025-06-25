import ModalContext, { type MessageType, messageObject } from "./DialogContext";
import React, { type ReactNode } from "react";
// import {z} from 'zod';
const ModalProvider = ({ children }: { children: ReactNode; }) => {
  const [dialog, setDialog] = React.useState<MessageType>({
    heading: "", text: ""
  });
  const ModalId = crypto.randomUUID();
  return (
    <ModalContext.Provider value={{
      setMessage: (message: MessageType) => {
        messageObject.parse(message);

        console.log(message);
      },
      getPrompt: () => {
        return ''
      },
      show: () => { },
      close: () => { }
    }}>
      {children}
      <dialog id={ModalId} className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">{dialog.heading}!</h3>
          <p className="py-4">{dialog.text}</p>
          <div className="modal-action">
            {/* <form method="dialog">

              <button className="btn">Close</button>
            </form> */}
          </div>
        </div>
      </dialog>
    </ModalContext.Provider>
  )
}
export default ModalProvider;

// ()
