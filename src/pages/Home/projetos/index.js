import { Box } from "../styled"
import { ProjetosBox, ProjetosDiv } from "./projetosStyled"
import { ProjetoObj } from '../../../Api/Projetos'
import { useEffect, useState } from "react"

export default function Projetos(){

    const [contador, setContador] = useState(0)

    function contadorMais() {

        if(contador >= ProjetoObj.length-1){
            setContador(0)    
        }else {
            setContador(contador+1)
            
        }
    }
    function contadorMenos() {

        if(contador <= 0){
            setContador(ProjetoObj.length-1)
        }else{
            setContador(contador-1)
            
        }

    } 


    useEffect(() => {

        function Start() {
        
            setTimeout(() => {
        
                if(contador >= ProjetoObj.length-1){
                    setContador(0)    
                } else {
                    setContador(contador+1)
                }
        
                },7000)
        
            }
        Start()

    },[contador])



    return (
        <Box colorBg='#050505' direction='true'>
            <ProjetosBox>
                <h1>Projetos</h1>

                <ProjetosDiv>

                    <img className="buttonSeta" src="images/setaesquerda.png" alt="" onClick={()=> contadorMenos()}/>

                    <div className="projetosDiv">
                        <a href= {ProjetoObj[contador].fonte} >
                            <img src={ProjetoObj[contador].img} alt="imagemprojeto" />
                        </a>
                    
                        <div className="conteudoProjetos">
                            <span>
                            {ProjetoObj[contador].texto}
                            </span>
                            <a href={ProjetoObj[contador].git}><button>GitHub do projeto</button></a>
                        </div>
                    </div>
                    <img className="buttonSeta" src="images/setadireita.png" alt="setadireita" onClick={()=> contadorMais()}/>
                </ProjetosDiv>

            </ProjetosBox>
        </Box>
    )
    
}