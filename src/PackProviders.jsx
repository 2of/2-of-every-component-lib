import React from "react";
import { TooltipProvider } from "./contexts/ToolTipProvider";
import { ThemeProvider } from "./contexts/ThemeProvider"; // your ThemeProvider that applies CSS vars
import { DarkModeProvider, useDarkMode } from "./contexts/DarkModeProvider"; // if you have it
import { lightTheme, darkTheme,baseTheme } from "./styles/Themes"

function InnerThemeWrapper({ children }) {
const { darkMode: isDark } = useDarkMode();
  const theme = {
    ...baseTheme,
    ...(isDark ? darkTheme : lightTheme),
  };

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}

export function PackageProviders({ children }) {
  return (
    <DarkModeProvider>
      <TooltipProvider>
        <InnerThemeWrapper>{children}</InnerThemeWrapper>
      </TooltipProvider>
    </DarkModeProvider>
  );
}