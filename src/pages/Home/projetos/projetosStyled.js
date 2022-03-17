import styled from 'styled-components'

export const ProjetosBox = styled.div` 
    
    width: 100%;
    height: auto;
    min-height: 300px;

    display: flex;
    flex-direction: column;
    align-items: center;

    h1 {
        color: white;
        font-size: 20px;
        text-align:  center;
        margin-top: 10px;
        width: 50%;
        border-bottom: 1px solid green;
        border-image: linear-gradient(to right, #86eb88, #2a7e2d) 1;
        padding: 5px;
    }
`

export const ProjetosDiv = styled.div` 
    background-color: #101010;
    width: 70%;
    height: 390px;
    display: flex;
    
    border-radius: 10px;
    justify-content: space-around;
    align-items: center;
    

    margin-top: 10px;

    .buttonSeta {
        width: 30px;
        height: 40px;
        cursor: pointer;
    }
    .buttonSeta:hover{
        width: 32px;
        height: 42px;
    }

    .projetosDiv {
        width: 80%;
        height: 80%;
        background-color: #202020;
        display: flex;
        align-items: center;
        justify-content: space-around;
    
        transition: 1s;
    }
    .projetosDiv:hover {
        
        width: 81%;
        height: 81%;
        border: 1px solid;
        border-image: linear-gradient(to right, #86eb88, #2a7e2d) 1;
        transition: 1s;
    }
    .projetosDiv a {
        width: 40%;
        height: 70%;
    }
    .projetosDiv img {
        width: 100%;
        height: 100%;
    }

    .conteudoProjetos {
        width: 50%;
        min-width: 150px;
        height: 70%;
        background-color: #151515;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        text-align: center;
        padding: 10px;
        
    }
    .conteudoProjetos h1 {
        padding: 0;
        margin-bottom: 10px;
    }
    .conteudoProjetos span {
        height: 70%;
    }

    .conteudoProjetos a {
        width: 100%;
        height: 20%;
    }
    .conteudoProjetos button {
        width: 100%;
        min-width: 130px;
        height: 30px;
        background-color: transparent;
        color: white;
        cursor: pointer;
        border: 1px solid;
        border-image: linear-gradient(to right, #86eb88, #2a7e2d) 1;
        transition: 1s;
    }
    
    .conteudoProjetos button:hover {
        color: #86eb88;
        width: 40%;

        transition: 1s;
        
    }
    
`