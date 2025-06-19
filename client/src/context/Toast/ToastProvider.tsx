
import { z } from 'zod';
import { ToastContext } from './ToastContext';
import { useState, type ReactNode } from 'react';
import issueFlattener from './../../utility/zod-error-flattener';
import logError from './../../utility/log-error';

const ToastOptionsValidator = z.strictObject({
  toastVariant: z.enum(['alert-info', 'alert-success', 'alert-warning', 'alert-error']),
  toastPosition: z.tuple([
    z.enum(['', 'toast-start', 'toast-end', 'toast-center']),
    z.enum(['', 'toast-top', 'toast-bottom', 'toast-middle'])
  ]).refine(
    v => (v[0] === "") ? (v[1] === v[0]) : true, {
    message: "Both toast position should be empty or defined."
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

  const open = (component: string, autoClose: boolean = true, timeout: number = 1000, toastOptions: ToastOptionsType = {
    toastPosition: ["", ""],
    toastVariant: "alert-info"
  }) => {
    const isValid = ToastOptionsValidator.safeParse(toastOptions);
    setToastOptions(prev => isValid.success ? isValid.data : (logError(issueFlattener(isValid.error)), prev));
    const id = crypto.randomUUID();
    setToasts((toasts) => [{ id, component }, ...toasts]);
    if (autoClose) setTimeout(() => close(id), timeout);
    return id;
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
