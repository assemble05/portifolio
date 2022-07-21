import styled from "styled-components";

const DivWrapper = styled.div`
  width: 100vw;
  background-color: transparent;
  height: 1200px;
  margin-top: 2px;
  overflow: hidden;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  .span {
    width: 258px;
    height: 200px;
    transform: skewX(153deg);
    left: 80%;
    position: absolute;
    background-color: ${(props) => props.theme.colors.secondary};
    div {
      width: 258px;
      height: 200px;
      transform: skewX(153deg);
      left: 80%;
      background-color: ${(props) => props.theme.colors.styledYellow};
    }
}
  img {
    position: absolute;
    width: 200px;
    left: 15px;
    height: 228px;
    border-radius: 50px;
  }
  @media (min-width: 1100px) {
    .span {
      left: 90%;
    }
  }

  @media (min-width: 1440px) {
    .span {
      left: 90%;
    }
  }
`;
const ContentDiv = styled.div`
 position: absolute;
 top: 51px;

`

export { DivWrapper,ContentDiv };
