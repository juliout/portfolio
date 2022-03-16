import { useState } from "react";
import CardExp from "../../../components/cardsExp";
import { Box } from "../styled";
import { CaixaExp, ExpCards, SetaMaisExperiencia} from './experienciaStyled'

export default function Experiencia(){

    const [tamanoDiv, setTamanhoDiv] = useState (50)

    function MaisExp(){
        const a = tamanoDiv + 20
        setTamanhoDiv(a)
    }

    return (
        <Box colorBg='#101010' direction='true' height={tamanoDiv+'vh'} >
            <CaixaExp>
                <h1>Estudos e Experiências</h1>
                <ExpCards>
                    <CardExp
                        image='digitalhouse.jpg' nome='Digital House'
                        data='02/21 à 09/21'
                    />
                    <CardExp
                        image='unicesumar.jpg' nome='Faculdade Unicesumar'
                        data='02/21 à 09/21'
                    />  
                    <CardExp
                        image='unicesumar.jpg' nome='Faculdade Unicesumar'
                        data='02/21 à 09/21'
                    />                              
                   
                </ExpCards>
            </CaixaExp>
            <SetaMaisExperiencia>
                <img  onClick={()=> MaisExp()} src="images/setabaixo.png" alt="mais Experiencias" />
            </SetaMaisExperiencia>
        </Box>
    )
}