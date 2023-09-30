import React, { useState, useEffect, useReducer, useContext } from "react";
import reducer from "./reducer";
import { CHANGE_LANGUAGE, SET_DARK_THEME } from "./actions";
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
  const setDarkTheme = () => {
    console.log(state.darkTheme);
    dispatch({ type: SET_DARK_THEME });
  };
  useEffect(() => {
    document.body.className = `${state.darkTheme ? "dark" : "light"}`;
  }, [state.darkTheme]);
  return (
    <AppContext.Provider value={{ ...state, switchLang, setDarkTheme }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
