import styled from 'styled-components'

export const CaixaExp = styled.div`
    width: 100%;
    height: auto;
    color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: hidden;
    margin: 5px;

    h1 {
        width: 50%;
        margin: 1% auto;
        font-size: 20px;
        text-align: center;
        border-bottom: 1px solid red;
        border-image: linear-gradient(to right, #86eb88, #2a7e2d) 1;
        padding: 5px;
    }
`

export const ExpCards = styled.div`
    background-color: #151515;
    width: 95%;
    height: auto;
    
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: space-around;

`

export const SetaMaisExperiencia = styled.div`
    width: 3%;
    height: 60px;
    
    align-self: center;
    display: flex;
    justify-content: center;
    align-items: center;
    img{
        width: 25px;
        height: 25px;
        cursor: pointer;
    }
    img:hover {
        width: 28px;
        height: 28px;
    }
` 