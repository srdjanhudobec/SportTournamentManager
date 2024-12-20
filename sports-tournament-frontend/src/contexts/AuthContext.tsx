import { createContext, useContext, useState, ReactNode } from "react";
import { UserLogin } from "../interfaces/User";

interface AuthContextType {
  isAuthenticated: boolean;
  user: UserLogin | null;
  token: string | null;
  login: (user: UserLogin, token: string) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [user, setUser] = useState<UserLogin | null>(null);
  const [token, setToken] = useState<string | null>(null);

  const login = (user: UserLogin, token: string) => {
    setIsAuthenticated(true);
    setUser(user);
    setToken(token);
  };

  const logout = () => {
    setIsAuthenticated(false);
    setUser(null);
    setToken(null);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, user, token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
