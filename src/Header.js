import React, { useContext } from "react";
import "./Header.css";

import { ThemeContext } from "./theme-context";

export default function Header() {
  const themeContext = useContext(ThemeContext);
  return (
    <div className="section">
      <div className={`row ${themeContext.theme.menubarred}`}>
        <ul className={themeContext.theme.menubarred}>
          <li className="menu">
            <a className={themeContext.theme.menubarred} href="#news">
              Home
            </a>
          </li>
          <li className="menu">
            <a className={themeContext.theme.menu} href="#news">
              News
            </a>
          </li>
          <li className="menu">
            <a className="menuitems" href="#contact">
              Contact
            </a>
          </li>
          <li className="menu">
            <a className="menuitems" href="#about">
              About
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
