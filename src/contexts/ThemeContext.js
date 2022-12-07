import {React, createContext, useState} from "react";

const darkHandler = () => {
};
let isDarkVAl = false;
if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    // eslint-disable-next-line no-unused-vars
    isDarkVAl = true;
}
export const ThemeContext = createContext({
    isDark: isDarkVAl,
    setIsDark: darkHandler()
})

export const ThemeContextProvide = (props) => {
    const [isDark, setIsDark] = useState(isDarkVAl);
    const [tab, setTab] = useState("home");

    return <ThemeContext.Provider value={{isDark, setIsDark,tab,setTab}}>
        <div className={isDark ? "dark" : ""}>{props.children}</div>
    </ThemeContext.Provider>
}
