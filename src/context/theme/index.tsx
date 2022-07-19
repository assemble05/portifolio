import { createContext, ReactNode, useState} from "react";
import { DefaultTheme } from "styled-components";
import dark from "../../Style/themes/dark";
import light from "../../Style/themes/light";
interface TypeChild {
    children : ReactNode
}
interface ContextType {
    handleTheme (): void
    theme : DefaultTheme
    setTheme : Function
  
}

export const ThemeContext  = createContext<ContextType>({} as ContextType)

const ThemePovider = ({children} : TypeChild) => {
    const [theme, setTheme] = useState(dark)

    const handleTheme = () => {
      setTheme(theme.title === "dark" ? light : dark)
    }
    return (<ThemeContext.Provider value={{handleTheme,theme,setTheme}}>{children}</ ThemeContext.Provider>)
}

export default ThemePovider