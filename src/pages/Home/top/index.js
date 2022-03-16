import { Box } from "../styled";
import { BoxMore, BoxText } from './topCss'

export default function Top(){
    return (
        <Box colorBg='#050505'>
            <BoxText>
                <span>
                   Olá, Me chamo 
                   <p>Julio Cesar</p> 
                   e esse é meu portfolio
                   <p className="dev">Desenvolvedor FullStack</p>
                </span>
            </BoxText>
            <BoxMore>
                <span>
                    Uma pagina para saber mais sobre tudo que venho fazendo
                    e meus conhecimentos sobre tecnologia e desenvolvimento.
                    também sobre minhas experiencias, estudos e meus conhecimentos em desenvolvimento.
                </span>

                <p> <img src="images/baixo.png" alt="setabaixo" /> Mais sobre mim abaixo. <img src="images/baixo.png" alt="setabaixo" /></p> 
            </BoxMore>
        </Box>
    )
}