export type AuthStatus = "loading" | "authenticated" | "unauthenticated";

export interface User {
  id: string;
  email: string;
}

export interface AuthContextType {
  status: AuthStatus;
  user: User | null;
  login(email: string, password: string): Promise<void>;
  register(email: string, password: string): Promise<void>;
  logout(): Promise<void>;
}
