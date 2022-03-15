import CardExp from "../../../components/cardsExp";
import { Box } from "../styled";
import { CaixaExp, ExpCards } from './experienciaStyled'

export default function Experiencia(){
    return (
        <Box colorBg='#101010' direction>
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
                   
                </ExpCards>
            </CaixaExp>
        </Box>
    )
}