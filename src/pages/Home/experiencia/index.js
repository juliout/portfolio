import { useState } from "react";
import CardExp from "../../../components/cardsExp";
import { Box } from "../styled";
import { CaixaExp, ExpCards, SetaMaisExperiencia} from './experienciaStyled'
import {experienciasObj} from '../../../Api/experiencia'

export default function Experiencia(){

    const [tamanoDiv, setTamanhoDiv] = useState (51)

    function MaisExp(){
        const a = experienciasObj.length-1 * 25
        setTamanhoDiv(a)
    }

    return (
        <Box colorBg='#101010' direction="true" height={tamanoDiv+'vh'} >
            <CaixaExp>
                <h1>Estudos e Experiências</h1>
                <ExpCards>
                    {
                        experienciasObj.map( item => {
                            const {id , nome , image, data} = item
                            return (
                                <CardExp key={id} image={image} nome={nome} data={data} />
                            )
                        })
                    }
                </ExpCards>
            </CaixaExp>
            <SetaMaisExperiencia>
                <img  onClick={() => MaisExp()} src="images/baixo.png" alt="mais Experiencias" />
            </SetaMaisExperiencia>
        </Box>
    )
}