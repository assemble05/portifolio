import { tecnologies } from "../../service"
import DivWrapper from "./styleTecnology"

interface TypedCard {

    tecnologias : any
  }
const ProjectTecnology = ({tecnologias}: TypedCard) => {

       
    return (
        <DivWrapper>
            <ul>
                {tecnologies.map((info : any , index) => {
                    return <li>{tecnologias.map((name : string) => {
                        if(name === info.alt){
                          return <img  key={info.alt} src={info.url} alt={info.alt}/> 
                        }
                    })}</li>
                })}
            
            </ul>
        </DivWrapper>
    )
}
export default ProjectTecnology