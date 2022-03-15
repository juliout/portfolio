import { MainBody } from "./styled";

import Top from './top'
import Conhecimentos from './conhecimentos'
import Projetos from './projetos'
import Experiencia from './experiencia'
import Sobre from './sobre'
import Rodape from './rodape'

export default function Home () {
    return(
        <MainBody>
            <Top/>
            <Conhecimentos/>
            <Projetos/>
            <Experiencia/>
            <Sobre/>
            <Rodape/>       
        </MainBody>
    )
}