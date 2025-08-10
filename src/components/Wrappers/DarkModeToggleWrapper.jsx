import React from "react";
import StandardToggle from "../UI/StandardToggle";
import { useDarkMode } from "../../contexts/DarkModeProvider";
import getIcon from "../../utilities/IconProvider";

export const DarkModeWrapper = ({ type = "box" }) => {
  const { darkMode, toggleDarkMode } = useDarkMode();

  return (
    <>

      <StandardToggle
        type={type}
        checked={darkMode}
        callback={toggleDarkMode}
        firsticon={getIcon("moon")}
        secondicon={getIcon("sun")}
      />
    </>
  );
};