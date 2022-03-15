import styled from 'styled-components'

export const CardExperiencia = styled.div`
        background-color: #151515;
       
        width: 350px;
        height: 180px;
        border: 1px solid red;
        border-image: linear-gradient(to right, #86eb88, #2a7e2d) 1;
        margin: 10px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        
        img {
            width: 150px;
            height: 150px;
            margin: 0 5px;
        }
        div {
            width: 100%;
            height: 80%;
            display: flex;
            flex-direction: column;
            justify-content: center;
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
            height: 30%;
            font-size: 17px;
            margin-top: 10px;
            background-color: #202020;
            padding: 10px;
            border-radius: 20px;
        }
`