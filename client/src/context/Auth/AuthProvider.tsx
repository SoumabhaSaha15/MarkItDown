import { AuthContext, UserDetailsSchema, type UserDetailsType } from "./AuthContext";
import { useState } from "react";
import { useToast } from "../Toast/ToastContext";
import { z } from "zod";
export default function AuthProvider({ children }: { children: React.ReactNode }) {
  const [userDetails, setUserDetails] = useState<UserDetailsType>(null);
  const [userId, setUserId] = useState<string | null>(null);
  const toast = useToast();

  const login = (id: string) => {
    fetch(`/api/auth/user-profile?_id=${id}`)
      .then((response) => {
        if (response.status != 200)
          toast.open(
            'Error fetching user profile', true, 2000, {
            toastVariant: "alert-error",
            toastPosition: ['toast-end', 'toast-bottom']
          }
          );
        return response.json();
      })
      .then(data => {
        const parsedData = UserDetailsSchema.safeParse(data);
        if (!parsedData.success) {
          toast.open(
            'Invalid user data received', true, 2000, {
            toastVariant: "alert-error",
            toastPosition: ['toast-end', 'toast-bottom']
          });
          return;
        }
        toast.open('userId:' + id + ' logged in', true, 5000);
        setUserId(id);
        setUserDetails(parsedData.data);
      });
  };

  const logout = (id: string, lambda: () => void) => {
    if (userDetails != null) {
      fetch(`/api/auth/google-logout?_id=${id}`)
        .then((response) => {
          if (response.status != 200) {
            toast.open(response.statusText, true, 2000, { toastVariant: "alert-error", toastPosition: ['toast-end', 'toast-bottom'] });
            return;
          }
          setUserId(null);
          setUserDetails(null);
          return response.json()
        })
        .then(data => {
          const v = z.object({ message: z.string() }).safeParse(data);
          toast.open(v.data?.message || '');
        })
        .catch(console.log).finally(lambda);
    }
  };

  return (
    <AuthContext.Provider value={{ login, logout, userDetails, userId, setUserId }}>
      {children}
    </AuthContext.Provider>
  );
}
