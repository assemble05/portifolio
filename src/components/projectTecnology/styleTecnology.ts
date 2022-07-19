import styled from "styled-components";

const DivWrapper = styled.div`
  ul {
    width: 85vw;
    display: flex;
    list-style-type: none;
    align-items: center;
    justify-content: center;
    margin-bottom: 50px;
    li {
      background-color: transparent;
      img {
        width: 10vw;
        max-width: 100px;
        margin: 0 1rem;
      }
    }
  }
`;
export default DivWrapper;
