import React, { createContext, useContext, useEffect, useState } from "react";
import { mockLogin, mockRegister } from "./auth.mock";
import { getToken, removeToken, saveToken } from "./auth.storage";
import { AuthContextType, AuthStatus, User } from "./auth.types";

const AuthContext = createContext<AuthContextType | null>(null);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [status, setStatus] = useState<AuthStatus>("loading");
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    restoreSession();
  }, []);

  async function restoreSession() {
    const token = await getToken();

    if (!token) {
      setStatus("unauthenticated");
      return;
    }

    // In real world: fetch /me
    setUser({ id: "1", email: "restored@example.com" });
    setStatus("authenticated");
  }

  async function login(email: string, password: string) {
    const response = await mockLogin(email, password);
    await saveToken(response.access);
    setUser(response.user);
    setStatus("authenticated");
  }

  async function register(email: string, password: string) {
    const response = await mockRegister(email, password);
    await saveToken(response.access);
    setUser(response.user);
    setStatus("authenticated");
  }

  async function logout() {
    await removeToken();
    setUser(null);
    setStatus("unauthenticated");
  }

  return (
    <AuthContext.Provider value={{ status, user, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be inside AuthProvider");
  return ctx;
}
