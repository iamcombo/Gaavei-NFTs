import { useRouter } from "next/router";
import { createContext, useContext, useEffect, useState } from "react";
import type { ReactNode } from "react";

interface IUser {
  email: string;
  email_verified: boolean;
  given_name: string;
  name: string;
  locale: string;
  picture: string;
}

interface IAuth {
  user: IUser | null;
  logout: () => void;
  saveProfile: (v: IUser) => void;
}

const AuthContext = createContext<IAuth | null>(null);
function AuthProvider({ children }: { children: ReactNode }) {
  const { push } = useRouter();
  const [user, setUser] = useState<IUser | null>(null);

  useEffect(() => {
    const loadSaved = () => {
      const userInfo = localStorage.getItem('userInfo');
      if (!userInfo) return;
      setUser(JSON.parse(userInfo));
    };
    loadSaved();
  }, []);

  const saveProfile = (_user: IUser) => {
    localStorage.setItem('userInfo', JSON.stringify(_user));
    setUser(_user);
  };

  const logout = () => {
    localStorage.setItem('userInfo', '');
    setUser(null);
    push('/signIn');
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        logout,
        saveProfile
      }}
    >{children}</AuthContext.Provider>
  );
}

export default AuthProvider;

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth must be used within a AuthProvider');

  const { user, saveProfile, logout } = context;
  return { user, saveProfile, logout };
};