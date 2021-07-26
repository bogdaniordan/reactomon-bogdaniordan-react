import React, { useState, useEffect, createContext } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = (props) => {
    const storage = localStorage.getItem("theme");

    const [theme, setTheme] = useState(localStorage.getItem('theme') || '#E0FFFF');

    useEffect(() => {
        localStorage.setItem('theme', theme);
    }, [theme]);

    return (
        <ThemeContext.Provider value={[theme, setTheme]}>
            {props.children}
        </ThemeContext.Provider>
    );
};