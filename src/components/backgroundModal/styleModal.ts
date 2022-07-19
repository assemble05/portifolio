import styled from "styled-components";

const StyledBackgroundModal = styled.div`
  background: rgba(0, 0, 0, 0.521);
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
   button{
    position: static;
    margin: 0 0;
   }
   ul {
    padding : 0;
   }
`

export default StyledBackgroundModal