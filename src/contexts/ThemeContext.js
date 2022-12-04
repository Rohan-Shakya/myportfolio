import {React, createContext, useState} from "react";

export const Themes = {
    GITHUB : "github",
    DARK : "dark",
    LIGHT: "light",
}

export const ThemeContext = createContext({
    theme: Themes.LIGHT,
})

export const ThemeContextProvide = (props) => {
    const [theme, setTheme] = useState(Themes.LIGHT);
    const changeThemeHandler = (theme) => {
        setTheme(theme)
    }
    return <ThemeContext.Provider><div className={theme}>{props.children}</div></ThemeContext.Provider>
}
