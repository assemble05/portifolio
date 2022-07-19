import { createContext, ReactNode } from "react";
import { useNavigate } from "react-router-dom";
interface TypeChild {
  children: ReactNode;
}
interface ContextType {
  navigate: Function;
}

export const NavContext = createContext<ContextType>({} as ContextType);
const NavProvider = ({ children }: TypeChild) => {
  let navigate = useNavigate();

  return (
    <NavContext.Provider value={{ navigate }}>{children}</NavContext.Provider>
  );
};
export default NavProvider;
