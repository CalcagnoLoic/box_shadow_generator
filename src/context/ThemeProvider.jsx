import { createContext, useState } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = (props) => {
    const [darkMode, setDarkMode] = useState(false);

    const ToggleTheme = () => {
        setDarkMode(!darkMode);
    };

    return (
        <ThemeContext.Provider value={{ darkMode, ToggleTheme }}>
            {props.children}
        </ThemeContext.Provider>
    );
};
