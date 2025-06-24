import { AuthContext, UserDetailsSchema, type UserDetailsType } from "./AuthContext";
import { useState } from "react";
import { useToast, DefaultOptions } from "../Toast/ToastContext";
import { z } from "zod";
export default function AuthProvider({ children }: { children: React.ReactNode }) {
  const [userDetails, setUserDetails] = useState<UserDetailsType>(null);
  const toast = useToast();

  const login = async (onSuccess: () => void = () => { }, onError: () => void = () => { }) => {
    try {
      const response = await fetch(import.meta.env.VITE_USER_PROFILE);
      if (response.status != 200) throw new Error(`error in fetching profile status message:${response.statusText}`);
      const parsedData = UserDetailsSchema.parse(await response.json());
      // toast.open(`Wellcome ${parsedData.name}. You have successfully logged in`, true, 5000);
      setUserDetails(parsedData);
      setTimeout(onSuccess, 1000);
    } catch (err) {
      toast.open('Error logging in!!', true, 2000, DefaultOptions.error);
      console.error(err);
      setTimeout(onError, 1000);
    }
  };

  const logout = async (onSuccess: () => void = () => { }, onError: () => void = () => { }) => {
    try {
      if (userDetails == null) throw new Error(`No user logged in!!!`);
      const response = await fetch(import.meta.env.VITE_GOOGLE_LOGOUT);
      if (response.status != 200) throw new Error(`Error in logging out status message:${response.statusText}`);
      const value = z.object({ message: z.string() }).parse(await response.json());
      toast.open(value.message);
      setUserDetails(null);
      setTimeout(onSuccess, 1000);
    } catch (err) {
      toast.open('Error logging out: ' + (err as Error).message, true, 2000, DefaultOptions.error);
      console.error(err);
      setTimeout(onError, 1000);
    }
  };

  return (
    <AuthContext.Provider value={{ login, logout, userDetails }}>
      {children}
    </AuthContext.Provider>
  );
}
