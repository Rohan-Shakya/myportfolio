import React, {createContext, Dispatch, SetStateAction, useState} from "react";

type AppContextInterface = {
    isDark: boolean, setIsDark: Dispatch<SetStateAction<boolean>>, tab?: string, setTab?: Dispatch<SetStateAction<string>>
}

const darkHandler = (): any => {
};

let isDarkVAl:boolean = false;
if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    // eslint-disable-next-line no-unused-vars
    isDarkVAl = true;
}

export const ThemeContext = createContext<AppContextInterface>({
    isDark: isDarkVAl, setIsDark: darkHandler(),
})

type Props = {
    children: React.ReactNode
}

export const ThemeContextProvide: React.FC<Props> = ({children}) => {
    const [isDark, setIsDark] = useState(isDarkVAl);
    const [tab, setTab] = useState("home");

    return <ThemeContext.Provider value={{isDark, setIsDark, tab, setTab}}>
        <div className={isDark ? "dark" : ""}>{children}</div>
    </ThemeContext.Provider>
}
