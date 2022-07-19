import styled from "styled-components";

const DivWrapper = styled.div`
display: flex;
flex-direction: column;
align-items: center;
width: 100vw;
max-width: 768px;
p{
    max-width: 30ch;
    margin: 15px 0;
}
section{
}
@media(min-width: 768px){
    border-radius: 16px;
}
`
const DivOrganizer = styled.div`
display: flex;
    
 justify-content: space-between;
`

export {DivWrapper,DivOrganizer}