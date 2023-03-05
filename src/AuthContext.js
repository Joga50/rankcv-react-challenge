import React, { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [emailErrorLogin, setEmailErrorLogin] = useState("");
  const [passwordErrorLogin, setPasswordErrorLogin] = useState("");
  const [emailErrorRegister, setEmailErrorRegister] = useState("");
  const [passwordErrorRegister, setPasswordErrorRegister] = useState("");
  return (
    <AuthContext.Provider
      value={{
        passwordErrorRegister,
        setPasswordErrorRegister,
        emailErrorRegister,
        setEmailErrorRegister,
        emailErrorLogin,
        setEmailErrorLogin,
        passwordErrorLogin,
        setPasswordErrorLogin,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
