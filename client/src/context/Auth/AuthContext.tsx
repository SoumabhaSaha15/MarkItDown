import { createContext, useContext } from "react";
import { z } from "zod";
export const UserDetailsSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  isEmailVerified: z.boolean(),
  profilePhoto: z.string().url(),
  isLoggedIn: z.boolean()
});
export type UserDetailsType = z.infer<typeof UserDetailsSchema>|null;
export const AuthContext = createContext < {
  login: (id: string,lambda:()=>void) => Promise<void>;
  logout: (id: string,lambda:()=>void) => Promise<void>;
  userDetails: UserDetailsType | null;
  userId:string|null;
  setUserId: (id: string|null) => void;
}> ({
  login: async (id: string,lambda:()=>void) => {
    console.log(`User with ID ${id} logged in`);
    lambda();
  },
  logout: async (id: string,lambda:()=>void) => {
    console.log(`User with ID ${id} logged out`);
    lambda();
  },
  userDetails: null,
  userId: null,
  setUserId: (id:null|string) => {
    console.log(`User ID set to ${id}`);
  }
});
export const useAuth = () => useContext(AuthContext);
