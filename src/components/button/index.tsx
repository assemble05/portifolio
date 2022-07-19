import { ReactElement } from "react";
import StyledButton from "./styledButton";

interface TypedButton {
  text?: string;
  background?: boolean;
  border?: boolean;
  children?: ReactElement;
  width?: string;
  route?: Function;
}
const Button = ({
  text,
  background,
  border,
  children,
  width,
  route,
}: TypedButton) => {
  return (
    <StyledButton
      onClick={() => route}
      width={width}
      border={border}
      background={background}
    >
      {text !== undefined ? text : children}
    </StyledButton>
  );
};
export default Button;
