import React from "react";

export const themes = {
  red: {
    name: "red",
    menubarred: "menubarred",
    menubarblue: "menubarblue",
    menu: "red",
    row: "red"
  },
  blue: {
    name: "blue",
    menubarblue: "menubarblue",
    menu: "blue",
    row: "blue"
  },
  yellow: {
    name: "yellow"
  },
  purple: {
    name: "purple"
  },
  black: {
    name: "black"
  },
  maroon: {
    name: "maroon"
  },
  green: {
    name: "green"
  }
};
export const ThemeContext = React.createContext(themes.red);
