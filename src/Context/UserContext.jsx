// UserContext.js
import React, { createContext, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    dateOfBirth: "",
    region: {
      city: "",
      country: "",
    },
    gender: "",
    password: "",
  });
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <UserContext.Provider
      value={{ userData, setUserData, loggedIn, setLoggedIn }}
    >
      {children}
    </UserContext.Provider>
  );
};
