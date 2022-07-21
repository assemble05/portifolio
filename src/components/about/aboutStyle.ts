import styled from "styled-components";

const MainStyle = styled.main`
  height: 95vh;
  margin-top: 80px;
  background-color: transparent;
  overflow: hidden;
  display: flex;
  position: absolute;
  align-items: center;
  flex-direction: column;
  section {
    width: 70vw;
    padding: 10px;
    margin: 20px 0px;
    background-color: transparent;
    display: flex;
    padding: 0px 16px;
    align-items: center;
    flex-direction: column;
    h1 {
        margin : 10px 0px;
      -webkit-animation: slide-in-left 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)
        both;
      text-align: center;
      margin: px 0px;
      animation: slide-in-left 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
    }
    h3 {
      text-align: center;
      padding: 10px 0px;
      color: ${(props) => props.theme.colors.styledYellow};
      -webkit-animation: slide-in-right 0.5s
        cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
      animation: slide-in-right 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
    }
    p {
      text-align: center;
      -webkit-animation: slide-in-bottom 0.5s
        cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
      animation: slide-in-bottom 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
      max-width: 68ch;
      letter-spacing: 2px;
    }
    @-webkit-keyframes slide-in-left {
      0% {
        -webkit-transform: translateX(-1000px);
        transform: translateX(-1000px);
        opacity: 0;
      }
      100% {
        -webkit-transform: translateX(0);
        transform: translateX(0);
        opacity: 1;
      }
    }
    @keyframes slide-in-left {
      0% {
        -webkit-transform: translateX(-1000px);
        transform: translateX(-1000px);
        opacity: 0;
      }
      100% {
        -webkit-transform: translateX(0);
        transform: translateX(0);
        opacity: 1;
      }
    }
    @-webkit-keyframes slide-in-right {
      0% {
        -webkit-transform: translateX(1000px);
        transform: translateX(1000px);
        opacity: 0;
      }
      100% {
        -webkit-transform: translateX(0);
        transform: translateX(0);
        opacity: 1;
      }
    }
    @keyframes slide-in-right {
      0% {
        -webkit-transform: translateX(1000px);
        transform: translateX(1000px);
        opacity: 0;
      }
      100% {
        -webkit-transform: translateX(0);
        transform: translateX(0);
        opacity: 1;
      }
    }
    @-webkit-keyframes slide-in-bottom {
      0% {
        -webkit-transform: translateY(1000px);
        transform: translateY(1000px);
        opacity: 0;
      }
      100% {
        -webkit-transform: translateY(0);
        transform: translateY(0);
        opacity: 1;
      }
    }
    @keyframes slide-in-bottom {
      0% {
        -webkit-transform: translateY(1000px);
        transform: translateY(1000px);
        opacity: 0;
      }
      100% {
        -webkit-transform: translateY(0);
        transform: translateY(0);
        opacity: 1;
      }
    }
  }
  div {
    width: 258px;
    height: 100%;
    transform: skewX(153deg);
    position: absolute;
    background-color: ${(props) => props.theme.colors.styledYellow};
  }
  .span {
    width: 258px;
    height: 100%;
    transform: skewX(153deg);
    position: absolute;
    background-color: ${(props) => props.theme.colors.color};
  }
`;
export { MainStyle };
