import { createContext, useContext } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

  const login = (email, password) => {

    console.log("Logged in:", email);

    localStorage.setItem(
      "token",
      "dummyToken"
    );

  };

  const logout = () => {

    localStorage.removeItem("token");

  };

  return (

    <AuthContext.Provider
      value={{
        login,
        logout
      }}
    >

      {children}

    </AuthContext.Provider>

  );

};

export const useAuth = () => useContext(AuthContext);