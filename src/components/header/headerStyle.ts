import styled from "styled-components";

const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  width: 100vw;
  height: 50px;

  background-color: ${(props) => props.theme.colors.secondary};
  align-items: center;
  box-shadow: 1px 1px 2px 1px ${(props) => props.theme.colors.borderHead};

  nav {
    display: none;
  }
  @media (min-width: 768px) {
    justify-content: space-around;
    nav {
      display: flex;
      justify-content: space-evenly;
      width: 447px;
      height: 50px;
      button {
        padding: 10px 12px;
        width: 86px;
       
      }
      button:hover {
        background-color: ${(props) => props.theme.colors.primary};
        animation-name: hoverBtn;
        animation-duration: 1.5s;
        animation-timing-function: linear;
        animation-iteration-count: inherit;
   
      }
      @keyframes hoverBtn {
        0%{opacity:0.2;
        }
        
        20% {
          opacity:0.4;
        }
        40% {opacity:0.6;
        
        }
        60% {
          opacity:0.8;
        }
        100% {opacity:1.0;
        }
      }
    }
    .DropDownMenu {
      display: none;
    }
  }
`;

export { HeaderWrapper };
