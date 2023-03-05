import React, { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  return (
    <AuthContext.Provider
      value={{ emailError, setEmailError, passwordError, setPasswordError }}
    >
      {children}
    </AuthContext.Provider>
  );
};
