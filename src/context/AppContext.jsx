import React, { useState, useEffect, useReducer, useContext } from "react";
import reducer from "./reducer";
import { CHANGE_LANGUAGE } from "./actions";
const initialState = {
  darkTheme: true,
  language: "english",
};
const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const switchLang = () => {
    console.log("language change");
    dispatch({ type: CHANGE_LANGUAGE });
  };
  const setDarkTheme = () => {};
  return (
    <AppContext.Provider value={{ ...state, switchLang }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
