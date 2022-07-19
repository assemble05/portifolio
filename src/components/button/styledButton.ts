import styled from "styled-components";

interface ButtonProps {
  background?: boolean;
  border?: boolean;
  width?: string;
  onClick?: Function;
}
const StyledButton = styled.button<ButtonProps>`
  width: ${(props) => props.width};
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: ${(props) =>
    props.background === true && "linear-gradient(90deg, #F5636B, #F74987 )"};
  border-color: ${(props) => props.border === true && "#F74987"};
  border-style: ${(props) => props.border === true && "solid"};
  border-width: 1px;
  border-radius: 10px;

  :hover {
    border: none;
    background-image: linear-gradient(90deg, #fe343f, #f91868);
  }
`;

export default StyledButton;
