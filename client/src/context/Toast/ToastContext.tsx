import { createContext, useContext, type Context } from "react";
import {type ToastOptionsType} from './ToastProvider';
type ToastContextType = {
  open: (component: string, timeout: number, toastOptions?: ToastOptionsType) => void;
  close: (id: string) => void;
};
export const ToastContext: Context<ToastContextType> = createContext<ToastContextType>({
  open: (component: string, timeout: number, toastOptions:ToastOptionsType = {toastPosition:["",""],toastVariant:"alert-info"}) => { console.log(component, timeout, toastOptions); },
  close: (id: string) => { console.log(id); },
});
export const useToast = () => useContext(ToastContext);
