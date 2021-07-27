import React, { useState, useEffect, createContext } from "react";

const storage = localStorage.getItem("theme");

export const ThemeContext = createContext(storage ? storage : '#E0FFFF');

export const ThemeProvider = (props) => {

    const [theme, setTheme] = useState(storage ? storage : '#E0FFFF');

    useEffect(() => {
        localStorage.setItem('theme', theme);
    }, [theme]);

    return (
        <ThemeContext.Provider value={[theme, setTheme]}>
            {props.children}
        </ThemeContext.Provider>
    );
};