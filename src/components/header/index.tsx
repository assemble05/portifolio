import Switch from "react-switch";
import { HeaderWrapper } from "./headerStyle";
import { useContext } from "react";
import DropDown from "../dropdown";
import { ThemeContext } from "../../context/theme";
import { NavContext } from "../../context/navigate";

const Header = () => {
  const { theme, handleTheme } = useContext(ThemeContext);
  const { navigate } = useContext(NavContext);
  return (
    <HeaderWrapper>
      <Switch
        onChange={handleTheme}
        checked={theme.title === "dark"}
        checkedIcon={false}
        uncheckedIcon={false}
        onColor={"#090291"}
        handleDiameter={20}
        offColor={"#fda400"}
        height={10}
        offHandleColor={"#040047"}
        onHandleColor={"#fda400"}
        activeBoxShadow={"0 0 2px 3px #ffa033"}
      />

      <DropDown navigate={navigate} />

      <nav>
        <button onClick={() => navigate("/")}>Inicio</button>
        <button onClick={() => navigate("/projects")}>Projetos</button>
        <button onClick={() => navigate("/about-me")}>Sobre mim</button>
      </nav>
    </HeaderWrapper>
  );
};
export default Header;
