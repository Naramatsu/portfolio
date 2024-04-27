"use client";
import React, { useReducer } from "react";
import AppReducer from "./reducer";
import { AppContext } from ".";
import { DARK, ENGLISH } from "@/utils/constants";
import { SET_LANGUAJE, SET_THEME } from "./types";

const AppState = ({ children }) => {
  const initialState = {
    languaje: ENGLISH,
    theme: DARK,
  };
  const [globalState, dispatch] = useReducer(AppReducer, initialState);

  const setLanguaje = (languaje) => {
    dispatch({
      type: SET_LANGUAJE,
      payload: languaje,
    });
  };

  const setTheme = (theme) => {
    dispatch({
      type: SET_THEME,
      payload: theme,
    });
  };

  const combinedFuntions = {
    setLanguaje,
    setTheme,
  };

  return (
    <AppContext.Provider value={{ ...globalState, ...combinedFuntions }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppState;
