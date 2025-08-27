# 2of.io UI Library

Im just taking all of the bits I wrote from my little portfolio [2of.io](https://2of.io) project and flubbing them into a nice UI kit.

---
# 2-of-every-component-lib

A collection of reusable React UI components and utilities.

## Components Overview

| Component Name            | Status   | Description/Filler                |
|---------------------------|----------|-----------------------------------|
| CollapsableContainer      | ✅       | Expand/collapse content sections  |
| ImageModal                | ✅       | Modal for displaying images       |
| StandardButton            | ✅       | Customizable button               |
| StandardDropdown          | ✅       | Dropdown/select input             |
| StandardRadioButtons      | ✅       | Group of radio buttons            |
| StandardTextField         | ✅       | Text input field                  |
| StandardToggle            | ✅       | Toggle/switch input               |
| RowView                   | ✅       | Display rows of labeled content   |
| TestComponent             | 🟦       | Example/test component            |
| FancyCard                 | ⬜️       | (Filler) Card with shadow         |
| NotificationBanner        | ⬜️       | (Filler) Banner for notifications |
| LoadingSpinner            | ⬜️       | (Filler) Animated spinner         |

## Providers

| Provider Name      | Status   | Description                        |
|--------------------|----------|------------------------------------|
| PackageProviders   | ✅       | Wraps app with all providers       |
| DarkModeProvider   | ✅       | Provides dark mode context         |
| ThemeProvider      | ✅       | Provides theme context             |
| TooltipProvider    | ✅       | Provides tooltip context           |

## Wrappers

| Wrapper Name           | Status   | Description                      |
|------------------------|----------|----------------------------------|
| DarkModeWrapper        | ✅       | Wrapper for dark mode toggling   |

## Utilities

| Utility Name           | Status   | Description                      |
|------------------------|----------|----------------------------------|
| IconProvider           | ✅       | Provides icon context            |

## Snippets

| Snippet Name           | Status   | Description                      |
|------------------------|----------|----------------------------------|
| SnippetCode            | ✅       | Code snippet display component   |

---

**Legend:**  
✅ = Implemented  
🟦 = Example/Test  
⬜️ = Filler/Planned

---

## Usage

# Theming and Providers Usage

This library uses a flexible provider system to handle theming (light/dark mode), tooltips, and more.  
Below is an example of how the providers are composed and how you should use them in your app.

---

## Example: `PackageProviders`

```jsx
import React from "react";
import { TooltipProvider } from "./contexts/ToolTipProvider";
import { ThemeProvider } from "./contexts/ThemeProvider"; // Applies CSS variables
import { DarkModeProvider, useDarkMode } from "./contexts/DarkModeProvider";
import { lightTheme, darkTheme, baseTheme } from "./styles/Themes";

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
```

---

## How to Use

1. **Wrap your app with `PackageProviders`:**

   ```jsx
   import { PackageProviders } from "2-of-every-component-lib";

   function App() {
     return (
       <PackageProviders>
         {/* Your app components here */}
       </PackageProviders>
     );
   }
   ```

2. **How it works:**
   - `DarkModeProvider` supplies dark mode context.
   - `TooltipProvider` enables tooltips throughout your app.
   - `InnerThemeWrapper` uses the current dark mode state to select and apply the correct theme (light or dark) using `ThemeProvider`.
   - `ThemeProvider` sets CSS variables globally, so your styles can use them.

3. **Use CSS variables in your styles in theme and just define as jsx :**

   ```css
   body {
     background: var(--color-bg);
     color: var(--color-text);
   }
   ```

---

## Customizing Themes

You can customize `lightTheme`, `darkTheme`, and `baseTheme` in `./styles/Themes.js` to fit your brand or app needs; just override as needed

---



**Tip:**  
All components in this library will automatically use the correct theme if you wrap your app with `PackageProviders

Documentation is also available in /src/data  as JSON (it renders out to the / path anyway as below)


![Screenshot 1](src/screencaps/1.png)


![Screenshot 2](src/screencaps/2.png)



