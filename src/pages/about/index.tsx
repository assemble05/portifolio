import Header from "../../components/header";
import AboutMe from "../../components/about";
import BackgroundCanvas from "../../components/canvas";
import { DivWrapper } from "./aboutStyle";
const About = () => {

  return (
    <>
      <Header />
    <DivWrapper>
     <BackgroundCanvas style={{ width: "100%", height: "1200px"}}>
       <AboutMe/>
     </BackgroundCanvas>
    </DivWrapper>
    </>
  );
};
export default About;
