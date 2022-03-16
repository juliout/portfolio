import styled from 'styled-components'

export const CardExperiencia = styled.div`
        background-color: #151515;
       
        width: 90%;
        height: 160px;
        border-left: 4px solid;
        border-image: linear-gradient(to bottom, #86eb88, #2a7e2d) 1;
        margin: 12px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        
        img {
            width: 150px;
            height: 150px;
            margin: 0 30px;
        }
        div {
            
            width: 70%;
            height: 100%;
            display: flex;
            flex-direction: column;            
            align-items: center;
        }
        h1 {
            font-size: 17px;
            width: 70%;
            
        }
        p {
            width: 70%;
            margin: 5px;
            text-align: center;
            height: 80px;
            font-size: 17px;
            margin-top: 10px;
            background-color: #202020;
            padding: 10px;
            border-radius: 20px;
        }
`