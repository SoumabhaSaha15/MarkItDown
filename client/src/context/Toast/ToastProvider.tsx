import { useState, type ReactNode } from 'react';
import { ToastContext } from './ToastContext';
import { z } from 'zod';
import issueFlattener from './../../utility/zod-error-flattener';
const ToastOptionsValidator = z.strictObject({
  toastVariant: z.enum(['alert-info', 'alert-success', 'alert-warning', 'alert-error']),
  toastPosition: z.array(z.enum(['', 'toast-start', 'toast-end', 'toast-center', 'toast-top', 'toast-bottom', 'toast-middle'])).length(2).refine((v) => {
    if (v[0] === "" && v[1] === "") return true;
    else if (
      (['toast-start', 'toast-end', 'toast-center'].includes(v[0]) && ['toast-top', 'toast-bottom', 'toast-middle'].includes(v[1])) ||
      (['toast-top', 'toast-bottom', 'toast-middle'].includes(v[0]) && ['toast-start', 'toast-end', 'toast-center'].includes(v[1]))
    ) return true;
    else return false;
  })
});
export type ToastOptionsType = z.infer<typeof ToastOptionsValidator>;
export default function ToastProvider({ children }: { children: ReactNode; }) {
  const [toasts, setToasts] = useState<{ component: string; id: string }[]>([]);
  const [toastOptions, setToastOptions] = useState<ToastOptionsType>({
    toastPosition: ["", ""],
    toastVariant: "alert-info",
  });
  const close = (id: string) => setToasts((toasts) => toasts.filter((toast) => toast.id !== id));
  const open = (component: string, timeout = 100, toastOptions: ToastOptionsType = { toastPosition: ["", ""], toastVariant: "alert-info" }) => {
    const isValid = ToastOptionsValidator.safeParse(toastOptions);
    setToastOptions((prev) => {
      if (isValid.success) return toastOptions;
      else {
        console.log(issueFlattener(isValid.error),toastOptions);
        return prev;
      }
    });
    const id = crypto.randomUUID();
    setToasts((toasts) => [...toasts, { id, component }]);
    setTimeout(() => close(id), timeout);
  };
  return (
    <ToastContext.Provider value={{ open, close }}>
      {children}
      <div
        className={"toast" + ((toastOptions.toastPosition[0] == "") ? "" : (" " + toastOptions.toastPosition.join(" ")))}
        >
        {toasts.map(({ id, component }) => (
          <div id={id} key={id} className={"alert " + toastOptions.toastVariant} >
            {component}
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  );
}
