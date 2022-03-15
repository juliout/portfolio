import { Box } from "../styled";
import { BoxSobre} from './sobreStyled'
export default function Sobre(){
    return(
        <Box colorBg='#050505'>
            <BoxSobre>
                <img src="images/julioprofile.png" alt="" />

                <div>
                    <p>Um rapaz calmo, com muita vontade de aprender, tendo em vista seu crescimento na area de tecnologia e tambem crescimento pessoal. Em busca de oportunidade para conseguir inicar nessa carreira. Gosto de passar o tempo, estudando e jogando, são meus gostos nesses tempos</p>
                    
                    <span>28 Anos</span>
                    <span>Solteiro</span>
                    <span>Games</span>
                    <span>Comida</span>
                    <span>Carioca</span>
                    <span>Atencioso</span>
                    <span>Persistente</span>
                </div>

            </BoxSobre>   
        </Box>
    )
}