import { createContext, useContext, type Context } from "react";
import { type ToastOptionsType } from './ToastProvider';
type ToastContextType = {
  /**
   * @param component string message to be displayed in the toast
   * @param autoClose? boolean if true, the toast will close automatically after the timeout
   * @param timeout? number the time in ms after which the toast will close default is 1000ms
   * @param toastOptions ToastOptionsType the options for the toast customization
   * @returns string
   */
  open: (component: string, autoClose?: boolean, timeout?: number, toastOptions?: ToastOptionsType) => string;
  close: (id: string) => void;
};
export const ToastContext: Context<ToastContextType> = createContext<ToastContextType>({
  open: (component: string, autoClose: boolean = true, timeout: number = 1000, toastOptions: ToastOptionsType = {
    toastPosition: ["", ""],
    toastVariant: "alert-info"
  }) => {
    console.log(component, timeout, toastOptions, autoClose);
    return '';
  },
  close: (id: string) => { console.log(id); },
});
export const useToast = () => useContext(ToastContext);
