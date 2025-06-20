import { AuthContext, UserDetailsSchema, type UserDetailsType } from "./AuthContext";
import { useState } from "react";
import { useToast, DefaultOptions } from "../Toast/ToastContext";
import { z } from "zod";
export default function AuthProvider({ children }: { children: React.ReactNode }) {
  const [userDetails, setUserDetails] = useState<UserDetailsType>(null);
  const [userId, setUserId] = useState<string | null>(null);
  const toast = useToast();
  // console.log(import.meta.env.VITE_USER_PROFILE);
  const login = async (id: string) => {
    const QS = new URL(import.meta.env.VITE_USER_PROFILE);
    QS.searchParams.set('_id', id);
    const response = await fetch(QS.toString())
    if (response.status != 200) toast.open('Error fetching user profile', true, 2000, DefaultOptions.error);
    else {
      const parsedData = UserDetailsSchema.safeParse(await response.json());
      if (!parsedData.success) toast.open('Invalid user data received', true, 2000, DefaultOptions.error);
      else {
        toast.open('userId:' + id + ' logged in', true, 5000);
        setUserId(id);
        setUserDetails(parsedData.data);
      }
    }
  };

  const logout = async (id: string, lambda: () => void) => {
    try {
      if (userDetails != null) {
        const QS = new URL(import.meta.env.VITE_GOOGLE_LOGOUT);
        QS.searchParams.set('_id', id);
        const response = await fetch(QS.toString());
        if (response.status != 200) toast.open(response.statusText, true, 2000, DefaultOptions.error);
        else {
          const value = z.object({ message: z.string() }).safeParse(await response.json());
          toast.open(value.data?.message || '');
          setUserId(null);
          setUserDetails(null);
        }
      } else toast.open('No user is logged in', true, 2000, DefaultOptions.error);
    } catch (e) {
      toast.open('Error logging out: ' + e, true, 2000, DefaultOptions.error);
      console.error(e);
    } finally {
      setTimeout(lambda, 1000);
    }
  };

  return (
    <AuthContext.Provider value={{ login, logout, userDetails, userId, setUserId }}>
      {children}
    </AuthContext.Provider>
  );
}
