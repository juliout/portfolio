import { Box } from "../styled";
import { BoxConhecimentos, Links } from "./conhecimentosCss";
import BoxLogo from "../../../components/boxLogo";

export default function Conhecimentos(){
    return (
        <Box colorBg='#101010' direction>
            
            <Links>
                <h1>Links</h1>
                <div>
                    <a href="/"><img src="images/linkedin.png" alt="" /></a>
                    <a href="/"><img src="images/github.png" alt="" /></a>
                    <a href="/"><img src="images/email.png" alt="" /></a>
                    <a href="https://wa.me/5521973088031"><img src="images/whatsapp.png" alt="" /></a>
                </div>
            </Links>

            <BoxConhecimentos>
                <h1>Conhecimentos</h1>

                <div className="boxTec">
                    <BoxLogo image='images/html.png' text='Html' alt='Html'/>
                    <BoxLogo image='images/css.png' text='Css' alt='Css'/>
                    <BoxLogo image='images/js.png' text='JavaScript' alt='JavaScript'/>
                    <BoxLogo image='images/node.png' text='NodeJs' alt='nodejs'/>
                    <BoxLogo image='images/mysql.png' text='MySql' alt='mysql'/>
                    <BoxLogo image='images/reactjs.png' text='ReactJs' alt='ReactJs'/>
                </div>


            </BoxConhecimentos>
        </Box>
    )
}