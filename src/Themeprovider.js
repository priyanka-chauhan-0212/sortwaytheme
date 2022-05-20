import { useState } from "react";
import { ThemeContext, themes } from "./theme-context";

const Themeprovider = ({ children }) => {
  const [theme, setTheme] = useState(themes.red);

  function changeTheme(selected) {
    setTheme(selected);
  }
  return (
    <>
      <ThemeContext.Provider value={{ theme, changeTheme }}>
        {children}
      </ThemeContext.Provider>
    </>
  );
};

export default Themeprovider;
