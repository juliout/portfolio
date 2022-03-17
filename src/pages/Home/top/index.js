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
                    também sobre minhas experiencias, estudos e um pouco sobre meus gostos.
                </span>

                <p> <img src="images/baixo.png" alt="setabaixo" /> 
                        <a href="#ancoraSobre">Mais sobre mim abaixo </a>    
                    <img src="images/baixo.png" alt="setabaixo" />
                </p> 
            </BoxMore>
        </Box>
    )
}