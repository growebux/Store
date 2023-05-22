import React from "react";
import store from "./store";
import { Provider } from "react-redux";

interface AuthProviderProps {
  children: React.ReactNode;
}

const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};

export default AuthProvider;
